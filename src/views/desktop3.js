import React from 'react'

import { Helmet } from 'react-helmet'

import './desktop3.css'

const Desktop3 = (props) => {
  return (
    <div className="desktop3-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="desktop3-desktop3">
        <span className="desktop3-text">Furniture Store</span>
        <span className="desktop3-text01">Products</span>
        <span className="desktop3-text02">Sale</span>
        <span className="desktop3-text03">Outdoor</span>
        <span className="desktop3-text04">Rooms</span>
        <div className="desktop3-akariconscart">
          <img
            alt="Group670"
            src="/playground_assets/aa96a0ea-cdc2-4782-b521-c94d8036e067-2luz.svg"
            className="desktop3-group"
          />
        </div>
        <img
          alt="antdesignmenuoutlined673"
          src="/playground_assets/f65a980f-5e20-4b85-b350-85894d89cbcd-upp.svg"
          className="desktop3-antdesignmenuoutlined"
        />
        <span className="desktop3-text05">Start from scratch</span>
        <span className="desktop3-text06">Your saved designs</span>
        <span className="desktop3-text07">Start planning</span>
        <span className="desktop3-text08">
          Start by creating a new design. You can also use one of our templates.
          If you already have saved designs, you need to log in to access them
        </span>
        <img
          alt="Rectangle2679"
          src="/playground_assets/cf1dd60e-1a2c-4bdc-8be7-2023808cf47d-b5n.svg"
          className="desktop3-rectangle2"
        />
        <span className="desktop3-text09">Create a new design</span>
      </div>
    </div>
  )
}

export default Desktop3
