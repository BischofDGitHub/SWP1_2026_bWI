import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from "./components/person";
import {
  createBrowserRouter,
  Link,
  RouterProvider
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Person />,
    },
    {
      path: "/test",
      element:<div>testestetstest</div>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
