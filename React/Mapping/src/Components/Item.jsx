// const Item = (props) => {
//   return (
//     <li className="list-group-item">
//       {props.FoodItems}
//     </li>
//   );
// };

const Item = ({ FoodItems }) => {
  return <li className="list-group-item kg-item"><span className="kg-span">{FoodItems}</span></li>;
};

export default Item;
