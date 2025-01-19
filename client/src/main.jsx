import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import App from "./App.jsx"
import { store } from "./StateMangament/Store.jsx"
import About from "./pages/About/About.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Store from "./pages/Store/Store.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/store", element: <Store /> },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
