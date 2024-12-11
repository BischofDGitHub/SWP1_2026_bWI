import React from 'react'

export default function List({ elements }) {
    return (
        <ul className='list'>
        {elements.map((element, index) => (
                <li key={index}>{element}</li> // Füge `key` hinzu, um Elemente eindeutig zu identifizieren
            ))}     
        </ul>
        
    
  )
}
