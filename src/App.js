import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import '../src/css/Utilities.css';
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Dashboard from "./pages/Pages/Dashboard/Dashboard";
import Footer from "./pages/Pages/Footer/Footer";
import MyOrder from "./pages/Pages/MyOrder/MyOrder";
import Navbar from "./pages/Pages/Navbar/Navbar";
import Newsletter from "./pages/Pages/Newsletter/Newsletter";
import NotFound from "./pages/Pages/NotFound/NotFound";
import Pay from "./pages/Pages/Pay/Pay";
import Products from "./pages/Pages/Products/Products";
import Purchase from "./pages/Pages/Purchase/Purchase";
import Review from "./pages/Pages/Review/Review";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />

            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/purchase">
              <Purchase />
            </PrivateRoute>
            <Route exact path="/pay">
              <Pay />
            </Route>
            <Route exact path="/my-order">
              <MyOrder />
            </Route>
            <Route exact path="/review">
              <Review />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Newsletter/>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
