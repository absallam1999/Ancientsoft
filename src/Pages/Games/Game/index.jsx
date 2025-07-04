import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGame, getAll } from "../../../Utils/api.js";
import "lightbox2/dist/css/lightbox.min.css";
import "./style.scss";

export default function Game() {
  const game_id = useParams().id;
  const navigate = useNavigate();
  const [game, setGame] = useState({});
  const [related, setRelated] = useState([]);

  useEffect(() => {
    getGame(Number(game_id)).then((res) => {
      if (res) {
        setGame(res);
        document.title = `${res.Name} - AncientSoft`;
      } else {
        alert(`No Game with id: ${game_id}`);
        navigate("/games");
      }
    });
    getAll("Games").then((res) => {
      const allApps = res.Games;
      const filtered = allApps.filter((item) => item.Id !== Number(game_id));
      setRelated(filtered);
    });
  }, [game_id, navigate]);

  if (!game?.Name)
    return <div className="text-center py-5">Loading Game...</div>;

  return (
    <div className="Game container py-5">
      <div className="row align-items-center">
        <header>
          <h2>{game.Name}</h2>
        </header>
        <div className="col-md-6 mb-2 mb-4 order-2 order-sm-1">
          <p className="lead">{game.Description}</p>
          <p>
            <strong>Size:</strong> {game.Size}
          </p>
          <p>
            <strong>Price:</strong> {game.Price}
          </p>
          {game.Order != null && (
          <a href={game.Order} className="btn btn-buy me-2">
            Buy Now
          </a>
          )}
          <a
            href={`/assets/Download/${game.Download}`}
            download
            className="btn btn-down"
          >
            Download
          </a>
        </div>
        <div className="col-md-6 text-center order-1 order-sm-2 mb-4 mb-sm-0">
          <a
            href={game.Imgs[0]}
            data-lightbox="Game Name"
            data-title={game.Name}
          >
            <img
              src={game.Imgs[0]}
              alt={game.Name}
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

      <section className="mb-4">
        <h4><i className="fa-solid fa-joystick"></i> How to Play</h4>
        <ul>
          {game.How.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h4><i className="fa-solid fa-rocket-launch"></i> Features</h4>
        <ul>
          {game.Features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h4><i className="fa-solid fa-desktop"></i> Requirements</h4>
        <ul>
          {game.Requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </section>

      {game.Awards?.length > 0 && (
        <section className="mb-4">
          <h4 className="mb-4"><i className="fa-solid fa-trophy-star"></i> Awards</h4>
          <div className="row g-3">
            {game.Awards.map((award, i) => (
              <div className="col-4 col-sm-3 col-md-2" key={i}>
                <img
                  src={`/assets/Games/Awards/${award.img}`}
                  alt={award.location}
                  className="img-fluid award-img"
                />
                <p className="small mt-1">{award.location}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-5">
        <h4 className="mb-3"><i className="fa-solid fa-images"></i> Screenshots</h4>
        <div className="row g-3">
          {game.Imgs.map((img, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={i}>
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
        <h4><i className="fa-solid fa-gamepad-modern"></i> Related Games</h4>
        <div className="row g-4">
          {related.slice(0, 4).map((rel, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div
                className="border rounded p-2 text-center h-100 hover-shadow"
                onClick={() => navigate(`/game/${rel.Id}`)}
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
