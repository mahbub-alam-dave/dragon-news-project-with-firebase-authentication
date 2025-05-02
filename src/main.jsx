import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import Career from './pages/Career.jsx'
import CategoryPages from './pages/CategoryPages.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "/", Component: Home,
      },
      {
        path: "category/:categoryId",
        Component: CategoryPages,
        hydrateFallbackElement: <span>loading...</span>,
        loader: () => fetch("/news.json")
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "career",
        Component: Career
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider  router={router}/>
    </ContextProvider>
  </StrictMode>,
)
