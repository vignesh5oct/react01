import { RESTAURANT_MENU_FRONT, RESTAURANT_MENU_BACK } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu= (resId) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_MENU_FRONT+resId+RESTAURANT_MENU_BACK);
        // console.log(RESTAURANT_MENU_FRONT+resId+RESTAURANT_MENU_BACK);
        const json = await data.json();
        // console.log(json);
        setRestaurantInfo(json.data);
    };

    return restaurantInfo;
}

export default useRestaurantMenu;