import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";

//This Page is to display the price and whole details of dish like switggy food description page

const RestoMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //this params hook gives the unique id from API URL automatically and based on that id we are making resto menu as dynamic which displays the details page depending on the dish
  const { resId } = useParams();
  // console.log(params);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo);
  // console.log(resInfo?.cards[2].card.card.info);
  const {
    name,
    cloudinaryImageId,
    areaName,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { slaString } = resInfo?.cards[2]?.card?.card?.info?.sla;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  console.log("item array", itemCards);
  console.log(itemCards[0].card.info.name, itemCards[0].card.info.id);

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {avgRating} {totalRatingsString} {costForTwoMessage}{" "}
      </h3>
      <h3>Outlet {areaName}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{slaString}</h3>
      {/*  <img src="" alt="Foodimage" />
      <h3>{cloudinaryImageId}</h3> */}
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name}--{items.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestoMenu;
