import React from 'react';
import ReactDOM from 'react-dom';

function Item(props) {
    return (
        <div>
            
            <img src={props.imageURL || 'https://via.placeholder.com/150'} alt="" className='image'/>
            
            <h5>title</h5>
            <p>Company name</p>
            <p>Price</p>
        </div>
    );
  }




export default Item;
