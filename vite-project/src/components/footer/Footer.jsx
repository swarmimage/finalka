import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import instagram from '../../assets/img/instagram.svg'
import tg from '../../assets/img/tg.svg'

const Footer = () => {
  return (
    <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    
                    <div className="footer__left">
                        <h1 className='footer__left-logo'>НА РАЙОНЕ</h1>
                        <div className="footer__left-links">
                            <Link to={'/home'}>главная</Link>
                            <a href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&z=12">местоположение</a>
                            <Link to={'/about'}>о нас</Link>
                            <Link to={'/'}>контакты</Link>
                        </div>
                    </div>

                    <div className="footer__right">
                        <a href="https://www.instagram.com/sardor.akb/"> <img src={instagram} alt="" /></a>
                        <a href="https://web.telegram.org/a/"> <img className='footer__right-soc' src={tg} alt="" /></a>
                    </div>

                </div>
                <div className="footer__down">
                     <p className='footer__down-txt'>© All rights reserved</p>
                </div>
            </div>
    </footer>
  )
}

export default Footer
