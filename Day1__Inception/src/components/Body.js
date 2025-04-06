import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
  //local state variable--superpowerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

  //above useState hook is destructing on the fly the reslist array of object: like below Array Destructuring
  // const [arr]=useState([resList]);
  // const [listOfRestaurant, setlistOfRestaurant]=arr;
  // const listOfRestaurant=arr[0];
  // const setlistOfRestaurant=arr[1];
  console.log(listOfRestaurant);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.card.card.info.avgRatingString > 4.5
            );

            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* //Rendering Restaurant Cards dynamically from swiggy API */}
        {listOfRestaurant.map((restaurant) => (
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

export default Body;
