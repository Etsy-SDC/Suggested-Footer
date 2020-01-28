import React from 'react';
import ReactDOM from 'react-dom';

function Item(props) {
    return (
        <div className='item'>
            
            <img src={props.imageURL || 'https://via.placeholder.com/150'} alt="" className='image'/>
            <div className='module line-clamp'>
                <p className='title'>{props.title}</p>
            </div>
            <p className='companyName'>{props.companyName}</p>
            <p className='price'>{props.price}$</p>
        </div>
    );
  }




export default Item;
