import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Dashboard from "./pages/Pages/Dashboard/Dashboard";
import Footer from "./pages/Pages/Footer/Footer";
import Navbar from "./pages/Pages/Navbar/Navbar";
import NotFound from "./pages/Pages/NotFound/NotFound";
import Products from "./pages/Pages/Products/Products";
import Services from "./pages/Pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
          <Home />

          </Route>
          <Route path="/products">
              <Products/>
          </Route>
          <Route path="/services">
              <Services/>
          </Route>
          <Route path="/dashboard">
              <Dashboard/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
