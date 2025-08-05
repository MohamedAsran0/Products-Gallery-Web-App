import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Components/Layout/Layout';
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import CardDetails from "./Components/CardDetails/CardDetails";

const router = createBrowserRouter([
  { path:'',
    element: <Layout />,
    children: [
      {index: 1, element: <Home />},
      {path: 'products', element: <Products />}
    ]
  },
  {path: '/products/:id', element: <CardDetails />}
])

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
