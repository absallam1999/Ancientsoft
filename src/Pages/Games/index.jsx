import { useEffect, useState } from "react";
import { getAll } from "../../Utils/api";
import "./style.scss";

export default function Games() {
  document.title = `Games - AncientSoft`;

  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    getAll("Games").then((res) => {
      setGames(res.Games || []);
      setFilteredGames(res.Games || []);
    });
  }, []);

  useEffect(() => {
    let updated = [...games];

    if (filter === "Free") {
      updated = updated.filter((g) => g.Price === "FREE");
    } else if (filter === "Best Seller") {
      updated = updated.filter((g) => g.IsBestSeller);
    }

    if (search.trim()) {
      updated = updated.filter((g) =>
        g.Name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    setFilteredGames(updated);
  }, [search, filter, games]);

  return (
    <div className="Games">
      <div className="container py-5">
        <h2 className="text-center mb-4">Explore our Games</h2>
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
            placeholder="Search Games..."
            className="form-control w-auto"
            style={{ minWidth: "200px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="row g-4">
          {filteredGames.map((game, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm rounded-4">
                <a href={`/game/${Number(game.Id)}`}>
                  <img
                    src={game.Imgs[0]}
                    className="card-img-top rounded-top-4"
                    alt={game.Name}
                  />
                </a>
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <a href={`/game/${Number(game.Id)}`}>{game.Name}</a>
                  </h5>
                  <p className="card-text small">
                    {game.Description.slice(0, 60)}...
                  </p>
                  <span className="badge bg-dark mb-2">
                    {game.Price === 0 ? "Free" : `${game.Price}`}
                  </span>
                  <div>
                    <a href={`/game/${Number(game.Id)}`} className="btn btn-sm">
                      Preview
                    </a>
                    <a
                      href={`/assets/Download/${game.Download}`}
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
          {filteredGames.length === 0 && (
            <p className="text-center">No Games found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
