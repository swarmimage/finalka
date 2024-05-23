import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Card from '../components/cards/Card'
import Preview from '../components/preview/Preview'

const Home = () => {
  return (
    <div>
      <Header />
      <Preview />
      <Card/>
      <Footer />

    </div>
  )
}

export default Home
