import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import SaveBooks from "./pages/SaveBook";
import SearchBooks from "./pages/SearchBook";
import NoMatch from "./pages/NoMatch";

function App() {
  
  return (
   
      <Router>
        <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={SearchBooks} />
      <Route exact path="/saved" component={SaveBooks} />
      <Route exact path="/saved/:id" component={SaveBooks} />
      <Route component={NoMatch} />
      </Switch>
      </div>
      <Footer />
      </Router>
     
  );
}



export default App;
