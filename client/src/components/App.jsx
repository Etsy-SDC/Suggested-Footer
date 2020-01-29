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
            shopMore: false
        };
        this.getSuggestedItems = this.getSuggestedItems.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getSuggestedItems();
    }

    handleSubmit() {
        this.setState({shopMore: true});
    }

    getSuggestedItems() {
        let randomIndex = Math.floor(Math.random() * data.length);
        let randomListingId = data[randomIndex].listing_id;
        console.log(randomListingId);
        axios.get('/listing', {params: {listingId: randomListingId}}).then(data => {
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
                                    return <Item key={index} imageURL={image.imageURL} title={image.title} price={image.price} companyName={image.company_name}/>
                                }
                                if (this.state.shopMore === true) {
                                    if (index < 15) {
                                        button = <div></div>
                                        return <Item key={index} imageURL={image.imageURL} title={image.title} price={image.price} companyName={image.company_name}/>
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