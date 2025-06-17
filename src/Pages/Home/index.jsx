import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import { getAll } from "../../Utils/api.js";
import BGImage from "../../assets/background.jpg";
import Testimonials from "../../Components/Testimonials/index.jsx";
import "./style.scss";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const [games, setGames] = useState([]);
  const [apps, setApps] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");

  const allItems = [...games, ...apps];
  const filteredItems = allItems.filter((item) => {
    const matchSearch = item.Name.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filters.length === 0 ||
      (filters.includes("Games") && games.includes(item)) ||
      (filters.includes("Apps") && apps.includes(item)) ||
      (filters.includes("Best Seller") && item.IsBestSeller) ||
      (filters.includes("Free") && item.Price === "FREE");

    return matchSearch && matchFilter;
  });

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) =>
      checked ? [...prev, value] : prev.filter((f) => f !== value),
    );
  };

  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  const handleNavigate = (item) => {
    let path = "";
    if (item.Type === "Game") {
      path = `/game/${item.Id}`;
    } else if (item.Type === "App") {
      path = `/app/${item.Id}`;
    } else {
      path = `/`;
    }
    navigate(path);
  };

  useEffect(() => {
    document.title = `Home - AncientSoft`;
    getAll("Games").then((res) => {
      if (res) setGames(res.Games);
    });
    getAll("Apps").then((res) => {
      if (res) setApps(res.Apps);
    });
  }, []);

  return (
    <div className="Home">
      <header>
        <div className="row position-relative">
          <div className="Heroimage">
            <img src={BGImage} className="img-fluid w-100" alt="Background" />
          </div>

          <div
            className="overlay d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: isDark
                ? `rgba(0 0 0 / 0.7)`
                : `rgba(0 0 0 / 0.4)`,
            }}
          >
            <div className="slider-content container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                  <div className="left-text text-white">
                    <p
                      style={{
                        backgroundColor: `var(--main)`,
                        color: `var(--dark)`,
                        width: `max-content`,
                      }}
                    >
                      Welcome to AncientSoft
                    </p>
                    <h2>Gaming is Our Game!</h2>
                    <p>
                      Download Free Games, VB ActiveX Components, DLLs,
                      utilities, financial Tools and More from Ancientsoft. We
                      are here to bring you some of the best games on the
                      internet.
                    </p>
                    <div className="btns d-flex gap-2 flex-wrap">
                      <button
                        className="btn"
                        onClick={() => handleClick("games")}
                      >
                        <i className="fa-solid fa-gamepad"></i>
                        Games
                      </button>
                      <button
                        className="btn btn-dark"
                        onClick={() => handleClick("apps")}
                      >
                        <i className="fa-solid fa-code"></i>
                        Apps
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 text-center">
                  <div
                    className="carousel slide"
                    id="carouselExampleIndicators"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {games.map((game, index) => {
                        return (
                          <div
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                            key={index}
                          >
                            <img
                              className="d-block w-100"
                              src={game.Imgs[0]}
                              alt={game.Name}
                              style={{
                                position: "relative",
                                borderRadius: "12px",
                              }}
                            />

                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: `rgba(0 0 0 / 0.4)`,
                                borderRadius: "12px",
                                zIndex: 1,
                              }}
                            ></div>
                            <div
                              className="carousel-caption"
                              style={{ zIndex: 2 }}
                            >
                              <h5>{game.Name}</h5>
                              <button
                                className="btn btn-dark"
                                onClick={() =>
                                  handleClick(`game/${Number(game.Id)}`)
                                }
                              >
                                <i className="fa-solid fa-down-to-line"></i>
                                Download
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      ;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="trending py-5">
        <div className="container">
          <h2 className="trending-title mb-4 text-center">
            <i className="fa-solid fa-fire me-2"></i>Trending Games
          </h2>
          <div className="row g-4 justify-content-center">
            {games.slice(0, 4).map((game, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="game-card p-3 h-100 rounded-4 shadow-sm">
                  <div className="game-img mx-auto mb-3">
                    <a href={`/game/${game.Id}`}>
                      <img src={game.Imgs[0]} alt={game.Name} />
                    </a>
                  </div>
                  <h5 className="game-name text-center fw-bold mb-2">
                    <a href={`/game/${game.Id}`}>{game.Name}</a>
                  </h5>
                  <p className="game-desc small text-center">
                    {game.Description}
                  </p>
                  <div className="game-price text-center mt-2">
                    <span className="badge px-3 py-2">{game.Price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="collection py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Our Collection</h2>
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#filterCollapse"
              aria-expanded="false"
              aria-controls="filterCollapse"
            >
              <i className="fa-solid fa-sliders me-1"></i> Filters
            </button>
          </div>

          <div className="collapse mb-4" id="filterCollapse">
            <div className="card card-body">
              <form className="row g-3 align-items-center">
                <div className="col-12 col-md-9 d-flex flex-wrap gap-2">
                  {["Games", "Apps", "Best Seller", "Free"].map((filter) => (
                    <div className="form-check form-check-inline" key={filter}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={filter}
                        name="filters"
                        value={filter}
                        onChange={handleFilterChange}
                      />
                      <label className="form-check-label" htmlFor={filter}>
                        {filter}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="col-12 col-md-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <span className="search-btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row g-4">
            {filteredItems.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <div className="card h-100 shadow-sm rounded-4">
                  <div className="card-body text-center">
                    <div className="circle-avatar mx-auto mb-3">
                      <img src={item.Imgs[0]} alt={item.Name} />
                    </div>
                    <h5
                      className="card-title"
                      onClick={() => handleNavigate(item)}
                    >
                      {item.Name}
                    </h5>
                    <p className="card-text small">{item.Price}</p>
                    <button
                      className="btn btn-dark btn-sm"
                      onClick={() => handleNavigate(item)}
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <Testimonials />
      </section>
    </div>
  );
}
