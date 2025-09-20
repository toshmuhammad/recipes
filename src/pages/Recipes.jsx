import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/recipes.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const [prepFilter, setPrepFilter] = useState(localStorage.getItem("prepFilter") || "");
  const [cookFilter, setCookFilter] = useState(localStorage.getItem("cookFilter") || "");
  const [showPrepDropdown, setShowPrepDropdown] = useState(false);
  const [showCookDropdown, setShowCookDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    slug: "",
    image: "",
    overview: "",
    servings: "",
    prepMinutes: "",
    cookMinutes: "",
    ingredients: "",
    instructions: "",
  });

  // useEffect(() => {
  //   fetch("http://localhost:3000/recipes")
  //     .then((res) => res.json())
  //     .then((data) => setRecipes(data))
  //     .catch((err) => console.error("Error:", err));
  // }, []);

  useEffect(() => {
  fetch(process.env.PUBLIC_URL + "/data/db.json")
    .then((res) => res.json())
    .then((data) => setRecipes(data.recipes))
    .catch((err) => console.error("Error:", err));
}, []);


  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  useEffect(() => {
    localStorage.setItem("prepFilter", prepFilter);
  }, [prepFilter]);

  useEffect(() => {
    localStorage.setItem("cookFilter", cookFilter);
  }, [cookFilter]);

  const togglePrep = (minutes) => {
    setPrepFilter(prepFilter === String(minutes) ? "" : String(minutes));
  };

  const toggleCook = (minutes) => {
    setCookFilter(cookFilter === String(minutes) ? "" : String(minutes));
  };

  const clearPrep = () => setPrepFilter("");
  const clearCook = () => setCookFilter("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.overview.toLowerCase().includes(search.toLowerCase());

    const matchesPrep = prepFilter ? Number(recipe.prepMinutes) <= Number(prepFilter) : true;
    const matchesCook = cookFilter ? Number(recipe.cookMinutes) <= Number(cookFilter) : true;

    return matchesSearch && matchesPrep && matchesCook;
  });

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSaveRecipe = async () => {
    if (!newRecipe.title || !newRecipe.slug || !newRecipe.image) {
      alert("Iltimos barcha majburiy maydonlarni to‘ldiring!");
      return;
    }

    const recipeData = {
      id: editId || String(Date.now()),
      title: newRecipe.title,
      slug: newRecipe.slug,
      image: { small: newRecipe.image },
      overview: newRecipe.overview,
      servings: newRecipe.servings,
      prepMinutes: newRecipe.prepMinutes,
      cookMinutes: newRecipe.cookMinutes,
      ingredients: newRecipe.ingredients.split(",").map((i) => i.trim()),
      instructions: newRecipe.instructions.split(",").map((i) => i.trim()),
      addedBy: "local",
    };

    try {
      if (editId) {
        const res = await fetch(`http://localhost:3000/recipes/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(recipeData),
        });
        if (!res.ok) throw new Error("Update failed");
        const data = await res.json();
        setRecipes(recipes.map((r) => (r.id === editId ? data : r)));
      } else {
        const res = await fetch("http://localhost:3000/recipes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(recipeData),
        });
        if (!res.ok) throw new Error("Save failed");
        const data = await res.json();
        setRecipes([...recipes, data]);
      }

      setShowModal(false);
      setEditId(null);
      resetForm();
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  const resetForm = () => {
    setNewRecipe({
      title: "",
      slug: "",
      image: "",
      overview: "",
      servings: "",
      prepMinutes: "",
      cookMinutes: "",
      ingredients: "",
      instructions: "",
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("O‘chirmoqchimisiz")) {
      try {
        const res = await fetch(`http://localhost:3000/recipes/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Delete failed");
        setRecipes(recipes.filter((r) => r.id !== id));
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  const handleEdit = (recipe) => {
    setEditId(recipe.id);
    setNewRecipe({
      title: recipe.title,
      slug: recipe.slug,
      image: recipe.image.small,
      overview: recipe.overview,
      servings: recipe.servings,
      prepMinutes: recipe.prepMinutes,
      cookMinutes: recipe.cookMinutes,
      ingredients: recipe.ingredients.join(", "),
      instructions: recipe.instructions.join(", "),
    });
    setShowModal(true);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <img src="/images/logo.svg" alt="Logo" />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/recipes" className="nav-link active">Recipes</a>
          </nav>

          <a href="#" className="btn btn-browse">Browse recipes</a>
        </div>
      </header>

      <main className="home" role="main">
        <section className="intro">
          <h1>Explore our simple, healthy recipes</h1>
          <p>
            Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.
          </p>
        </section>

        <section className="filters container">
          <div className="filter-buttons">
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => {
                  setShowPrepDropdown(!showPrepDropdown);
                  setShowCookDropdown(false);
                }}
              >
                Max Prep Time
                <img src="/images/icon-chevron-down.svg" alt="chevron" />
              </button>
              {showPrepDropdown && (
                <div className="dropdown-menu">
                  {[0, 5, 10, 15, 20].map((m) => (
                    <label key={m}>
                      <input
                        type="checkbox"
                        checked={prepFilter === String(m)}
                        onChange={() => togglePrep(m)}
                      />
                      {m} minutes
                    </label>
                  ))}
                  <button onClick={clearPrep}>Clear</button>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => {
                  setShowCookDropdown(!showCookDropdown);
                  setShowPrepDropdown(false);
                }}
              >
                Max Cook Time
                <img src="/images/icon-chevron-down.svg" alt="chevron" />
              </button>
              {showCookDropdown && (
                <div className="dropdown-menu">
                  {[0, 5, 10, 15, 20].map((m) => (
                    <label key={m}>
                      <input
                        type="checkbox"
                        checked={cookFilter === String(m)}
                        onChange={() => toggleCook(m)}
                      />
                      {m} minutes
                    </label>
                  ))}
                  <button onClick={clearCook}>Clear</button>
                </div>
              )}
            </div>
          </div>

          <div className="search-wrapper">
            <div className="search-bar">
              <img src="/images/icon-search.svg" alt="search" className="search-icon" />
              <input
                type="text"
                placeholder="Search by name or ingredient…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="btn-add" onClick={() => setShowModal(true)}>+Add</button>
          </div>
        </section>

        <section className="recipes container">
          <div className="grid">
            {filteredRecipes.map((recipe) => (
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
                    <strong>Cook:</strong> {recipe.cookMinutes} mins{" "}
                    <img className="iconn" width={17} height={17} src="/images/icon-prep-time.svg" alt="" />
                    <strong>Prep:</strong> {recipe.prepMinutes} mins
                  </p>

                  {recipe.addedBy === "local" && (
                    <div className="edit-delete">
                      <button className="btn-edit" onClick={() => handleEdit(recipe)}>🖋</button>
                      <button className="btn-delete" onClick={() => handleDelete(recipe.id)}>✖</button>
                    </div>
                  )}
                  <Link to={`/recipe/${recipe.id}`} className="btn btn-view">
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="chiziq"></div>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="made-with">Made with ❤️ and 🥑</div>
          <div className="socials">
            <a href="#"><img src="/images/icon-instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/images/icon-bluesky.svg" alt="Bluesky" /></a>
            <a href="#"><img src="/images/icon-tiktok.svg" alt="Tiktok" /></a>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editId ? "Edit Recipe" : "Add New Recipe"}</h2>
            <div className="modal-inputs">
              <input name="title" placeholder="Title" value={newRecipe.title} onChange={handleChange} />
              <input name="slug" placeholder="Slug" value={newRecipe.slug} onChange={handleChange} />
              <input name="image" placeholder="Image URL" value={newRecipe.image} onChange={handleChange} />
              <input name="overview" placeholder="Overview" value={newRecipe.overview} onChange={handleChange} />
              <input name="servings" placeholder="Servings" value={newRecipe.servings} onChange={handleChange} />
              <input name="prepMinutes" placeholder="Prep Minutes" value={newRecipe.prepMinutes} onChange={handleChange} />
              <input name="cookMinutes" placeholder="Cook Minutes" value={newRecipe.cookMinutes} onChange={handleChange} />
              <input name="ingredients" placeholder="Ingredients (comma separated)" value={newRecipe.ingredients} onChange={handleChange} />
              <input name="instructions" placeholder="Instructions (comma separated)" value={newRecipe.instructions} onChange={handleChange} />
            </div>
            <div className="modal-actions">
              <button onClick={handleSaveRecipe} className="btnn">{editId ? "Update" : "Add"}</button>
              <button onClick={() => { setShowModal(false); setEditId(null); resetForm(); }} className="bttn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}