import "./App.css";
import { increment, decrement } from "./ducks/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.index);
  return (
    <div className="App">
      <div className="Number">
        <span>{index}</span>
      </div>
      <div className="Button">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;
