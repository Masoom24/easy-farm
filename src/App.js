import Header from './components/header';
import Home from './pages/home'
import ViewProducts from './pages/viewProduct';
import NotFound from './pages/404';
import Footer from './components/footer';
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
