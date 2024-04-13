import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {

  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;


  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h3>{cuisines.join(',')} </h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo} stars</h3>
      <h3>{sla.deliveryTime}</h3>

    </div>
  );
};

export default RestaurantCard;