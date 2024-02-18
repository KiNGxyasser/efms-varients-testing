const initState = {
    count:0
}

const rootReducer = (state = initState, action)=>{
        switch(action.type){
            case "incr":
                return {...state, count: state.count + action.payload}
            case "decr":
                return {...state, count: state.count - action.payload}
            default:
                return state;
        }
}



export default rootReducer;
