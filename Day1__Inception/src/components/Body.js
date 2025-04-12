import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//This page display all the restaurants and other parts such as top rated resto and search

const Body = () => {
  //local state variable--superpowerful variable Whenver state variable changes react re-renders the component

  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);
  const [searchText, setSearchText] = useState("");
  //above useState hook is destructing on the fly the reslist array of object: like below Array Destructuring
  // const [arr]=useState([resList]);
  // const [listOfRestaurant, setlistOfRestaurant]=arr;
  // const listOfRestaurant=arr[0];
  // const setlistOfRestaurant=arr[1];

  // console.log("body rendered");

  useEffect(() => {
    //console.log('useeffect called')
    fetchData();
  });

  //Add https://corsproxy.io/? before api url to avoid cors error
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    /*  console.log(json); */
    const restaurantCards = json?.data?.cards?.slice(3);
    setlistOfRestaurant(restaurantCards ?? []);
    setFilteredResto(restaurantCards ?? []);
  };

  //Conditional rendering--renders ui if list of resto present otherwise shimmer the ui

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restau cards and update the ui
              //search text
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredResto(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
        {/* //Rendering Restaurant Cards dynamically from swiggy API and by using Link navigating to restaurantMenu page which displays all details of clicked resto based on the resto id */}
        {filteredResto.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurants/" + restaurant.card.card.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
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
