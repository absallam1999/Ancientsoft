import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import LogoImg from "./../../assets/Logo.png";
import { getAll } from "../../Utils/api.js";
import "./style.scss";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    getAll("Games").then((res) => {
      if (res) setData(res.Games);
    });
  }, []);

  const isDark = theme === "dark";
  const textColor = isDark ? "text-light" : "text-dark";
  const bgColor = isDark ? "bg-dark" : "bg-light";

  return (
    <footer className={`${bgColor} ${textColor} pt-5 pb-4 w-100`}>
      <div className="container-fluid px-5 text-md-start">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <a href="/">
              <img src={LogoImg} alt="AncientSoft" />
            </a>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mb-4">
            <h6 className="text-uppercase fw-bold">Explore</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className={`${textColor} text-decoration-none`}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/games"
                  className={`${textColor} text-decoration-none`}
                >
                  Games
                </a>
              </li>
              <li>
                <a href="/apps" className={`${textColor} text-decoration-none`}>
                  Apps
                </a>
              </li>
              <li>
                <a
                  href="/request"
                  className={`${textColor} text-decoration-none`}
                >
                  Request
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
            <h6 className="text-uppercase fw-bold">Latest</h6>
            <ul className="list-unstyled">
              {data.slice(0, 4).map((d, index) => {
                return (
                  <li key={index}>
                    <a href={`/game/${d.Id}`}>{d.Name}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
            <h6 className="text-uppercase fw-bold">Useful</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/about"
                  className={`${textColor} text-decoration-none`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`${textColor} text-decoration-none`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className={`${textColor} text-decoration-none`}
                >
                  Privacy
                </a>
              </li>
              <li>
                <a href="/help" className={`${textColor} text-decoration-none`}>
                  Help
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mb-4">
            <h6 className="text-uppercase fw-bold">Subscribe</h6>
            <div className="mb-3">
              <p>Don't Mess our Daily Updates.</p>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <button
                className={isDark ? "btn btn-light mt-2" : "btn btn-dark mt-2"}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="text-secondary" />

        <div className="d-flex flex-column flex-md-row align-items-center gap-3">
          <p className="mb-0 text-center text-md-start">
            &copy; 2004 - {new Date().getFullYear()} AncientSoft. All rights
            reserved.
          </p>

          <div className="d-flex gap-3 justify-content-center">
            <a href="/terms">Terms</a>
            <a href="/usage">Usage</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="d-flex justify-content-end gap-3 ms-md-auto">
            <a href="https://facebook.com" className={textColor}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className={textColor}>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className={textColor}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://discord.com" className={textColor}>
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
