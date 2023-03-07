import Header from './components/header';
import Home from './pages/home'
import ViewProducts from './pages/viewProduct';
import NotFound from './pages/404';
import Footer from './components/footer';
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'
import AddProduct from './pages/addproduct';
import ContactUs from './pages/contactus'
import AboutUs from './pages/aboutus'
import PrivacyPolicy from './pages/privacypolicy'
import ReturnPolicy from './pages/returnpolicy'
import TermsAndConditions from './pages/terms_and_condition'
import CookiesPolicy from './pages/cookiespolicy'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './routes/AuthRoute';
import PrivateRoute from './routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { authSuccess } from './modules/reducer/authReducer';
import LandingPage from './pages/landPage/index';

function App() {
  const dispatch = useDispatch();

  const user = localStorage.getItem('userData');
  if (user) {
    const loggedInUser = JSON.parse(user);
    dispatch(authSuccess(loggedInUser));
  }

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><LandingPage /></Route>
          <Route exact path='/home'>
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          </Route>
          <Route exact path='/ViewProducts'><PrivateRoute><ViewProducts /></PrivateRoute></Route>
          <Route exact path='/AddProduct'><PrivateRoute><AddProduct /></PrivateRoute></Route>
          <Route exact path='/AddProduct/:id'><PrivateRoute><AddProduct /></PrivateRoute></Route>
          <Route exact path='/signup'><AuthRoute><Signup /></AuthRoute></Route>
          <Route exact path='/login'><AuthRoute><Login /></AuthRoute></Route>
          <Route exact path='/contactus'><ContactUs /></Route>
          <Route exact path='/aboutus'><AboutUs /></Route>
          <Route exact path='/cookiespolicy'><CookiesPolicy /></Route>
          <Route exact path='/privacypolicy'><PrivacyPolicy /></Route>
          <Route exact path='/ReturnPolicy'><ReturnPolicy /></Route>
          <Route exact path='/termsandconditions'><TermsAndConditions /></Route>
          <Route exact path='/*'><NotFound /></Route>
        </Switch>
        <Footer />
      </Router >
    </div >
  );
}

export default App;
