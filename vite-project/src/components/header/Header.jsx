import React from 'react'
import img from '../../assets/img/logoheader.svg'
import './Header.css'
import { Link } from 'react-router-dom'
import Basket from '../../pages/Basket'
import { useCart } from 'react-use-cart'
import profileimg from '../../assets/img/profileimg.svg'


const Header = () => {
    const { totalUniqueItems } = useCart()
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">

                    <div className="header__left">
                        {/* <h1 className='header__logo'>НА РАЙОНЕ</h1> */}
                        <img className='header__logo' src="https://telegra.ph/file/611113713a7986f32ce15.jpg" alt="" />
                        <div className="header__left-links">
                            <Link className='header__links-text' to={'/'}>Главная</Link>
                            <Link className='header__links-text'to={'/about'}>O нас</Link>
                            <a className='header__links-text' href='#Card'>Меню</a>
                        </div>
                    </div>

                    <div className="header_right1">
                        <div className="header__right">
                            <img className='header__basket' src={img} alt="" />
                            <p className='header__basket-text'> <Link to={'/basket'}>корзина</Link> </p>
                            <p className='header__basket-icon'>{totalUniqueItems}</p>
                        </div>

                        <Link to={"/Profile"}>
                            <img className="header__profile" src={profileimg} alt=""/>
                         </Link>


                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
