import Item from "./Item"
import styles from './Items.module.css'
const Items = ({ todoItems }) => {
    return (
        <>
            <div className={styles.itemContainer}>
                {todoItems.map(item => (
                    <Item key={item.name} name={item.name} date={item.date}></Item>
                ))}
                {/* <Item name='Dev' date='04/06/2023'></Item>
                <Item name='DSA' date='05/06/2023'></Item> */}

            </div>
        </>
    )
}
export default Items