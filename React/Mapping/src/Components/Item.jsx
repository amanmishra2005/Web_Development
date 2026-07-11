import styles from "./Item.module.css";

// const Item = (props) => {
//   return (
//     <li className="list-group-item">
//       {props.FoodItems}
//     </li>
//   );
// };

const Item = ({ FoodItems }) => {
  return (
     <li className={`${styles["kg-item"]} list-group-item`}>  
      <span className={styles["kg-span"]}>{FoodItems}</span>  
    </li>
  );
};

export default Item;


// CSS Modules