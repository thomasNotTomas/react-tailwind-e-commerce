import React from 'react'
import Navbar from '../navigation/Navbar'
import Sidebar from '../navigation/Sidebar'
import Landing from '../sections/Landing'
import Footer from '../sections/Footer'

export default function () {
  return (
    <div>
        <Navbar></Navbar>
        <section className='flex 
                            '>
            <Sidebar></Sidebar>
            <Landing></Landing>
        </section>
        <Footer></Footer>
    </div>
  )
}
