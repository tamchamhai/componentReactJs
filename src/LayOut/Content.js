import React, { Component } from "react";
import ContentItem from "./ContentItem.js";

export default class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h1>What We Do</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              laborum consequuntur iste odit doloribus fugiat, qui repellendus
              tenetur unde ex ad laudantium quibusdam. Atque, voluptatem
              doloribus eaque consequatur praesentium blanditiis?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              laborum consequuntur iste odit doloribus fugiat, qui repellendus
              tenetur unde ex ad laudantium quibusdam. Atque, voluptatem
              doloribus eaque consequatur praesentium blanditiis?
            </p>
          </div>
          <div className="col-sm-4">
            <h1 className="text-danger">Contact US</h1>
            <p>CyberSoft</p>
            <p>Su Van Hanh, quận 10, Tp.HCM</p>
            <p>website: cybersoft.edu.vn</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            {/* item */}
            <ContentItem />
          </div>
          <div className="col-sm-4">
            {/* item */}
            <ContentItem />
          </div>
          <div className="col-sm-4">
            {/* item */}
            <ContentItem />
          </div>
        </div>
      </div>
    );
  }
}
