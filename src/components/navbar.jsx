import React from 'react'

const navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-800 text-white p-2   shadow-md">
      <div className="logo"> 
         <span className="font-bold text-xl">iTask</span>
         </div>
         
        <ul className="flex space-x-8">
            <li className="hover:scale-110 transition-all cursor-pointer ">Home</li>
            <li className="hover:scale-110 transition-all cursor-pointer px-4">Your Tasks</li>
            
        </ul>
    </nav>
  )
}

export default navbar
