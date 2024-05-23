import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useCart } from 'react-use-cart'
import basketcard from '../components/basketcard/basketcard'
import Basketcard from '../components/basketcard/basketcard'
import Button from '../components/button/Button'

const Basket = () => {
  return (
    <div>
      <Header/>
        <Basketcard/>
        <Button/>
      <Footer/>
    </div>
  )
}

export default Basket

