import React from 'react';
import ReactDOM from 'react-dom';

function Item(props) {
    let randomNumber = Math.floor(Math.random() * 6);
    console.log(randomNumber);
    let shippingOption;
    if (randomNumber === 0 || randomNumber === 1) {
        shippingOption = <div></div>;
    } else if (randomNumber % 2 === 0) {
        shippingOption = <div className='blockText'>Free shipping eligible</div>
    } else {
        shippingOption = <div className='inlineText'>FREE shipping</div>
    }
    return (
        <div className='item'>
            
            <img src={props.imageURL || 'https://via.placeholder.com/150'} alt="" className='image'/>
            <div className='module line-clamp'>
                <p className='title'>{props.title}</p>
            </div>
            <p className='companyName'>{props.companyName}</p>    
            <p className='price'>{props.price}$</p>
            {shippingOption} 
        </div>
    );
    
  }




export default Item;
