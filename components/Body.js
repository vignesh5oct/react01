import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  // const [resetText, setResetText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };


  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="search"
          className="search-bar"
          value={searchText}
          onChange={(enteredText) => {
            setSearchText(enteredText.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            //The Main "listOfRestaurant" to used and filter is updated in "filteredListOfRestaurant" 
            const filterSearchList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredListOfRestaurant(filterSearchList);
          }}
        >
          Search
        </button>

        <div className="filter">
          <button
            type="button"
            className="filter-top-list-btn"
            onClick={() => {
              //The Main "listOfRestaurant" to used and filter is updated in "filteredListOfRestaurant" 
              const filteredList = listOfRestaurant.filter(
                (restaurant) => restaurant.info.avgRating > 4.3
              );
              setFilteredListOfRestaurant(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
          <button type="button"
            className="filter-reset-btn"
            value={""}
            onClick={() => {
              const resetTextFilter = listOfRestaurant.filter((res) =>
                res.info.name.includes("")
              );

              setFilteredListOfRestaurant(resetTextFilter);
            }}

          >
            Reset
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {filteredListOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
