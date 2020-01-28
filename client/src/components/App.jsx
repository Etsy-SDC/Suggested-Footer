import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Item from './Item.jsx';
import {data} from '../../../database/data.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
        this.getSuggestedItems = this.getSuggestedItems.bind(this);
    }

    componentDidMount() {
        this.getSuggestedItems();
    }

    getSuggestedItems() {
        let randomIndex = Math.floor(Math.random() * data.length);
        let randomListingId = data[randomIndex].listing_id;
        console.log(randomListingId);
        axios.get('/listing', {params: {listingId: randomListingId}}).then(data => {
            this.setState({images: data.data});
            //console.log(data.data);
        });
    }

    render() {
        return (
            <div>
                <h3 className='header'>You may also like</h3>
                <div className='container'>
                    {this.state.images.map((image, index) => {
                        if (index < 5) {
                            return <Item key={index} imageURL={image.imageURL} title={image.title}/>
                        }
                    })}
                </div>
            </div>
        )
    }
}
export default App;