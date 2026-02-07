import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-blue-500 text-white py-4'>
        <div className="logo">
            <span className='font-bold text-3xl mx-12'>Divinity</span>
        </div>
        <ul className="flex gap-10 mx-12">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
