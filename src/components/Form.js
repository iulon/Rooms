import Button from "./Button";
import {useState} from 'react';

export default function Form(){

     const [state, setState]= useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        alert("error");
    }
    return(
        <form className="form" action="/formSubmitted" onSubmit={handleSubmit}>
           <label for="text" className="label">Rooms</label><br/>
           <input type="text" value = {state} onChange = {(e) => setState(e.target.value)} placeholder="rooms" className="input"></input> 
           <Button text='Submit'/> 
        </form>
    )
}