import React from 'react'

const Navbar = () => {
  return (
    <div className="my-4 gap-3 h-[70px] text-3xl bg-gradient-to-r from-teal-700 to-teal-900 font-mono font-bold text-white rounded-lg shadow-lg flex justify-center items-center px-6">
      <img src='/contacts.svg' alt="Contacts" className="h-[50px] w-[50px]"/>
      <h1 className="tracking-wide">Contact Manager Pro</h1>
    </div>

  )
}

export default Navbar