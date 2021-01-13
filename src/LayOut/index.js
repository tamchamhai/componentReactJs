import React, { Component } from "react";
import Header from "./Header.js";
import Carousel from "./Carousel.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

export default class LayOut extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Content />
        <Footer />
      </div>
    );
  }
}
