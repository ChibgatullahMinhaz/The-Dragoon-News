import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'

export const AuthLayout = () => {
  return (
    <div className='max-w-10/12 mx-auto py-5'>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}
