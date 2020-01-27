import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Item from './Item.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getSuggestedItems = this.getSuggestedItems.bind(this);
    }

    componentDidMount() {
        this.getSuggestedItems();
    }

    getSuggestedItems() {
        axios.get('/suggested').then(data => console.log('successful get request'));
    }

    render() {
        return (
            <div>
                <h3>You may also like</h3>
                <Item />
            </div>
        )
    }
}
export default App;