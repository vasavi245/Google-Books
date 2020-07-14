import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import "./App.css";
import SaveBooks from "./pages/SaveBook";
import SearchBooks from "./pages/SearchBook";

function App() {
  
  return (
   
      <Router>
        <div>
      <Nav />
      <Switch>
      <Route exact path="/" component={SearchBooks} />
      <Route exact path="/saved" component={SaveBooks} />
      <Route exact path="/saved/:id" component={SaveBooks} />
      </Switch>
      </div>
      </Router>
     
  );
}



export default App;
