import React from 'react'
import Navbar from './navbar.jsx'
import Page1content from './page1content.jsx'
const section1 = ({data}) => {
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Page1content data={data}/>
    </div>
  )
}

export default section1