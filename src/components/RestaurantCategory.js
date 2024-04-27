import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleExpand = () => {
        setShowIndex();

    }
    return (

        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="font-bold flex justify-between hover:cursor-pointer" onClick={handleExpand}>
                <h1>{data.title} ({data.itemCards.length})</h1>
                <span>⬇️</span>
            </div>

            <div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>

    )

}


export default RestaurantCategory;