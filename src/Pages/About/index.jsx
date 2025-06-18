import Logo from "../../assets/Logo.png";
import "./style.scss";

export default function About() {
  document.title = `About - AncientSoft`;
  return (
    <div className="About">
      <header>
        <h2>About Page</h2>
      </header>
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
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container text-center">
          <h3>Our Values</h3>
          <div className="row mt-4 g-3">
            <div className="col-md-4">
              <div className="value-card p-4 rounded-4 shadow-sm">
                <h5>Innovation</h5>
                <p>We embrace change and constantly seek better solutions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card p-4 rounded-4 shadow-sm">
                <h5>Passion</h5>
                <p>
                  We build things we love — and you’ll feel it in every click.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card p-4 rounded-4 shadow-sm">
                <h5>Trust</h5>
                <p>We believe in transparency and keeping our users first.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="FAQs">
        <h3>FAQs</h3>
        <div className="container">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What is Ancientsoft
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <code>AncientSoft.com</code> is a passionate team of game
                  developers, designers, and creatives committed to building
                  immersive gaming experiences. Since our founding, we've
                  combined ancient inspirations with modern technologies to
                  create games that stand out in quality, style, and
                  storytelling.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Our Mission
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Our mission is to empower users with software solutions
                  <code>(Games, Apps)</code> that are not only fun to play but
                  also leave a lasting impact. Whether it’s mobile, PC, or
                  cross-platform, we aim to deliver excellence, accessibility,
                  and authenticity in every release.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What We Build
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  From full-featured <code>RPGs</code> and arcade-style classics
                  to high-performance <code>apps</code> and platforms,
                  AncientSoft covers it all. Our games are crafted using
                  cutting-edge tools, efficient engines, and a strong focus on
                  user engagement.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Community First
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At <code>AncientSoft</code>, our players come first. We
                  actively listen to user feedback, host regular beta tests, and
                  provide constant updates. Our community shapes the evolution
                  of our titles and inspires our development roadmap.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  What’s Next
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  We’re currently expanding into cloud gaming, multiplayer
                  ecosystems, and AI-enhanced game experiences. Stay tuned for
                  our upcoming releases and platform upgrades{" "}
                  <code>AncientSoft</code> is just getting started.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
