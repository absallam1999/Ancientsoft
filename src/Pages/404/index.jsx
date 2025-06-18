import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export default function ErrorPage() {
  document.title = `404 - Error Page`;
  const location = useLocation();
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      if (window.history.length > 2) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }, 3000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="error-page d-flex align-items-center justify-content-center min-vh-100">
      <div className="container text-center py-5">
        <div className="row align-items-center justify-content-center g-4">
          <div className="col-md-6">
            <a href="/">
            <img
              src={Logo}
              alt="AncientSoft Logo"
              className="img-fluid mb-4 animate-fade-in"
              style={{ maxWidth: "220px" }}
            />
            </a>
            <h1 className="display-3 fw-bold text-danger mb-3">404</h1>
            <h2 className="mb-2 fw-semibold">Oops! Page Not Found</h2>
            <p className="mb-4" style={{color: `var(--gray);`}}>
              Sorry, the page <code>{location.pathname}</code> doesn’t exist or has been moved.
            </p>
            <a href="/" className="btn btn-dark px-4 py-2 rounded-pill">
              Take Me Home
            </a>
            <p className="mt-3 small" style={{color: `var(--gray);`}}>
              Redirecting {window.history.length > 2 ? "back" : "home"} in {seconds} second{(seconds > 1) ? "s" : ""}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
