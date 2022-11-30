import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.payload.count;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const init = (initialState) => {
    return initialState;
  };

  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div>
      <h2>This is count {state}</h2>
      <button
        onClick={() => dispatch({ type: "increment", payload: { count: 2 } })}
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
