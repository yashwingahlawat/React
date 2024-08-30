import styles from './Item.module.css'
const Item = ({ foodItem, HandleItem }) => {
    // const buyfoodButton = () => {
    //     // console.log(e);
    //     console.log(`Buy Button is Clicked ${foodItem}`)
    // }
    return (
        <li className={`list-group-item ${styles['my-item']}`}>
            <span className={styles['my-span']}>
                {foodItem}
            </span>
            <button className={`btn btn-info ${styles.button}`}
                onClick={HandleItem} 
            >Buy</button>
        </li>
    );
}
export default Item;