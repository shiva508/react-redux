const redux = require("redux");
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increament") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decreament") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);
console.log(store.getState());
const counterSubscriber = () => {
  const localState = store.getState();
  console.log(localState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increament" });
store.dispatch({ type: "decreament" });
