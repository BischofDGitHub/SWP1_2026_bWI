import React, { useEffect, useState } from 'react'
import Card2 from './Card2'

export default function PeopleContainer() {

  const [people, setPeople] = useState([]); 

  useEffect(() => {
    fetch("https://675b12f39ce247eb19358f08.mockapi.io/papi/person").then((result) => {
      result.json().then((data) => {
        setPeople(data);
        console.log(data);
      });
    })
  }, []);




  return (
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {people.map((person, index) => {
          return <Card2 key={index} name={person.name} title={person.jobtitle} imageUrl={person.avatar}/>
        })}
    </div>
  )
}
