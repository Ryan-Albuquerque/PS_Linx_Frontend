import React from 'react'

import Header from '../components/Header/index'
import Convert from '../components/Convert/index'
import Top5 from '../components/Top5/index'
import Hits from '../components/Hits/index'
import Footer from '../components/Footer/index'

function Home() {
    return (
        <>
          <Header/>  
          <main>
            <Convert/>
            <Top5/>
            <Hits/>
          </main>
          <Footer/>
        </>
    )
}

export default Home