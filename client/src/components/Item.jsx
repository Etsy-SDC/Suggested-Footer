import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

let randomIndex = Math.floor(Math.random() * 4);
    let randomIndex1 = Math.floor(Math.random() * 5);
    let randomIndex2 = Math.floor(Math.random() * 15);
    let randomIndex3 = Math.floor(Math.random() * 15);
    let randomIndex4 = Math.floor(Math.random() * 15) + 5;

function Item(props) {
    let randomNumber = Math.floor(Math.random() * 6);
    let shippingOption;
    let price = <div className='price'>{props.price}$</div>;
    if (randomNumber === 0 || randomNumber === 1) {
        shippingOption = <div></div>;
    } else if (randomNumber % 2 === 0) {
        shippingOption = <div className='blockText'>Free shipping eligible</div>
    } else {
        shippingOption = <div className='inlineText'>FREE shipping</div>
    }
    
    if (props.index === randomIndex) {
    price = <div><p className='price'>{(props.price * 0.5).toFixed(2)}$</p><p className='price smallPrice'><span>{props.price}$</span> (50% off)</p></div>;
    }

    if (props.index === randomIndex1) {
        price = <div><p className='price'>{(props.price * 0.8).toFixed(2)}$</p><p className='price smallPrice'><span>{props.price}$</span> (20% off)</p></div>;
    }

    if (props.index === randomIndex2 || props.index === randomIndex3) {
        price = <div><p className='price'>{(props.price * 0.65).toFixed(2)}$</p><p className='price smallPrice'><span>{props.price}$</span> (35% off)</p></div>;
    }

    if (props.index === randomIndex4) {
        price = <div><p className='price'>{(props.price * 0.3).toFixed(2)}$</p><p className='price smallPrice'><span>{props.price}$</span> (70% off)</p></div>;
    }

    const handleItemClick = (e, listingId) => {
        let imageAddress = e.target.getAttribute('src');
        
        axios.get('/update', {params: {address: imageAddress}}).then(data => {
            let newListingId = data.data[0].listing_id;
            console.log('new listingId ' + newListingId);
            const event = new CustomEvent("itemChanged", {
                detail: {
                  //listingId: 651186954
                  listingId: data.data[0].listing_id
                }
              });
              window.dispatchEvent(event);
        })


        // const event = new CustomEvent("itemChanged", {
        //     detail: {
        //       listingId: 651186954
        //     }
        //   });
        //   window.dispatchEvent(event);
    }
    
    return (
        <div className='item' onClick={handleItemClick}>
            <img src={props.imageURL || 'https://via.placeholder.com/150'} alt="" className='image'/>
            <div className='module line-clamp'>
                <p className='title'>{props.title}</p>
            </div>
            <p className='companyName'>{props.companyName}</p>  
            {price}  
            {shippingOption} 
        </div>
    );
    
  }




export default Item;
