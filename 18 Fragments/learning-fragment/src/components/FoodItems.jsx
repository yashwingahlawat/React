import Item from "./Item"
function FoodItems({ items }) {
    // let foodItems = ['a', 'sfd', 'wss']
    return (
        <ul className="list-group">
            {items.map(item =>
                <Item key={item} foodItem={item} HandleItem={() => console.log(`food item ${item} clicked`)}></Item>
            )
            }
        </ul >
    )
}
export default FoodItems