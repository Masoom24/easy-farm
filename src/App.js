import Header from './header/Header';
import Home from './Home/Home'
import ViewProducts from './viewProduct/ViewProducts';
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

]);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <RouterProvider router={router} />
      
  </div>
  
  );
}

export default App;
