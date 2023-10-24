
import { combineReducers } from "redux";

const initialState = []

const todo = (state = initialState, action) => {

    let data = action.username;
    
    console.log(data)

    switch (action.type) {

        case "ADD_TODO":
            const allInputData = { id: new Date().getTime().toString(), username:data.username,name:data.name,email:data.email,mobile:data.mobile}
            return ([...state, allInputData]);


        case "EDIT_TODO":

            return state.map((item) => item.id === action.id ?
                { username: action.username ,name:action.name,email:action.email,mobile:action.mobile} : item)



        case "DELETE_TODO":
            return (state.filter((id) => id.id !== action.id));

        default:
            return state;
    }
}

const todoReducer = combineReducers({
    todo
});

export default todoReducer;
