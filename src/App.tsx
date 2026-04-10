import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Layout from "./components/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Layout>
            <Home />
        </Layout>
    ),
  },
  {
    path: "/about",
    element: (
        <Layout>
            <About />
        </Layout>
    ),
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
