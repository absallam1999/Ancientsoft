import { useContext } from "react";
import HeaderLogo from "./../../assets/Header-Logo.png";
import DarkLogo from "./../../assets/Header-Logo-Dark.png";
import { ThemeContext } from "../../Context/ThemeContext";
import "./style.scss";

export default function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm ${
        isDark ? "bg-dark navbar-dark" : "bg-light navbar-light"
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={isDark ? DarkLogo : HeaderLogo} alt="AncientSoft" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/games">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apps">
                Apps
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Request">
                Request
              </a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    onClick={toggleTheme}
                    className="theme-toggle ms-2"
                    aria-label="Toggle dark mode"
                  >
                    <span className="toggle-thumb">
                      {isDark ? (
                        <i className="fa-solid fa-lightbulb-on"></i>
                      ) : (
                        <i className="fa-solid fa-lightbulb-slash"></i>
                      )}
                    </span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
