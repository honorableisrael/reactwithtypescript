import React,{ useReducer, useState } from 'react';
import AddListForm from '../classForm';


export interface Todos{
    Name:String;
    Information:String;
}

export interface State {
    todos:Todos;
}
export interface Action{
    type:String,
    payload:String,
}

const reducer = (state:State, action:Action) => {
    switch (action.type) {
        case "Add_to_forms":
            return state
        case "Remove_from_forms":
            return state
        default:
            return state
    }
}
const Pagination = () =>{
let [state,dispatch] = useReducer(reducer,{todos:{Name:'John',Information:'My Car would be returned next week'}})
const [userName,setUserName] =useState('');
const SubmitForm = () =>{
    console.log('form is being submitted now' + state.todos.Name)
}
console.log(userName)  
return (
        <div>
            Forms Component
            <input type="text" name='Name' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <p>{state.todos.Name}</p>
            <p><AddListForm/></p>
            {/* <button onClick={()=>SubmitForm()}>Send</button> */}
        </div>
    )
}

export default Pagination;
