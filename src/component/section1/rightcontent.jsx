import React from 'react'
import Rightcard from './rigthcard.jsx'
const rightcontent = ({data}) => {
 

  return (
    <div className='h-[75vh]  px-4 w-2/3 py-4 flex gap-5 flex-wrap  flex-col'>
          {
            data.map((card, index) => (
              <Rightcard key={index} data={card} />
            ))
          }
    </div>
  )
}

export default rightcontent