import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Item from "./Item.jsx";
import Footer from "./Footer.jsx";
import { data } from "../../../database/data.js";
const baseURL =
  "http://suggestedfooter-env.p2tmtudsix.us-east-2.elasticbeanstalk.com/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      shopMore: false,
      listingId: 651186954
    };
    this.getSuggestedItems = this.getSuggestedItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMoreItemsClick = this.handleMoreItemsClick.bind(this);
  }

  componentDidMount() {
    this.getSuggestedItems();
    window.addEventListener("itemChanged", event => {
      this.setState({ listingId: Number(event.detail.listingId) }, () => {
        this.getSuggestedItems();
      });
    });
  }

  handleSubmit() {
    this.setState({ shopMore: true });
  }

  handleMoreItemsClick() {
    this.setState({ shopMore: false });
  }

  getSuggestedItems() {
    axios
      .get("/listings", {
        params: { listing_Id: this.state.listingId },
        baseURL
      })
      .then(data => {
        this.setState({ images: data.data, shopMore: false });
      });
  }

  render() {
    let button;
    return (
      <div className="main-container">
        <h3 className="header">You may also like</h3>
        <div>
          <div className="container">
            {this.state.images.map((image, index) => {
              if (index < 5) {
                button = (
                  <button className="button" onClick={this.handleSubmit}>
                    Shop more similar items
                  </button>
                );
                return (
                  <Item
                    key={index}
                    imageURL={image.imageURL}
                    title={image.title}
                    price={image.price}
                    companyName={image.company_name}
                    index={index}
                    id={image.listing_id}
                    handleMoreItemsClick={this.handleMoreItemsClick}
                  />
                );
              }
              if (this.state.shopMore === true) {
                if (index < 15) {
                  button = <div></div>;
                  return (
                    <Item
                      key={index}
                      imageURL={image.imageURL}
                      title={image.title}
                      price={image.price}
                      companyName={image.company_name}
                      index={index}
                      id={image.listing_id}
                      handleMoreItemsClick={this.handleMoreItemsClick}
                    />
                  );
                }
              }
            })}
          </div>
          <div className="button-container">{button}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
