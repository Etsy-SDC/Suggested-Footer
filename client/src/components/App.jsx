import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Item from './Item.jsx';
import Footer from './Footer.jsx'
import {data} from '../../../database/data.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            shopMore: false,
            listingId: 676514443
        };
        this.getSuggestedItems = this.getSuggestedItems.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getSuggestedItems();
        window.addEventListener("itemChanged", event => {
            this.setState({ listingId: Number(event.detail.listingId) }, () => {
                console.log('!!!!!!!!! ' + this.state.listingId);
                this.getSuggestedItems();
            }
            );
        });
    }


    handleSubmit() {
        this.setState({shopMore: true});
    }

    getSuggestedItems() {
        // let randomIndex = Math.floor(Math.random() * data.length);
        // let randomListingId = data[randomIndex].listing_id;
        // console.log(randomListingId);
        console.log('I AM HERE');
        console.log('state ' + this.state.listingId)
        axios.get(`/listing/${this.state.listingId}`, {params: {listing_Id: this.state.listingId}}).then(data => {
            console.log(data.data);
            this.setState({images: data.data});
            console.log(data.data);
        });
    }

    render() {
        let button;
            return (
                <div>
                    <h3 className='header'>You may also like</h3>
                    <div>
                        <div className='container'>
                            {this.state.images.map((image, index) => {
                                if (index < 5) {
                                    button = <button className='button' onClick={this.handleSubmit}>Shop more similar items</button>
                                    return <Item key={index} imageURL={image.imageURL} title={image.title} price={image.price} companyName={image.company_name} index={index} id={image.listing_id}/>
                                }
                                if (this.state.shopMore === true) {
                                    if (index < 15) {
                                        button = <div></div>
                                        return <Item key={index} imageURL={image.imageURL} title={image.title} price={image.price} companyName={image.company_name} index={index} id={image.listing_id}/>
                                    }
                                } 
                            })}
                        </div>
                        <div className='button-container'>
                            {button}
                        </div>
                    </div>
                    <Footer />
                </div>
            )
    }
}
export default App;