import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quotes from "./components/pages/Quotes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Quotes />,
    },
    {
      path: "/test",
      element: <div>testestetstest</div>,
    },
    {
      path: "/for",
      element: <div></div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
