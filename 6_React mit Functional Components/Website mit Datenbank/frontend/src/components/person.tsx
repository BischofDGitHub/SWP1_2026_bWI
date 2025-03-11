import React, { useEffect, useState } from "react";

type Props = {};
type Person={
  name: string,
  age: number
}

export default function person({ }: Props) {
  const [people, setPeople] = useState<Array<Person>>([]);

  useEffect(() => {
    fetch('http://192.168.40.1:5000/people').then((res) => {
      res.json().then((data) => {
        setPeople(data);
        console.log(data); 
      })
    });
  },[]);

  return (
    <div>
      {people.map((person: Person) => (
        <div>
          <h1>{person.name}</h1>
          <h2>{person.age}</h2>
        </div>
      ))}
    </div>);
}
