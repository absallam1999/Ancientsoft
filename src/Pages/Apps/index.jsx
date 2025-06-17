import { useEffect, useState } from "react";
import { getAll } from "../../Utils/api";
import "./style.scss";

export default function Apps() {
  document.title = `Apps - AncientSoft`;

  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    getAll("Apps").then((res) => {
      setApps(res.Apps || []);
      setFilteredApps(res.Apps || []);
    });
  }, []);

  useEffect(() => {
    let updated = [...apps];

    if (filter === "Free") {
      updated = updated.filter((a) => a.Price === "FREE");
    } else if (filter === "Best Seller") {
      updated = updated.filter((a) => a.IsBestSeller);
    }

    if (search.trim()) {
      updated = updated.filter((a) =>
        a.Name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredApps(updated);
  }, [search, filter, apps]);

  return (
    <div className="Apps">
      <div className="container py-5">
        <h2 className="text-center mb-4">Explore our Apps</h2>
        <div className="d-flex flex-wrap gap-2 justify-content-between mb-4">
          <div className="btn-group" role="group">
            {["All", "Best Seller", "Free"].map((cat) => (
              <button
                key={cat}
                className={`btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search Apps..."
            className="form-control w-auto"
            style={{ minWidth: "200px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="row g-4">
          {filteredApps.map((app, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm rounded-4">
                <a href={`/app/${Number(app.Id)}`}>
                  <img
                    src={app.Imgs[0]}
                    className="card-img-top rounded-top-4"
                    alt={app.Name}
                  />
                </a>
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <a href={`/app/${Number(app.Id)}`}>{app.Name}</a>
                  </h5>
                  <p className="card-text small">
                    {app.Description.slice(0, 60)}...
                  </p>
                  <span className="badge bg-dark mb-2">
                    {app.Price === 0 ? "Free" : `${app.Price}`}
                  </span>
                  <div>
                    <a href={`/app/${Number(app.Id)}`} className="btn btn-sm">
                      Preview
                    </a>
                    <a
                      href={`/assets/Download/${app.Download}`}
                      download
                      className="btn btn-dark btn-sm"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredApps.length === 0 && (
            <p className="text-center">No Apps found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
