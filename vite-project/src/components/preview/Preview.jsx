import React from 'react'
import './Preview.css'
import burger from '../../assets/preimg/burger.png'
import pribori from '../../assets/preimg/pribori.png'
import food from '../../assets/preimg/food.png'
import cup from '../../assets/preimg/cup.png'
import fri from '../../assets/preimg/fri.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import gg from '../../assets/preimg/pre/gg.png'
import osh from '../../assets/img/osh.png'
import truck from '../../assets/preimg/truck.png'
import previewq from '../../assets/img/previewq.jpg'





const Preview = () => {
    return (


        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className='preview'>
                    <div className="container">
                        <div className="preview__wrapper">
                            <div className="preview__right">
                                <h1 className="preview__title">С нами вкусно!</h1>
                                <div className="preview__images">
                                    <img src={burger} alt="" className="preview__image" />
                                    <img src={pribori} alt="" className="preview__image" />
                                    <img src={food} alt="" className="preview__image" />
                                    <img src={cup} alt="" className="preview__image" />
                                    <img src={fri} alt="" className="preview__image" />
                                </div>
                                <p className="preview__text">
                                    Любимые блюда и восточное гостеприимство
                                </p>


                                <div class="preview__buttons">
                                    <a  href='#Card'>
                                            <p class="preview__button">Меню</p>
                                        </a>
                                        <button class="preview__button">Состав</button>
                                        <button class="preview__button">Локация</button>
                                        <button class="preview__button">Соц-сети</button>
                                </div>

                                
                                

                            </div>
                            <div className="preview__reklama">
                                <img className='preview__reklama-img' src={gg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='preview'>
                    <div className="container">
                        <div className="preview__wrapper">
                            <div className="preview__right">
                                <h1 className="preview__title">С нами вкусно!</h1>
                                <div className="preview__images">
                                    <img src={burger} alt="" className="preview__image" />
                                    <img src={pribori} alt="" className="preview__image" />
                                    <img src={food} alt="" className="preview__image" />
                                    <img src={cup} alt="" className="preview__image" />
                                    <img src={fri} alt="" className="preview__image" />
                                </div>
                                <p className="preview__text">
                                    Любимые блюда и восточное гостеприимство
                                </p>


                                <div class="preview__buttons">
                                    <a  href='#Card'>
                                            <p class="preview__button">Меню</p>
                                        </a>
                                        <button class="preview__button">Состав</button>
                                        <button class="preview__button">Локация</button>
                                        <button class="preview__button">Соц-сети</button>
                                </div>

                            </div>
                            <div className="preview__reklama">
                                <img className='preview__reklama-img2' src={previewq} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>


    )
}

export default Preview
