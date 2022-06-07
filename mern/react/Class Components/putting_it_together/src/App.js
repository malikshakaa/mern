import PersonalCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonalCard firstname="Doe" lastname="Jane" age = {45} hair="Black"/>
      <PersonalCard firstname="smith" lastname="john" age = {88} hair="Brown"/>
    </div>
  );
}

export default App;
