import react from "react";
import React, { useState } from "react";
import { useRef } from "react";



export default function  Base() {
    const title = useRef(null)
    const btnAll = useRef(null)
    const btnActive = useRef(null)
    const btnCompleted = useRef(null)
    const [todos, setTodos] = useState([
        // fot testing
      {text: "List 1",
      done:false,
        ref: React.createRef(0)},
      {text: "List 2",
      done:false,
      ref: React.createRef(1)},
      {text: "List 3",
      done:false,
      ref: React.createRef(2)},
    ])

    function InputForm() {
      const [value, setValue] = useState("")
  
      const handleSubmit = e => {
        e.preventDefault();
        if(!value) return
        add(value)
        setValue("")
      }

      return (
        <div className="card-create card-bg-dark">
           <span className="create-icon svg-icon-dark">
              <svg style={{display: "inline"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/></svg></span>
         
              <form  className="create-form">
                <input type="text" className="card-create-input" value={value} placeholder="Create a Todo..." onChange={e => setValue(e.target.value)}
                />
              </form>
         
          <a href="#" className="create-add-icon svg-icon-dark">
              <svg style={{display: "inline"}} onClick={handleSubmit} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg></a>
          </div>
      )
    }
  
    const add = (text, done, ref) => {
      done = false
      ref = React.createRef(todos.length + 1)
      const newList = [...todos, {text, done, ref}]
      setTodos(newList)
      console.log(newList)
    }
  
    const completed = index => {
    
      const newList = [...todos]
      console.log(newList[index].done)
      if (!newList[index].done){
          newList[index].ref.current.className = "card-list card-bg-dark add-list card-bg-done"
          newList[index].done = true
          setTodos(newList)
      } else {
        newList[index].ref.current.className = "card-list card-bg-dark add-list"
        newList[index].done = false
        setTodos(newList)
      }
    }   

    const del = index => {
      const newList = [...todos]
      newList.splice(index, 1)
      setTodos(newList)
    }


    function showAll () {
        btnAll.current.className = "card-stats-active"
        btnActive.current.className = "card-stats-deactive"
        btnCompleted.current.className = "card-stats-deactive"
        
        for(var i = 0; i < todos.length; i++) {
            if(todos[i].ref.current.className === "card-list card-bg-dark add-list card-bg-done remove-list")
           { todos[i].ref.current.className = "card-list card-bg-dark add-list card-bg-done"}
           if (todos[i].ref.current.className === "card-list card-bg-dark add-list remove-list") {
            todos[i].ref.current.className = "card-list card-bg-dark add-list"
            }
        } 

    }
    
    function showActive () {
        btnAll.current.className = "card-stats-deactive"
        btnActive.current.className = "card-stats-active"
        btnCompleted.current.className = "card-stats-deactive"
        for(var i = 0; i < todos.length; i++) {
            if(todos[i].ref.current.className === "card-list card-bg-dark add-list card-bg-done")
            {todos[i].ref.current.className = "card-list card-bg-dark add-list card-bg-done remove-list"}
            if(todos[i].ref.current.className === "card-list card-bg-dark add-list remove-list") 
            {todos[i].ref.current.className = "card-list card-bg-dark add-list"}
        } 
    }

    function swipeDelete () {
      // onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
      // onTouchEnd={() => this.handleTouchEnd()}
      for(var i = 0; i < todos.length; i++) {

      }
      // onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
      // get the touch input
      // go thru cards
      // get the index of swiped
      // delete func

    }

    function showCmpleted () {
        btnAll.current.className = "card-stats-deactive"
        btnActive.current.className = "card-stats-deactive"
        btnCompleted.current.className = "card-stats-active"
        
        for(var i = 0; i < todos.length; i++) {

            if(todos[i].ref.current.className === "card-list card-bg-dark add-list")
            {todos[i].ref.current.className = "card-list card-bg-dark add-list remove-list"}

            if(todos[i].ref.current.className === "card-list card-bg-dark add-list card-bg-done remove-list") {
                todos[i].ref.current.className = "card-list card-bg-dark add-list card-bg-done"
            }
        }
    }
  
    return (
      <div>
           <div className="todo-header">
              <h1 className="todo-tile title-dark" ref={title}>
                TO-DO
              </h1>
          </div>
        <InputForm add = {add} />
        
        {todos.map((todo, index) => (

            <div key={index} id={index} className="card-list card-bg-dark add-list" ref={todo.ref} >
            <button className="card-done-icon" >
                <svg style={{display: "inline", zIndex: "-999"}} className="svg-icon-dark" onClick={ () => completed(index)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path  d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/></svg>
                {/* <svg style={{display: "block", zIndex: "200"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M22.319,4.431,8.5,18.249a1,1,0,0,1-1.417,0L1.739,12.9a1,1,0,0,0-1.417,0h0a1,1,0,0,0,0,1.417l5.346,5.345a3.008,3.008,0,0,0,4.25,0L23.736,5.847a1,1,0,0,0,0-1.416h0A1,1,0,0,0,22.319,4.431Z"/></svg> */}
                </button>
                <div className="card-list-text card-text-dark" style={{textDecoration: todo.done ? "line-through" : ""}}>
                {todo.text}
                </div>
                <button href="#" className="card-delete-icon" >
                    <svg style={{display: "inline"}} onClick={()=>{del(index)} } className="svg-icon-dark" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path  d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
                </button>
            </div>
        ))}
       

        <div className="card-stats card-bg-dark">
                <a href="#" ref={btnAll} className="card-stats-active" onClick={()=> {showAll()}}> All </a>
                <a href="#" ref={btnActive} className="card-stats-deactive" onClick={()=> {showActive()}}> Active </a>
                <a href="#" ref={btnCompleted} className="card-stats-deactive" onClick={()=> {showCmpleted()}}> Completed </a>
        </div>

      </div>  
    )
  }