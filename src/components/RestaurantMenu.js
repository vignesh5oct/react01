import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restaurantInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex] = useState(0);


    if (restaurantInfo === null)
        return <Shimmer />
    const { name, cuisines, sla } = restaurantInfo?.cards[2]?.card?.card?.info;
    // console.log(restaurantInfo?.cards[2]?.card?.card?.info);
    const { itemCards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (type) =>
            type?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories);

    const items = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
        (w) => w?.card?.card?.title
    );
    // console.log(items);


    return (
        <div className="text-center py-4">
            <h1 className="text-xl font-bold">{name}</h1>
            <h5 className="text-orange-500">{cuisines.join(",")}</h5>
            <h5>Within {sla.deliveryTime} Minutes</h5>

            <div>
                {categories.map((category,index) => (
                    <div key={category?.card?.card?.title}>
                        <RestaurantCategory data={category.card.card} 
                        // showIndex={index === 2 ? true : false}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={()=>{setShowIndex(index)}}

                        />  
                    </div>

                ))}
            </div>

        </div>
    );
}



export default RestaurantMenu; 