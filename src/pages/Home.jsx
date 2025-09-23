import { useState } from "react";
import "../css/home.css";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <img src="/images/logo.svg" alt="Logo" />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#" className="nav-link active">
              Home
            </a>
            <a href="./About" className="nav-link">
              About
            </a>
            <a href="./Recipes" className="nav-link">
              Recipes
            </a>
          </nav>

          <a href="./Recipes" className="btn btn-browse">
            Browse recipes
          </a>
        </div>

        {open && (
          <div className="mobile-menu">
            <nav className="main-nav1" aria-label="Main navigation">
              <a href="#" className="nav-link active">
                Home
              </a>
              <a href="./About" className="nav-link">
                About
              </a>
              <a href="./Recipes" className="nav-link">
                Recipes
              </a>
            </nav>
            <a href="./Recipes" className="btn btn-browse">
              Browse recipes
            </a>
          </div>
        )}
      </header>

      <main className="home" role="main">
        <section className="hero container">
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="heal">Healthy</span> meals, zero fuss
            </h1>
            <p className="hero-sub">
              Discover eight quick, whole-food recipes that you can cook tonight{" "}
              <br /> —no processed junk, no guesswork.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary">Start exploring</button>
            </div>
          </div>

          <div className="hero-right" aria-hidden="false">
            <div className="hero-image-frame">
              <img
                src="/images/image-home-hero-large.webp"
                alt="Person cooking in kitchen"
                className="hero-img"
              />
            </div>
          </div>
        </section>

        <section className="features container">
          <h2 className="section-title">What you’ll get</h2>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon-wrap">
                <img
                  src="/images/icon-whole-food-recipes.svg"
                  alt="Whole-food recipes"
                />
              </div>
              <h3 className="feature-title">Whole-food recipes</h3>
              <p className="feature-desc">
                Each dish uses everyday, unprocessed <br /> ingredients.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon-wrap">
                <img src="/images/icon-minimum-fuss.svg" alt="Minimum fuss" />
              </div>
              <h3 className="feature-title">Minimum fuss</h3>
              <p className="feature-desc">
                All recipes are designed to make eating <br /> healthy quick and
                easy.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon-wrap">
                <img
                  src="/images/icon-search-in-seconds.svg"
                  alt="Search in seconds"
                />
              </div>
              <h3 className="feature-title">Search in seconds</h3>
              <p className="feature-desc">
                Filter by name or ingredient and jump <br /> straight to the
                recipe you need.
              </p>
            </article>
          </div>
        </section>

        <div className="chiziq"></div>

        <section className="real-life container">
          <div className="real-text">
            <h2 className="section-title">Built for real life</h2>
            <p className="real-p">
              Cooking shouldn’t be complicated. These recipes come in <br />{" "}
              under <span className="min">30 minutes</span> of active time, fit
              busy schedules, and <br /> taste good enough to repeat.
            </p>
            <p className="real-p">
              Whether you’re new to the kitchen or just need fresh <br /> ideas,
              we’ve got you covered.
            </p>
          </div>

          <div className="real-image">
            <div className="real-image-frame">
              <img
                src="/images/image-home-real-life-large.webp"
                alt="Cutting vegetables on board"
              />
            </div>
          </div>
        </section>

        <div className="cook">
          <section className="cta container">
            <div className="cta-inner">
              <h2>Ready to cook smarter?</h2>
              <p>
                Hit the button, pick a recipe, and get dinner on the table—fast.
              </p>
              <a href="./Recipes" className="btn btn-primary large">
                Browse recipes
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="made-with">Made with ❤️ and 🥑</div>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <img src="/images/icon-instagram.svg" alt="Instagram" />
            </a>
            <a href="#" aria-label="Bluesky">
              <img src="/images/icon-bluesky.svg" alt="Bluesky" />
            </a>
            <a href="#" aria-label="Tiktok">
              <img src="/images/icon-tiktok.svg" alt="Tiktok" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}