import React from 'react';
import { useCart } from 'react-use-cart';
import './basketcard.css';

const Basketcard = () => {
  const { items, removeItem } = useCart(); 

  const handleRemoveItem = (itemId) => {
    removeItem(itemId); 
  };

  return (
    <div className='basketcard'>
      <div className="container">
        {items.length > 0 ? (
          items.map(item => (
            <div className='basketcard__wrapper' key={item.id}>
              <div className="basketcard__left">
                <img className='basketcard__img' src={item.image} alt={item.title} />
              </div>
              <div className="basketcard__right">
                <div className='basketcard__title'>{item.title}</div>
                <div className='basket__description'>{item.description}</div>
                <div className='basket__price'>{item.price} сум</div>

                <button className='basket__btn' onClick={() => handleRemoveItem(item.id)}>Удалить из корзины</button>
              </div>
            </div>
          ))
        ) : (
          <p className="basketcard__empty">корзина пуста</p>
        )}
      </div>
    </div>
  )
}

export default Basketcard;
