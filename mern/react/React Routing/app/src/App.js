import React from "react";
import {
  BrowserRouter,
  // Link,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Number from "./components/Number";
import Colors from "./components/Colors";
    
function App() {
  return (
    <BrowserRouter>
      {/* <p>
        <Link to="/">Home</Link>
         | 
        <Link to="/number">Number</Link>   
      </p> */}

      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/:word/:color1">
          <Colors/>
        </Route>

        <Route path="/:word">
          <Number />
        </Route>

        <Route path="/:word/:color2/">
          <Colors/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;

