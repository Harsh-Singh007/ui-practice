import React from 'react'
import Leftcontent from './leftcontent.jsx'
import Rightcontent from './rightcontent.jsx'
const page1content = ({data}) => {
  return (
    <div className='px-16 py-8 flex justify-between h-[90vh] w-full   gap-4'>
        <Leftcontent/>
        <Rightcontent data={data}/>
    </div>
  )
}

export default page1content