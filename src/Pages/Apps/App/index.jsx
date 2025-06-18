import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getApp, getAll } from "../../../Utils/api.js";
import "lightbox2/dist/css/lightbox.min.css";
import "./style.scss";

export default function Prog() {
  const app_id = useParams().id;
  const navigate = useNavigate();
  const [app, setApp] = useState({});
  const [related, setRelated] = useState([]);

  useEffect(() => {
    getApp(Number(app_id)).then((res) => {
      if (res) {
        setApp(res);
        document.title = `${res.Name} - AncientSoft`;
      } else {
        alert(`Error Fetching App with id: ${app_id}`);
        navigate("/apps");
      }
    });

    getAll("Apps").then((res) => {
      const allApps = res.Apps;
      const filtered = allApps.filter((item) => item.Id !== Number(app_id));
      setRelated(filtered);
    });
  }, [app_id, navigate]);

  if (!app?.Name) return <div className="text-center py-5">Loading App...</div>;

  document.title = `${app.Name} - AncientSoft`;
  return (
    <div className="App container py-5">
      <div className="row align-items-center">
        <header>
          <h2>{app.Name}</h2>
        </header>
        <div className="col-md-6 mb-2 order-2 order-sm-1">
          <p className="lead">{app.Description}</p>
          <p>
            <strong>Size:</strong> {app.Size}
          </p>
          <p>
            <strong>Price:</strong> {app.Price}
          </p>
        {app.Order != null && (
          <a href={app.Order} className="btn btn-buy me-2">
            Buy Now
          </a>
        )}
          <a
            href={`/assets/Download/${app.Download}`}
            download
            className="btn btn-down"
          >
            Download
          </a>
        </div>
        <div className="col-md-6 text-center order-1 order-sm-2 mb-4 mb-sm-0">
          <a
            href={app.Imgs?.[0]}
            data-lightbox="App Name"
            data-title={app.Name}
          >
            <img
              src={app.Imgs?.[0]}
              alt={app.Name}
              className="img-fluid rounded-4 shadow-sm gallery-thumb"
              style={{
                cursor: "zoom-in",
                transition: "0.3s",
                objectFit: "cover",
                aspectRatio: "4/3",
              }}
            />
          </a>
        </div>
      </div>

      {app.What && (
        <section className="mb-4">
          <h4>
            <i className="fa-solid fa-toolbox"></i> Where You Can Use It
          </h4>
          <ul>
            {app.What.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {app.Features && (
        <section className="mb-4">
          <h4>
            <i className="fa-solid fa-rocket-launch"></i> Features
          </h4>
          <ul>
            {app.Features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {app.Compatible && (
        <section className="mb-4">
          <h4>
            <i className="fa-solid fa-desktop"></i> Compatible With
          </h4>
          <ul>
            {app.Compatible.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {app.License != null && (
        <section className="mb-4">
          <h4>
            <i className="fa-solid fa-file-contract"></i> License Options
          </h4>
          <div className="row g-3">
            {app.License.map((lic, i) => (
              <div className="col-12 col-sm-6 col-md-4" key={i}>
                <div className="square border rounded p-3 h-100 text-center">
                  <h6>{lic.for}</h6>
                  <p className="text-primary fw-bold">{lic.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-4">
        <h4>
          <i class="fa-solid fa-camera"></i> Screenshot
        </h4>
        <div className="row">
          {app.Imgs.map((img, i) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
              <a
                href={img}
                data-lightbox="screenshots"
                data-title={`Screenshot ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className="img-fluid rounded-4 shadow-sm gallery-thumb"
                  style={{
                    cursor: "zoom-in",
                    transition: "0.3s",
                    objectFit: "cover",
                    aspectRatio: "4/3",
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h4><i className="fa-solid fa-code"></i> Related Apps</h4>
        <div className="row g-4">
          {related.slice(0, 4).map((rel, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div
                className="border rounded p-2 text-center h-100 hover-shadow"
                onClick={() => navigate(`/app/${rel.Id}`)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={rel.Imgs?.[0]}
                  alt={rel.Name}
                  className="img-fluid rounded-3 mb-2"
                />
                <h6 className="text-truncate">{rel.Name}</h6>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h4><i class="fa-solid fa-sack-dollar"></i> Donate us</h4>
        <a href="https://secure.bmtmicro.com/cart">Click to Donate.</a>
      </section>
    </div>
  );
}
