const initState = {
    count:0
}

 const rootReducer = (state=initState, action)=>{
    switch(action.type){
        case "increment":
            return {...state, count: state.count + 1}
        case "decrement":
            return {...state, count: state.count - 1}
        case "inc_by_amount":
            return {...state, count: state.count + action.payload}
        default:
            return state;
    }
}

export default rootReducer;