import React, { useEffect, useState } from "react";

type Props = {};
type Quote ={
  name: string,
  age: number
}

export default function quotes({ }: Props) {
  const [people, setPeople] = useState<Array<Quote>>([]);

  useEffect(() => {
    fetch('http://10.110.48.226:5000/users').then((res) => {
      res.json().then((data) => {
        setPeople(data);
        console.log(data); 
      })
    });
  },[]);

  return (
    <div>
      {people.map((person: Quote) => (
        <div>
          <h1>{person.name}</h1>
          <h2>{person.age}</h2>
        </div>
      ))}
    </div>);
}
