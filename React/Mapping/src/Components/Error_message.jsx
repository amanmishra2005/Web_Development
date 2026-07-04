const ErrorMessage = ({ items }) => {
  // let FoodItems = [
  //   "Fruits",
  //   "Green Vegetables",
  //   "Pulses",
  //   "Chapati",
  //   "Salad",
  //   "Milk",
  //   "Ghee",
  // ];

  return <>{items.length === 0 && <h3>I am still hungry.</h3>}</>;
};

export default ErrorMessage;
