import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getApp, getAll } from "../../../Utils/api.js";
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
      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-2">
          <h2>{app.Name}</h2>
          <p className="lead">{app.Description}</p>
          <p>
            <strong>Size:</strong> {app.Size}
          </p>
          <p>
            <strong>Price:</strong> {app.Price}
          </p>
          <a href={app.Order} className="btn btn-buy me-2">
            Buy Now
          </a>
          <a href={`/assets/Download/${app.Download}`} download className="btn btn-down">
            Download
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={app.Imgs?.[0]}
            alt={app.Name}
            className="img-fluid rounded-4 shadow"
          />
        </div>
      </div>

      {app.What > 0 &&
      <section className="mb-4">
        <h4>🧰 Where You Can Use It</h4>
        <ul>
          {app.What.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
      }

      {app.Features && (
      <section className="mb-4">
        <h4>🚀 Features</h4>
        <ul>
          {app.Features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </section>
      )}

      {app.Compatible && (
        <section className="mb-4">
          <h4>💻 Compatible With</h4>
          <ul>
            {app.Compatible.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {app.License != null && (
      <section className="mb-4">
        <h4>📜 License Options</h4>
        <div className="row g-3">
          {app.License.map((lic, i) => (
            <div className="col-12 col-sm-6 col-md-4" key={i}>
              <div className="border rounded p-3 h-100 text-center">
                <h6>{lic.for}</h6>
                <p className="text-primary fw-bold">{lic.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      <section className="mb-4">
        <h4>📸 Screenshot</h4>
        <div className="row">
          {app.Imgs.map((img, i) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
              <img
                src={img}
                alt={`Screenshot ${i + 1}`}
                className="img-fluid rounded-3 shadow"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h4>🧩 Related Apps</h4>
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
        <h4>🙏 Donate us</h4>
        <a href="https://secure.bmtmicro.com/cart">Click to Donate.</a>
      </section>
    </div>
  );
}
