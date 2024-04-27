import { useContext } from "react";
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h3>{cuisines.join(', ')} </h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo} stars</h3>
      <h3>{sla.deliveryTime} MINS</h3>
      <h5>{loggedInUser}</h5>
    </div>
  );
};

export const isRestaurantOpened = (RestaurantCard) => {
  return (props) =>{
    return (
      <div>
        <label className="bg-gray-light ">Opened</label>
        <RestaurantCard {...props}/>
      </div>

    );
  }
}


export default RestaurantCard;