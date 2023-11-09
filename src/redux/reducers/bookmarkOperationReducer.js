export const actionType =  {
    ADD_QUOTE : "ADD_QUOTE",
    REMOVE_QUOTE : "REMOVE_QUOTE",
    ALL_QUOTES : "ALL_QUOTES",
    ADD_ALL_QUOTEID:"ADD_ALL_QUOTEID",
}


const bookmarkOperationReducer = (state = {}, action) => {
    switch(action.type){
        case actionType.ADD_QUOTE:
            state[action.payload.quote._id] = action.payload.quote
            return {...state};
        case actionType.REMOVE_QUOTE:
            delete state[action.payload.id]
            return state;
        case actionType.ADD_ALL_QUOTEID:
            let obj = {};
            action.payload.list.forEach(id => {
                obj[id] = null
            });
            return obj
        default:
            return state;
    }
}

export default bookmarkOperationReducer 