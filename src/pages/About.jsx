import { useState } from "react";
import "../css/about.css";

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
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="./About" className="nav-link active">
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
              <a href="/" className="nav-link ">
                Home
              </a>
              <a href="./About" className="nav-link active">
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
        <div className="miss">
          <div className="ion">
            <h4 className="our">Our mission</h4>
            <h2 className="help">
              Help more people cook <br /> nourishing meals, <br /> more often.
            </h2>
            <p className="healthy">
              Healthy Recipe Finder was created to prove that healthy <br />{" "}
              eating can be convenient, affordable, and genuinely <br />{" "}
              delicious.
            </p>
            <p className="we">
              We showcase quick, whole-food dishes that anyone can <br />{" "}
              master—no fancy equipment, no ultra-processed shortcuts <br />{" "}
              —just honest ingredients and straightforward steps.
            </p>
          </div>
          <div className="img">
            <img
              src="images/image-about-our-mission-large.webp"
              alt="Oshpaz opa"
            />
            <img
              className="pattern"
              src="images/pattern-squiggle-2.svg"
              alt="Pattern"
            />
          </div>
        </div>

        <div className="chiziq"></div>

        <div className="why">
          <div className="wi">
            <h2 className="exist">Why we exist</h2>
          </div>
          <div className="roy">
            <div className="text">
              <div className="uch">
                <img src="images/icon-bullet-point.svg" alt="" />
                <h3>Cut through the noise.</h3>
              </div>
              <p>
                The internet is bursting with recipes, yet most busy cooks still
                default to take <br /> -away or packaged foods. We curate a
                tight collection of fool-proof dishes so you <br /> can skip the
                scrolling and start cooking.
              </p>
            </div>
            <div className="text">
              <div className="uch">
                <img src="images/icon-bullet-point.svg" alt="" />
                <h3>Empower home kitchens.</h3>
              </div>
              <p>
                When you control what goes into your meals, you control how you
                feel. Every <br /> recipe is built around unrefined ingredients
                and ready in about half an hour of <br /> active prep.
              </p>
            </div>
            <div className="text">
              <div className="uch">
                <img src="images/icon-bullet-point.svg" alt="" />
                <h3>Make healthy look good.</h3>
              </div>
              <p>
                High-resolution imagery shows you exactly what success looks
                like—because <br /> we eat with our eyes first, and confidence
                matters.
              </p>
            </div>
          </div>
        </div>

        <div className="chiziq"></div>

        <div className="why">
          <div className="wi">
            <h2 className="exist">
              Our food <br /> philosophy
            </h2>
          </div>
          <div className="roy">
            <div className="text">
              <div className="uch">
                <img src="images/icon-bullet-point.svg" alt="" />
                <h3>Whole ingredients first.</h3>
              </div>
              <p>
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of <br /> every recipe.
              </p>
            </div>
            <div className="text">
              <div className="uch">
                <img src="images/icon-bullet-point.svg" alt="" />
                <h3>Flavor without compromise.</h3>
              </div>
              <p>
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </p>
            </div>
            <div className="text">
              <div className="uch">
                <img src="images/icon-bullet-point.svg" alt="" />
                <h3>Respect for time.</h3>
              </div>
              <p>
                Weeknight meals should slot into real schedules; weekend cooking
                can be <br /> leisurely but never wasteful.
              </p>
            </div>
            <div className="text">
              <div className="uch">
                <img src="images/icon-bullet-point.svg" alt="" />
                <h3>Sustainable choices.</h3>
              </div>
              <p>
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant <br /> -forward dishes keep things
                planet-friendly.
              </p>
            </div>
          </div>
        </div>

        <div className="chiziq"></div>

        <div className="beyond">
          <div className="the">
            <h2 className="plate">Beyond the plate</h2>
            <p className="food">
              We believe food is a catalyst for <br /> community and well-being.
              By sharing <br /> approachable recipes, we hope to:
            </p>
            <li className="family">
              Encourage family dinners and social <br /> cooking.
            </li>
            <li className="family">
              Reduce reliance on single-use <br /> packaging and delivery waste.
            </li>
            <li className="family">
              Spark curiosity about seasonal produce <br /> and local
              agriculture.
            </li>
          </div>
          <div className="image">
            <img
              src="images/image-about-beyond-the-plate-small.webp"
              alt="Tarif topolmadim"
            />
          </div>
        </div>

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