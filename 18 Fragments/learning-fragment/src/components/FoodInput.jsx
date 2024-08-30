import styles from './FoodInput.module.css';
const FoodInput = (props) => {
    // const props = (e) => console.log(e.target.value);
    return <input type="text" placeholder="Enter Food:" className={styles.foodItem} onKeyDown={props.ChangeHandler} />
}
export default FoodInput;