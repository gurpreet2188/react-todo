import eact from "react";
import { useState, useRef } from "react";

export default function Todo ({ todo, index, completed, del}) {
    const divRef = useRef()
    function click () {
        divRef.current.className = "App-todo-list-base remove-list"
        console.log(divRef)
        setTimeout( del(index), 200)
    }
   
     
  return (
      <div>
            <div key={index} className="App-todo-list-base add-list" ref={divRef}>
            <button className="App-todo-list-stat" >
                <svg style={{display: "inline"}} onClick={ () => completed(index)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path fill="#000" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/></svg>
                </button>
                <div className="App-todo-list-text" style={{textDecoration: todo.done ? "line-through" : ""}}>
                {todo.text}
                </div>
                <button href="#" className="App-todo-list-del" >
                    <svg style={{display: "inline"}} onClick={()=>{click()} } xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path fill="#000" d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
                </button>
            </div>
    </div>
  )
}