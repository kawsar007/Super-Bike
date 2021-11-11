import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Dashboard from "./pages/Pages/Dashboard/Dashboard";
import Footer from "./pages/Pages/Footer/Footer";
import Navbar from "./pages/Pages/Navbar/Navbar";
import NotFound from "./pages/Pages/NotFound/NotFound";
import Products from "./pages/Pages/Products/Products";
import Services from "./pages/Pages/Services/Services";
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
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
