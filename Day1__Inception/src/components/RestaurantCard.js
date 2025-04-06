import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRatingString, cuisines, areaName } =
    resData.card.card.info; //Destructuring the props from api
  const { slaString } = resData.card.card.info.sla;
  // console.log(resData);
  // console.log(resData[0].card.card.info.name);
  return (
    <div className="res-card">
      <img className="food-img" src={CDN_URL + cloudinaryImageId} />
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

export default RestaurantCard;
