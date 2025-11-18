import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Section1 from './component/section1/section1'
import Section2 from './component/section2/section2'
function App() {
 const cards = [
  {
    number: 10,
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Technology"
  },
  {
    number: 20,
    image:
      "https://images.unsplash.com/photo-1669270236740-98c768bf2a1e?q=80&w=764&auto=format&fit=crop",
    tag: "Photography"
  },
  {
    number: 30,
    image:
      "https://plus.unsplash.com/premium_photo-1674507925237-ead9a66e485f?w=600&auto=format&fit=crop&q=60",
    tag: "Lifestyle"
  }
];
  return (
    <>
    <Section1  data={cards}/>
    <Section2/>
        
    </>
  )
}

export default App
