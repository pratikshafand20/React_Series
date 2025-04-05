import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { resList } from "./RestaurantObj";

// Add the icon to the library (optional but sometimes helps)
library.add(faStar);
library.add(faCircle);

/*
* Header
    Logo
    Nav Links
      Home
      About Us
      Cart
  Body
    search
    RestaurantContainer
      Restaurant Cards
        Img
        Name of Restaurant
        Star Rating
        Cuisine
        Delivery Time
  Footers
    Copyright
    Links
    Address
    Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXm-Lz1wqab2UY4q-vR2b1nEBH3NHEPpIsA&s"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact US </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRatingString, cuisines, areaName } =
    resData.card.card.info; //Destructuring the props
  const { slaString } = resData.card.card.info.sla;
  // console.log(resData);
  // console.log(resData[0].card.card.info.name);
  return (
    <div className="res-card">
      <img
        className="food-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="resto-name">{name}</h3>

      <h4 className="rating">
        <FontAwesomeIcon icon={faStar} size="sm" color="green" />
        <span>&nbsp;{avgRatingString}</span>
        <span>&nbsp;&nbsp;&nbsp;&bull;</span>
        <span>&nbsp;{slaString}</span>
      </h4>

      <p className="cuisines">{cuisines.join(",")}</p>
      <p className="address">{areaName}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* //Restaurant Cards */}
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
        {/* Below passing props to component but manually */}
        {/* <RestaurantCard
          resName="Dominozz "
          cusinses="Pizza"
          rating="4.5"
          address="Akurdi Railway Station"
        /> */}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
