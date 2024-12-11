import logo from './logo.svg';
import './App.css';
import localImage from './images/image.png';
import Person from './components/Person';
import Card from './components/Card';
import List from './components/List';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Card firstname="Max" lastname="Mustermann" description="Hallo ich bin Max Mustermann" imgUrl="https://www.w3schools.com/howto/img_avatar.png" />
        <Card firstname="Jonas" lastname="Heim" description="Rizzler" imgUrl="https://wallpapercave.com/wp/wp4175618.jpg"/>
        <Card firstname="Fabian" lastname="Miessgang" description="Mensch" imgUrl={ localImage} />
        <Card firstname="Monkey D." lastname="Luffy" description="Emperor of the seas" imgUrl='https://th.bing.com/th/id/OIP.wSytAearQUDddpc9kJ9bngHaEK?rs=1&pid=ImgDetMain'/>
        <List elements={["A","B","Test","rizz","ohio","A","B","Test","rizz","ohio"]}/>
        
      </div>
      
      <Button text="Press me"/>

    </div>
  );
}

export default App;
