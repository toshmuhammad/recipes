import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home, Recipe, Recipes } from "./pages";

import MainLayout from "./layouts/MainLayout";

// import { action as HomeAction } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home />,
          // loader: HomeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "recipe/:id",
          element: <Recipe />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}/>;
}

export default App;