import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './desktop1.css'

const Desktop1 = (props) => {
  return (
    <div className="desktop1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="desktop1-desktop1">
        <span className="desktop1-text">Furniture Store</span>
        <span className="desktop1-text01">Products</span>
        <span className="desktop1-text02">Sale</span>
        <span className="desktop1-text03">Outdoor</span>
        <Link to="/desktop2" className="desktop1-text04">
          Rooms
        </Link>
        <img
          alt="Rectangle1211"
          src="/playground_assets/f49da362-dec9-4bec-9747-d80433ffa026-n88.svg"
          className="desktop1-svg"
        />
        <img
          alt="antdesignsearchoutlined213"
          src="/playground_assets/2432f021-1526-4a78-835b-9691d581a798-qcz5.svg"
          className="desktop1-antdesignsearchoutlined"
        />
        <span className="desktop1-text05">
          Search
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <div className="desktop1-akariconscart">
          <img
            alt="Group217"
            src="/playground_assets/bc597881-3f99-4ee1-9ee6-e0245f79c7de-r14b.svg"
            className="desktop1-group"
          />
        </div>
        <img
          alt="materialsymbolslocalshippingoutlinerounded223"
          src="/playground_assets/d83f6220-2cd9-41e4-9d0d-8354505a37b8-1ivd.svg"
          className="desktop1-materialsymbolslocalshippingoutlinerounded"
        />
        <span className="desktop1-text06">Enter postal code</span>
        <span className="desktop1-text07">
          <span>Contact us</span>
          <br></br>
          <span></span>
        </span>
        <img
          alt="carbonphone227"
          src="/playground_assets/4a41d658-05d1-4235-b75e-e758b9c61fb5-cfvc.svg"
          className="desktop1-carbonphone"
        />
        <img
          alt="antdesignmenuoutlined330"
          src="/playground_assets/0327018d-b95c-4a76-adad-7a74a2d58d05-lvu.svg"
          className="desktop1-antdesignmenuoutlined"
        />
      </div>
    </div>
  )
}

export default Desktop1
