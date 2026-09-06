import styles from "./FoodInput.module.css";

// const FoodInput = ({ handleOnChange }) => {
const FoodInput = ({ handleKeydown }) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // }

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      // onChange={(event) => console.log(event)}
      // onChange={(event) => console.log(event.target.value)}
      // onChange={handleOnChange}
      onKeyDown={handleKeydown}
    />
  );
};

export default FoodInput;
