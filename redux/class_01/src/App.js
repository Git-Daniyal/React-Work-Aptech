import { incNum, decNum } from "./actions/action";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>

      <h1>{count}</h1>

      <button onClick={() => dispatch(incNum())}>Increment</button>
      <button onClick={() => dispatch(decNum())}>Decrement</button>

    </div>
  );
};
export default App;