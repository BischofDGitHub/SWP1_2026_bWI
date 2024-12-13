import React, { useEffect, useState } from 'react'
import Card2 from './Card2'

export default function PeopleContainer() {

  const [people, setPeople] = useState([]); 
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://675b12f39ce247eb19358f08.mockapi.io/papi/person").then((result) => {
      result.json().then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      });
    })
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()));
    setFilteredPeople(filtered);
  }


  return (
    <div className='p-8' >
      <div className='fixed border mb-4 bg-white w-full h-28 p-8'>
        <input type="text" className='border p-4' placeholder='Search'  onChange={(element) => {
          console.log(element.target.value);
          filterPeople(element.target.value);
        }}/>
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
