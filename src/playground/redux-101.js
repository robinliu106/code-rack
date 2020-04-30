import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy,
});

//set
const setCount = ({ count }) => ({
    type: "SET",
    count,
});

// resetCount
const resetCount = () => ({
    type: "RESET",
});

//Reducers
//1. Reducers are pure functions. Output is only determined by input
//2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy,
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy,
            };
        case "SET":
            return {
                count: action.count,
            };
        case "RESET":
            return {
                count: 0,
            };
        default:
            return state;
    }
};

//reducer
const store = createStore(countReducer);

//To unsubscribe the change listener, invoke the function returned by subscribe.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 100 }));
