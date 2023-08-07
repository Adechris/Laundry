import React from 'react'
import About from './About'
import Services from './Services'
import Contact from './Contact'
// import Mission from './Mission'
import Blog from './Blog'
import MyCarousel from './MyCarousel'

const HomePage = () => {
  return (
<section>
  <MyCarousel/>
  <About/>
  <Services/>
  <Contact/>
</section>  )
}

export default HomePage