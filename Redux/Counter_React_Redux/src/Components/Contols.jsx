import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>

    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
      <input type="text" />
      <button
        type="button"
        className="btn btn-success"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
    </>
  );
};

export default Controls;
