import { useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export default function ErrorPage() {
  document.title = `404 - Error Page`;

  const location = useLocation();
  return (
    <div className="error-page d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-4 fw-bold text-danger">404</h1>
            <h2 className="mb-3">Oops! Page Not Found</h2>
            <p className="mb-4" style={{ color: `var(--gray);` }}>
              No match for path: <code>{location.pathname}</code>
            </p>
            <a href="/" className="btn btn-dark px-4 py-2">
              Go Home
            </a>
          </div>

          <div className="col-md-6">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
