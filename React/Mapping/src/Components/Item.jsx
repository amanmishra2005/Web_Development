import styles from "./Item.module.css";

// const Item = (props) => {
//   return (
//     <li className="list-group-item">
//       {props.FoodItems}
//     </li>
//   );
// };


// const handleBuyButtonClicked = (FoodItems) => {
//   console.log(`${FoodItems} being bought.`);
// }


const Item = ({ FoodItems, handleBuyButton}) => {

  // const handleBuyButtonClicked = () => {
  //   console.log(`${FoodItems} being bought.`);
  // }

  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${FoodItems} being bought.`);
  // }

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{FoodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={() => console.log(`${FoodItems} being bought.`)}
        // onClick={() => handleBuyButtonClicked(FoodItems)}
        // onClick={handleBuyButtonClicked}
        // onClick={(event) => handleBuyButtonClicked(event)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

// CSS Modules
