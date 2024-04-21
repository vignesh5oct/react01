const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div>
            
            {items.map((item)=>(
                <div key={item.card.info.id}>
                    <span>{item.card.info.name}</span>
                    <span>{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
            ))}
        </div>
    );
}

export default ItemList;