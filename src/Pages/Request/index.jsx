import emailjs from "emailjs-com";
import { useState } from "react";
import "./style.scss";

export default function Request() {
  document.title = "Request - AncientSoft";

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_NEWREQUEST_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [form, setForm] = useState({
    type: "game",
    name: "",
    email: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        serviceID,
        templateID,
        {
          type: form.type,
          name: form.name,
          email: form.email,
          title: form.title,
          description: form.description,
        },
        publicKey,
      )
      .then(() => {
        alert("Request sent!");
        setForm({
          type: "game",
          name: "",
          email: "",
          title: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send:", error);
        alert("Failed to send request. Try again.");
      });
    alert(`Request submitted!\n\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <section className="Request">
      <div className="container py-5">
        <h2 className="text-center mb-4">Submit a Request</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="p-4 shadow rounded-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="type" className="form-label">
                  Request Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="form-select"
                  value={form.type}
                  onChange={handleChange}
                  required
                >
                  <option value="game">Request New Game</option>
                  <option value="app">Request New App</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Game/App Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  rows="4"
                  value={form.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-dark px-4 rounded-pill"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
