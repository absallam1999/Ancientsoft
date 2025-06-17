import "./style.scss";

const testimonials = [
  {
    name: "Mark Smith",
    role: "Game Chronicles",
    comment:
      "Pharaohs’ Curse is a great puzzle-solving game that will offer you many hours of challenging game play.",
  },
  {
    name: "Robert Wade",
    role: "Digital Diversions",
    comment:
      " Deluxanoid is a well thought out game with simple controls, great music and graphics.",
  },
  {
    name: "Mark Hewitt",
    role: "Gamer (Ancientsoft Fan)",
    comment:
      "One of my favorite things about Ancientsoft games is the way that both graphics and music are really give you that ancient Egyptian feel.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          <i className="fa-solid fa-quote-left me-2"></i>
          What Our Users Say
        </h2>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className="testimonial-card shadow rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="circle-avatar mx-auto mb-3">
                    <span className="initial">{t.name[0]}</span>
                  </div>
                  <div>
                    <h5 className="mb-0">{t.name}</h5>
                    <small>{t.role}</small>
                  </div>
                </div>
                <p className="testimonial-text mb-0">
                  <i className="fa-solid fa-quote-left me-2 text-secondary"></i>
                  {t.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
