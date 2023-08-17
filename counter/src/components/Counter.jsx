import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="main-container">
      <h1 className="counter-head">Counter</h1>
      <br />
      <h2 className="counter-number">{count}</h2>
      <div className="actions-container">
        <button
          type="button"
          className="action-btn"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          type="button"
          className="action-btn"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
