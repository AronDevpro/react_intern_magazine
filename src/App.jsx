import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageLayout from "./Component/Layout/PageLayout.jsx";
import HomePage from "./View/HomePage/HomePage.jsx";
import BlogPage from "./View/BlogPage/BlogPage.jsx";
import NewsPage from "./View/NewsPage/NewsPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/blog',
          element: <BlogPage />,
        },
        {
          path: '/news',
          element: <NewsPage />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
