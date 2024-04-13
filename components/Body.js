import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <input
          type="search"
          className="search-bar"
          placeholder="Search Your Food"
        ></input>
        <div className="filter">
          <button
            type="button"
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (restaurant) => restaurant.info.avgRating > 4.3
              );
              // console.log(listOfRestaurant);
              // console.log(filteredList);
              setListOfRestaurant(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
