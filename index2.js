// state - count: 0 ;
// action - increment, decrement, reset 
// Reducer
// store

const { createStore } = require("redux");

// Constant 

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";


// State
const initialState = {
    count: 0
}

// Action  (type and payload)
const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
}
const resetCounterAction = () => {
    return {
        type: INCREMENT
    }
}

//Reducer (state, action)
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count:0,
            }
        default:
            state;
    }
}

//store 

const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetCounterAction())