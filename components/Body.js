import { useEffect, useState } from "react";
import RestaurantCard, { isRestaurantOpened } from "./RestaurantCard";
import { API_URL, API_URL2 } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantOpened = isRestaurantOpened(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL2);
    const json = await data.json();
    // console.log(json);

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listOfRestaurant);
    setFilteredListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };

  console.log(filteredListOfRestaurant);

  if (onlineStatus === false)
    return <h1>❌ Disconnected</h1>

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input type="search"
          className="search-bar"
          value={searchText}
          onChange={(enteredText) => {
            setSearchText(enteredText.target.value);
          }}>
        </input>
 
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

      <div className="restaurant-div">
        {filteredListOfRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}  >
            {restaurant.info.isOpen ? <RestaurantOpened resData={restaurant} /> :
              <RestaurantCard resData={restaurant} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
