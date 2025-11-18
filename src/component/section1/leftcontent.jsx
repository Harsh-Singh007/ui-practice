
import React from 'react'
import { MoveUpRight } from 'lucide-react'
const leftcontent = () => {
  return (
    <div className='h-[75vh] w-1/3 bg-white px-2 py-4 justify-between flex flex-col '>
          <div className='flex flex-col gap-5'>
            <h3 className='text-6xl font-bold '>Prospective <br /> <span className='text-gray-600'>Customer</span> <br /> Segmentation</h3>
            <p className='text-lg text-gray-600 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam deserunt quo omnis hic distinctio maiores!</p>
          </div>
          <div> 
            <MoveUpRight size={50} strokeWidth={2} />
          </div>
    </div>
  )
}

export default leftcontent