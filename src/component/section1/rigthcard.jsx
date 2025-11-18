import { ArrowRight } from "lucide-react";
import React from "react";

function rigthcard({data}) {
  return (
    <>
      <div className="flex h-full gap-5 justify-center">
        <div
          className="flex flex-col justify-between  py-8 px-4 h-full w-60 rounded-4xl bg-cover bg-center "
          style={{
            backgroundImage:
              `url(${data.image})`,
              opacity: 0.9,
          }}
        > 

         <div className="h-10 w-10 flex items-center justify-center text-3xl bg-white text-black rounded-full">
            {data.number}
         </div>
         <div>
           <p className=" text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quod quia. </p>
          <div className="flex justify-between mt-6">
             <button className=" font-bold text-white text-xl bg-blue-500 rounded-full px-5 flex gap-2 items-center justify-center">{data.tag}</button>
           <button className=" text-white  bg-blue-500 rounded-full px-1"><ArrowRight /></button>
          </div>
         </div>
        </div>
                        {/* -------- manually added card -------- */}
        {/* <div
          className="h-full w-60 rounded-4xl bg-cover bg-center flex flex-col justify-between  py-8 px-4"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1669270236740-98c768bf2a1e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
opacity: 0.9,
            }}
        >
         <div className="h-10 w-10 flex items-center justify-center text-3xl bg-white text-black rounded-full">
            2
         </div>
         <div>
      <p className=" text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quod quia. Adipisci commodi nobis dolor dolores repellendus, nostrum id sunt?.</p>
             <div className="flex justify-between mt-6">
             <button className=" font-bold text-white text-xl bg-blue-500 rounded-full px-5 flex gap-2 items-center justify-center">Satisfied </button>
           <button className=" text-white  bg-blue-500 rounded-full px-1 "><ArrowRight /></button>
          </div>
         </div>
        </div>

        <div
          className="h-full w-60 rounded-4xl bg-cover bg-center flex flex-col justify-between  py-8 px-4"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1674507925237-ead9a66e485f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwdXNpbmclMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D')",
         opacity: 0.9,
            }}
        >
         <div className="h-10 w-10 flex items-center justify-center text-3xl bg-white text-black rounded-full ">
            3
         </div>
         <div>
      <p className=" text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quod quia. Adipisci commodi nobis dolor dolores repellendus, nostrum id sunt?.</p>
  <div className="flex justify-between mt-6">
             <button className=" font-bold text-white text-xl bg-blue-500 rounded-full px-5 flex gap-2 items-center justify-center">Satisfied </button>
           <button className="  text-white  bg-blue-500 rounded-full px-1"><ArrowRight /></button>
          </div>         </div>
        </div> */}
      </div>
    </>
  );
}

export default rigthcard;
