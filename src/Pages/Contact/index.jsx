import { useState } from "react";
import "./style.scss";

export default function Contact() {
  document.title = "Contact - AncientSoft";
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };
  
  return (
    <div className="contact container py-5">
      <h2 className="mb-2 text-center">Get in Touch</h2>
      <p className="mt-2 text-center">We 'd Love your Message!</p>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="map-responsive rounded-3 shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4563212973134!2d31.23571121544982!3d30.04441938188227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840caa4b6f0fd%3A0x1f0a17b19317c8b5!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1671036509123!5m2!1sen!2seg"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AncientSoft Location"
            ></iframe>
          </div>
        </div>

        <div className="col-md-6">
          <form className="p-4 rounded-4 shadow" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows="4"
                className="form-control"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
