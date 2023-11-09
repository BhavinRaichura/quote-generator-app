import { actionType } from "../reducers/bookmarkOperationReducer"

export const addQuote = (quote) => {
    return {
        type:actionType.ADD_QUOTE,
        payload:{quote}
    }
}

export const removeQuote = (id) => {
    return {
        type: actionType.REMOVE_QUOTE,
        payload: {id}
    }
}

export const getAllQuote = () =>{
    return {
        type: actionType.ALL_QUOTES
    }
}

export const addAllQuoteId = (list) => {
    return {
        type: actionType.ADD_ALL_QUOTEID,
        payload: {list}
    }
}