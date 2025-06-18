import Logo from "../../assets/Logo.png";
import "./style.scss";

export default function About() {
  document.title = `About - AncientSoft`;

  const faqData = [
    {
      question: "What is AncientSoft?",
      answer: (
        <>
          <code>AncientSoft.com</code> is a passionate team of developers and
          designers creating immersive, meaningful game and app experiences
          inspired by history.
        </>
      ),
    },
    {
      question: "Our Mission",
      answer: (
        <>
          We craft<code>&nbsp;Games&nbsp;</code>and<code>&nbsp;Apps&nbsp;</code>that blend fun and
          function, empowering users across platforms with excellence and
          authenticity.
        </>
      ),
    },
    {
      question: "What We Build",
      answer: (
        <>
          From full-featured<code>&nbsp;RPGs&nbsp;</code>and retro games to powerful
          utility
          <code>&nbsp;Apps</code>. we use cutting-edge tech and intuitive design.
        </>
      ),
    },
    {
      question: "Community First",
      answer: (
        <>
          Our users shape our future. Through feedback, beta tests, and updates.
          <code>&nbsp;AncientSoft&nbsp;</code>evolves with the community.
        </>
      ),
    },
    {
      question: "What’s Next",
      answer: (
        <>
          We're expanding into cloud gaming, multiplayer ecosystems, and
          AI-driven experiences.<code>&nbsp;AncientSoft&nbsp;</code>is just getting
          started.
        </>
      ),
    },
  ];

  return (
    <div className="About">
      <section className="hero-section text-center py-5">
        <header>
          <div className="container">
            <h1 className="display-5 fw-bold">
              Welcome to <a href="/">AncientSoft</a>
            </h1>
            <p className="lead">
              Where ancient inspiration meets modern innovation.
            </p>
          </div>
        </header>
      </section>
      <section className="mission-section">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
          <div className="text">
            <h3>Our Mission</h3>
            <p>
              At AncientSoft, we aim to build a bridge between simplicity and
              performance through digital entertainment. From classic game
              revival to utility apps, we deliver smart, fun experiences.
            </p>
          </div>
          <div className="image">
            <a href="/">
            <img src={Logo} alt="Logo" />
            </a>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container text-center">
          <h3>Our Values</h3>
          <div className="row mt-4 g-3">
            <div className="col-md-4">
              <div className="value-card p-4 rounded-4 shadow-sm">
                <div className="fs-1 mb-3">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h5>Innovation</h5>
                <p>We embrace change and constantly seek better solutions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card p-4 rounded-4 shadow-sm">
                <div className="fs-1 mb-3">
                  <i className="fa-solid fa-bullseye-arrow"></i>
                </div>
                <h5>Passion</h5>
                <p>
                  We build things we love — and you’ll feel it in every click.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card p-4 rounded-4 shadow-sm">
                <div className="fs-1 mb-3">
                  <i className="fa-solid fa-shield"></i>
                </div>
                <h5>Trust</h5>
                <p>We believe in transparency and keeping our users first.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="FAQs">
        <div className="container">
          <h3 className="text-center mb-4">FAQs</h3>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {faqData.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`flush-heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-heading${index}`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Ready to Explore Our World?</h2>
          <p className="lead">
            Dive into the adventure — where history becomes gameplay!
          </p>
          <a href="/games" className="btn px-4 py-2 mt-3">
            Browse Games
          </a>
        </div>
      </section>
    </div>
  );
}
