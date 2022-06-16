import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Main from './components/Main';
import './App.css';
import People from './components/People';


function App() {
  return (
    <div className="App">
  <Main/>
     <BrowserRouter>
      <Switch>
        <Route path="/people/:people/">
          <People/>
        </Route>
      </Switch>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
