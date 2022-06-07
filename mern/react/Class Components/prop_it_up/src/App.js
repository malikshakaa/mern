import './App.css';
import PersonalCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonalCard firstname="Doe" lastname="Jane" age = "45" hair="Black"/>
      <PersonalCard firstname="smith" lastname="john" age = "88" hair="Brown"/>
      <PersonalCard firstname="Fillmore" lastname="Millard" age = "50" hair="Brown"/>
      <PersonalCard firstname="smith" lastname="maria" age = "62" hair="Brown"/>
    </div>
  );
}

export default App;
