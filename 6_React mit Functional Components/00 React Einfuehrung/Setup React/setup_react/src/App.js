import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Person name="Finn" desciption="super Coder"/>
      <Person name="Hannes" desciption="super Programmierer"/>
      <Person name="Sudex" desciption="super Programmierer"/>
      <Person />
    </div>
  );
}

export default App;
