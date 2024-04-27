import { useContext, useEffect, useState } from "react";
import RestaurantCard, { isRestaurantOpened } from "./RestaurantCard";
import { API_URL, API_URL2 } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantOpened = isRestaurantOpened(RestaurantCard);

  const {loggedInUser,setUserName} = useContext(UserContext);
  // const [userName,setUserName] = useState(loggedInUser);

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
    <div className="m-2 p-2">
      <div className="m-4 p-4">
        <input className="m-1 p-1 border-solid border-2 border-indigo-600" type="search"
          value={searchText}
          onChange={(enteredText) => {
            setSearchText(enteredText.target.value);
          }}>
        </input>

        <button className="m-1 px-4 py-2 bg-green-200 rounded-sm"
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

        <button className="m-1 px-4 py-2  bg-green-200 rounded-sm" type="button"
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

        <button className="m-1 px-4 py-2  bg-green-200 rounded-sm" type="button"
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
      
          <label>Username: </label>
          <input className="m-1 p-1 border-solid border-2 border-indigo-600"
          value={loggedInUser}
          onChange={(e)=>{
            setUserName(e.target.value)
          }}          
          >

          </input>

        


    
      </div>

      <div className="flex flex-wrap">
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
