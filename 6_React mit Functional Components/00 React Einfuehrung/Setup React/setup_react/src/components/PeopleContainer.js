import React, { useEffect, useState } from 'react'
import Card2 from './Card2'
import { Link } from 'react-router-dom';

export default function PeopleContainer() {

  const [people, setPeople] = useState([]); 
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://animeapi.skin/search?q=dragon%20ball&page=1").then((result) => {
      result.json().then((data) => {
        console.log(data);
      });
    })
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()));
    setFilteredPeople(filtered);
  }


  return (
    <div className='p-8' >
      <div className='fixed border mb-4 bg-white w-full h-28 p-8 flex'>
        <input type="text" className='border p-4' placeholder='Search'  onChange={(element) => {
          console.log(element.target.value);
          filterPeople(element.target.value);
        }} />
      <Link to="/secret" className='border rounded-lg fixed right-16 p-2 pl-4 pr-4'>Secret</Link>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
        {filteredPeople.map((person, index) => {
          return <Card2 key={index} name={person.name} title={person.jobtitle} imageUrl={person.avatar}/>
        })}
      <Card2 name="Quandale Dingle" title="Ohio Gyatt Rizzler" imageUrl='https://e0.pxfuel.com/wallpapers/177/911/desktop-wallpaper-quandale-dingle-jaw-active-tank.jpg' />
      </div>
    </div>  
      
  )
}
