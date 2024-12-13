import logo from './logo.svg';
import './App.css';
import localImage from './images/image.png';
import Person from './components/Person';
import Card from './components/Card';
import List from './components/List';
import Button from './components/Button';
import PeopleContainer from './components/PeopleContainer';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

// const navigate = useNavigate();

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <PeopleContainer/>
    </div>
  },


  {
    path: "/secret",
    element: 
      <div>
        <Link to="/" className='border p-4 rounded-lg top-4 m-4 absolute hover:bg-gray-200 bg-white'>Home</Link>
        {/* <div className='border p-4 rounded-lg top-4 m-4 absolute right-0' onClick={() => navigate("/") }>Home</div> */}
        <div className='content'> 
          <Card firstname="Max" lastname="Mustermann" description="Hallo ich bin Max Mustermann" imgUrl="https://www.w3schools.com/howto/img_avatar.png" />
          <Card firstname="Jonas" lastname="Heim" description="Rizzler" imgUrl="https://wallpapercave.com/wp/wp4175618.jpg"/>
          <Card firstname="Fabian" lastname="Miessgang" description="Mensch" imgUrl={ localImage} />
          <Card firstname="Monkey D." lastname="Luffy" description="Emperor of the seas" imgUrl='https://th.bing.com/th/id/OIP.wSytAearQUDddpc9kJ9bngHaEK?rs=1&pid=ImgDetMain'/>
          <List elements={["A", "B", "Test", "rizz", "ohio", "A", "B", "Test", "rizz", "ohio"]} />
        </div>
        <Button text="Press me" />
    </div>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
