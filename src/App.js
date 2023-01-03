import Header from './components/header';
import Home from './pages/home'
import ViewProducts from './pages/viewProduct';
import NotFound from './pages/404';
import Footer from './components/footer';
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'
import AddProduct from './pages/addproduct'

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is the main landing page!!</div>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/myProduct",
    element: <ViewProducts />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <RouterProvider router={router} />
      <Footer />
      
  </div>
  
  );
}

export default App;
