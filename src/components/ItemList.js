import { CDN_URL } from "../utils/constants";

const ItemList = ({ items ,setShowIndex }) => {
    console.log(items);

    
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12 p-2">
                        <span>{item.card.info.name}</span>
                        <span> - {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        <p className="text-xs ">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 px-2">
                        <div className="absolute ">
                            <button className="p-2 mx-16 bg-black text-white shadow-lg rounded-md">Add +</button>
                        </div>
                        <img className="w-full" src={CDN_URL + item.card.info.imageId}></img>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;