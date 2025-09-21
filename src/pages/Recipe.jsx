import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.recipes.find((r) => String(r.id) === id);
        setRecipe(found);
        setRecipes(data.recipes);
      });
  }, [id]);

  if (!recipe) {
    return <p>Zip qilib ishlatsangiz xatoliksiz ishlaydi githubdan kirsez hatolik beryabdi</p>;
  }

  const randomRecipes = recipes
    .filter(r => String(r.id) !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/recipes" className="nav-link active">Recipes</Link>
          </nav>

          <Link to="/recipes" className="btn btn-browse">Browse recipes</Link>
        </div>
      </header>

      <main className="container recipe-detail">
        <Link to="/recipes" className="back-link">
          <span className="re">Recipes /</span>Mediterranean Chickpea Salad
        </Link>

        <div className="detail-header">
          <img src={recipe.image.large} alt={recipe.title} className="detail-img" />
          <div className="detail-info">
            <h1>{recipe.title}</h1>
            <p className="overview">{recipe.overview}</p>
            <div className="recipe-meta">
              <div className="meta-item">
                <img src="/images/icon-servings.svg" alt="Servings" />
                <span><strong>Servings:</strong> {recipe.servings}</span>
              </div>
              <div className="meta-item">
                <img src="/images/icon-prep-time.svg" alt="Prep time" />
                <span><strong>Prep:</strong> {recipe.prepMinutes} mins</span>
              </div>
              <div className="meta-item">
                <img src="/images/icon-cook-time.svg" alt="Cook time" />
                <span><strong>Cook:</strong> {recipe.cookMinutes} mins</span>
              </div>
            </div>
            <section className="ingredients-section">
              <h2>Ingredients:</h2>
              <ul>
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>
                    <img src="/images/icon-bullet-point.svg" alt="" className="bullet-icon" />
                    {ing}
                  </li>
                ))}
              </ul>
            </section>

            <section className="instructions-section">
              <h2>Instructions:</h2>
              <ol>
                {recipe.instructions.map((step, i) => (
                  <li key={i}>
                    <img src="/images/icon-bullet-point.svg" alt="" className="bullet-icon" />
                    {step}
                  </li>
                ))}
              </ol>
            </section>

          </div>
        </div>

        <div className="chiziq"></div>

        <div className="more-recipes">
          <h2>More Recipes</h2>
          <div className="grid">
            {randomRecipes.map((recipe) => (
              <div key={recipe.id} className="card">
                <img
                  src={recipe.image.small}
                  alt={recipe.title}
                  className="card-img"
                />
                <div className="card-body">
                  <h3>{recipe.title}</h3>
                  <p>{recipe.overview}</p>
                  <p>
                    <img className="iconn" width={17} height={17} src="/images/icon-servings.svg" alt="" />
                    <strong>Servings:</strong> {recipe.servings}
                  </p>
                  <p>
                    <img className="iconn" width={17} height={17} src="/images/icon-cook-time.svg" alt="" />
                    <strong>Cook:</strong> {recipe.cookMinutes} mins  {" "}
                    <img className="iconn" width={17} height={17} src="/images/icon-prep-time.svg" alt="" />
                    <strong>Prep:</strong> {recipe.prepMinutes} mins
                  </p>
                  <Link to={`/recipe/${recipe.id}`} className="btn btn-view">
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="chiziq"></div>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="made-with">Made with ❤️ and 🥑</div>
          <div className="socials">
            <a href="#" aria-label="Instagram"><img src="/images/icon-instagram.svg" alt="Instagram" /></a>
            <a href="#" aria-label="Bluesky"><img src="/images/icon-bluesky.svg" alt="Bluesky" /></a>
            <a href="#" aria-label="Tiktok"><img src="/images/icon-tiktok.svg" alt="Tiktok" /></a>
          </div>
        </div>
      </footer>
    </>
  );
}