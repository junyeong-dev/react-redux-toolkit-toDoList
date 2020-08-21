import {createStore} from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

console.log(addToDo, deleteToDo);
console.log(addToDo(), deleteToDo());
console.log(addToDo.type, deleteToDo.type);

/*
const reducer = (state = [], action) => {
    switch(action.type) {
        case addToDo.type:
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
}
*/

// createReducer는 기본적으로 state를 변경하거나, 새로운 state를 return하는 역할을 함
const reducer = createReducer([], {
    // addToDo : state를 변경
    [addToDo] : (state, action) => {
        /* 
            createReducer는 기본 redux와는 다르게 state를 변경할 수 있음
            그 이유는 redux-toolkit이 자체적으로 { text: action.payload, id: Date.now() }, ...state 
            이러한 작업을 해주기 때문
        */
        state.push({ text: action.payload, id: Date.now() });
    },
    // deleteToDo : 새로운 state를 return
    [deleteToDo] : (state, action) => 
        state.filter(toDo => toDo.id !== action.payload)
})


const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;