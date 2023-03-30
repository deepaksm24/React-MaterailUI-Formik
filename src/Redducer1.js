import React, { useReducer } from 'react'


const reducer1 = (state1, action) => {

    switch (action.type) {
        case "add-user":
            return { ...state1, user: [...state1.user, action.payload] }
        case "delete-user":
            return { ...state1, user: action.payload }
        case "edit-user":
            return { ...state1, user: [...state1.user] }
        case "get-api":
            return { ...state1, user: action.payload }
        default:
            return state1
    }

}


export default reducer1;