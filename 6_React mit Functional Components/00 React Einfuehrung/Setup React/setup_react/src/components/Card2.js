import React from 'react'

export default function Card2({name, title, imageUrl}) {
  return (
      <div className='border grid grid-cols-2 h-40'>
          <div className='p-4'>
              <h2 className='font-bold text-xl'>{name}</h2>
              <h4>{title}</h4>
          </div>
          <div className='bg-green-400 w-full'>
              <img src={imageUrl} alt="" className='object-cover h-full w-full'/>
          </div>
    </div>
  )
}
