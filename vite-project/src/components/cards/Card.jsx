    import React, { Fragment, useEffect, useState } from 'react'
    import './Card.css'
    import axios from 'axios';
    import { useCart } from "react-use-cart"

    const Card = () => {
        const [Products, setProducts] = useState([]);
        const { addItem } = useCart()

        useEffect(() => {
            try {
                axios.get("http://localhost:9000/products").then(response => {
                const data = response.data;
                    setProducts(() => data.length ? [...data] : []);
                }).catch(error => console.error(error))
            } catch (error) {
                alert(error?.message)
            }
        }, [Products.length])

        const handleAdd = (item) => {
            alert(item?.title + " Added");
            addItem(item)
        }

        const productItem = Products.map(({id, image, title, description, price, button }, index) => {
            return <Fragment key={index}>
                <div className="card__wrapper">
                    <img className='card__image' src={image} alt="" />
                    <div>
                        <h1 className='card__title'> {title} </h1>
                    </div>
                        <p className="card__text">{description}</p>
                        <p className="card__price">{price} сум</p>
                    <button className="card__basket" onClick={() =>handleAdd({id, image, title, description, price, button, quantity: 1, })}>{button}</button>
                </div>
            </Fragment>
        })

        return (
            <div className='card container' id='Card'> {productItem}</div>
        )
    }

    export default Card
