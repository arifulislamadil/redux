//Action Creators 
const newBooking =(name,amount)=>{
    return{
        type: "NEW_BOOKING",
        payload: {
            name,
            amount,
        }
    }
}
const cancelBooking =(name,refoundAmount)=>{
    return{
        type: "CANCEL_BOOKING",
        payload: {
            name,
            refoundAmount,
        }
    }
}

//Reducer
const reservationHistory=(oldReservationList=[], action)=>{
    if(action.type === "NEW_BOOKING"){
        return [...oldReservationList, action.payload]
    }else if(action.type === "CANCEL_BOOKING"){
        return oldReservationList.filter(record =>{
            return record !== action.payload.name;
        })
    }
    return oldReservationList;
}

const cancellationHistory=(oldReservationList=[],action)=>{
   if(action.type === "CANCEL_BOOKING"){
        return [...oldReservationList,action.payload]
    }
    return oldReservationList;
}

const accounting=(totalMoney=100,action)=>{
   if(action.type === "NEW_BOOKING"){
        return  totalMoney + action.payload.amount;
    }else if(action.type == "CANCEL_BOOKING"){
        return totalMoney = action.payload.refoundAmount;
    }
    return totalMoney;
}
//Redux Store

console.log(redux);
const {createStore,combineReducer} = redux;
const railwayCentralStore = combineReducer({
    accounting: accounting,
    reservationHistory: reservationHistory,
    cancellationHistory:  cancellationHistory,
})

const store = createStore(railwayCentralStore);
const action = newBooking("arif", 20)
store.dispatch(action);
console.log(store.getState());