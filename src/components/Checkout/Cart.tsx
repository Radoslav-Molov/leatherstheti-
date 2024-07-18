import React from "react";

function Cart() {
  return (
    <div className='table-cart'>
      <table className='table-data'>
        <tr>
          <th>Продукт</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Общо</th>
        </tr>

        <tr>
          <td className='row-head'>
            <img src='./land2.jpg' alt='' />
            <p>Bifold cardholder</p>
          </td>
          <td>60.00 лв.</td>
          <td>
            <div className='quantity-button'>
              <span className='decrease'>-</span>
              <input
                className='quantity-input'
                type='number'
                name='quantity'
                id='quantity'
                value='1'
                min='1'
                max='100'
              />
              <span className='increase'>+</span>
            </div>
          </td>
          <td>60.00 лв.</td>
        </tr>

        <tr>
          <td className='row-head'>
            <img src='https://i.imgur.com/FUuKZDy.jpg' alt='' />
            <p>Bifold cardholder</p>
          </td>
          <td>60.00 лв.</td>
          <td>
            <div className='quantity-button'>
              <span className='decrease'>-</span>
              <input
                className='quantity-input'
                type='number'
                name='quantity'
                id='quantity'
                value='1'
                min='1'
                max='100'
              />
              <span className='increase'>+</span>
            </div>
          </td>
          <td>60.00 лв.</td>
        </tr>
        {/*
        <tr>
          <td className='row-head'>
            <img src='https://i.imgur.com/0sITitk.jpg' alt='' />
            <p>Bifold cardholder</p>
          </td>
          <td>60.00 лв.</td>
          <td>
            <div className='quantity-button'>
              <span className='decrease'>-</span>
              <input
                className='quantity-input'
                type='number'
                name='quantity'
                id='quantity'
                value='1'
                min='1'
                max='100'
              />
              <span className='increase'>+</span>
            </div>
          </td>
          <td>60.00 лв.</td>
        </tr>

        <tr>
          <td className='row-head'>
            <img src='https://i.imgur.com/JBVI5Dv.jpg' alt='' />
            <p>Bifold cardholder</p>
          </td>
          <td>60.00 лв.</td>
          <td>
            <div className='quantity-button'>
              <span className='decrease'>-</span>
              <input
                className='quantity-input'
                type='number'
                name='quantity'
                id='quantity'
                value='1'
                min='1'
                max='100'
              />
              <span className='increase'>+</span>
            </div>
          </td>
          <td>60.00 лв.</td>
        </tr> */}
      </table>
    </div>
  );
}

export default Cart;
