import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header/Header'
import NewsDetails from '../Components/NewsDetails/NewsDetails'
import { RightSide } from '../Components/RightSide/RightSide'


export const NewsLayout = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); 
    }, []);
  return (
    <div className='max-w-10/12 mx-auto my-4'>
      <header >
        <nav>
          <Header></Header>
        </nav>
      </header>

       <main className=' md:grid md:grid-cols-12 md:mt-8'>
        <section className='col-span-9'>
        <NewsDetails></NewsDetails>
        </section>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <RightSide></RightSide>
        </aside>
       </main>
    </div>
  )
}
