import React from 'react';
import ReactDOM from 'react-dom';

function Item(props) {
    return (
        <div className='item'>
            
            <img src={props.imageURL || 'https://via.placeholder.com/150'} alt="" className='image'/>
            <div className='module line-clamp'>
                <p className='title'>{props.title}</p>
            </div>
            <p>Company name</p>
            <p>Price</p>
        </div>
    );
  }




export default Item;
