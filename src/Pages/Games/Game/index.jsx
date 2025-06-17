import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGame, getAll } from "../../../Utils/api.js";
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
      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-2">
          <h2>{game.Name}</h2>
          <p className="lead">{game.Description}</p>
          <p>
            <strong>Size:</strong> {game.Size}
          </p>
          <p>
            <strong>Price:</strong> {game.Price}
          </p>
          <a href={game.Order} className="btn btn-buy me-2">
            Buy Now
          </a>
          <a href={`/assets/Download/${game.Download}`} download className="btn btn-down">
            Download
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={game.Imgs[0]}
            alt={game.Name}
            className="img-fluid rounded-4 shadow"
          />
        </div>
      </div>

      <section className="mb-4">
        <h4>🧩 How to Play</h4>
        <ul>
          {game.How.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h4>🚀 Features</h4>
        <ul>
          {game.Features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h4>🖥 Requirements</h4>
        <ul>
          {game.Requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </section>

      {game.Awards?.length > 0 && (
        <section className="mb-4">
          <h4 className="mb-4">🏆 Awards</h4>
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

      <section className="mb-4">
        <h4>🎮 Screenshots</h4>
        <div className="row g-3">
          {game.Imgs.map((img, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={i}>
              <img
                src={img}
                alt={`Screenshot ${i + 1}`}
                className="img-fluid rounded-3"
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
        <h4>🙏 Donate us</h4>
        <a href="https://secure.bmtmicro.com/cart">Click to Donate.</a>
      </section>
    </div>
  );
}
