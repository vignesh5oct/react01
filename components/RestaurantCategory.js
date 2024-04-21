import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{

    // console.log(data);
    return(
        <div >
            <div>
                <h1>{data.title} ({data.itemCards.length})</h1>
                <span>⬇️</span>
            </div>
            <div>
                <ItemList items = {data.itemCards}/>
            </div>
        </div>
    )

}


export default RestaurantCategory;