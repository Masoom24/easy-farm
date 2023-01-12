import Header from './components/header';
import Home from './pages/home'
import ViewProducts from './pages/viewProduct';
import NotFound from './pages/404';
import Footer from './components/footer';
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'
import AddProduct from './pages/addproduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './routes/AuthRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><div>This is the main landing page!!</div></Route>
          <Route exact path='/home'>
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          </Route>
          <Route exact path='/ViewProducts'><PrivateRoute><ViewProducts /></PrivateRoute></Route>
          <Route exact path='/AddProduct'><PrivateRoute><AddProduct /></PrivateRoute></Route>
          <Route exact path='/signup'><AuthRoute><Signup /></AuthRoute></Route>
          <Route exact path='/login'><AuthRoute><Login /></AuthRoute></Route>
          <Route exact path='/*'><NotFound /></Route>
        </Switch>
        <Footer />
      </Router >
    </div >
  );
}

export default App;
