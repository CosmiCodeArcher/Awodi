import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter ( createRoutesFromElements (
  <Route path="/" element={<Layout />} />
) )

function App () {
  return (
        <RouterProvider router={router}/>
  )
}

export default App