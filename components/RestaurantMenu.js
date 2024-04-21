import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restaurantInfo = useRestaurantMenu(resId);

    if (restaurantInfo === null)
        return <Shimmer />
    const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info;
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
        <div className="menu">
            <div>
                <h1>{name}</h1>
                <h5>{cuisines.join(",")}</h5>
                <h5>{costForTwoMessage}</h5>
            </div>

            <div>
                {categories.map(category => (
                    <div key={category?.card?.card?.title}>
                        <RestaurantCategory data={category.card.card} />
                    </div>

                ))}
            </div>


        </div>
    );
}



export default RestaurantMenu; 