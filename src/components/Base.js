import React, { useState } from "react";
import { useRef } from "react";
import { InputForm } from "./Input";
import { List } from "./List";

export default function  Base() {
    // const title = useRef(null)
    const btnAll = useRef(null)
    const btnActive = useRef(null)
    const btnCompleted = useRef(null)
    // let tStartX = 0
    // let tStartY = 0
    // let tEndX = 0
    // let tEndY = 0
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
          newList[index].done = true
          setTodos(newList)
      } else {
        newList[index].done = false
        setTodos(newList)
      }
    }   

    const del = index => {
      const newList = [...todos]
      newList.splice(index, 1)
      setTodos(newList)
    }

    const showAll = () => {
        for (var i in todos) {
          if((todos[i].ref.current.className).includes(" remove-list")) {
            todos[i].ref.current.className = (todos[i].ref.current.className).replace(/ remove-list/g, "")
          }
        }
    }
    
    const showActive = () => {

        for (var i in todos) {
            if(todos[i].done === true) {
              todos[i].ref.current.className += " remove-list"
            }
            if(todos[i].done === false ) {
              if((todos[i].ref.current.className).includes(" remove-list")) {
                todos[i].ref.current.className = (todos[i].ref.current.className).replace(/ remove-list/g, "")
              }
            }
        }
    }

    const showCmpleted  = () => {
        for (var i in todos) {
          if(todos[i].done === false) {
            todos[i].ref.current.className += " remove-list"
          } 
          if(todos[i].done === true ) {
            if((todos[i].ref.current.className).includes(" remove-list")) {
              todos[i].ref.current.className = (todos[i].ref.current.className).replace(/ remove-list/g, "")
            } 
          }
      }
    }
  
    // function swipeDelete(index) {
    //   let dX = tEndX - tStartX
    //   let dY = tEndY - tStartY
     
      
    //   if (Math.abs(dX) > Math.abs(dY)) {
    //     if (dX < 0) {
    //       let currentCls = todos[index].ref
          // todos[index].ref.current.className = currentCls + " swipe-delete"
          // todos[index].ref.current.className = currentCls
    //       setTimeout(() => {
    //         del(index)
          
    //       }, 1000)
          
    //     }
    //   }
    // }

    return (
        <div>
         
       <InputForm add= {add}/>
        
        {todos.map((todo, index) => (
            <List todo = {todo}
                  index = {index}
                  del = {del}
                  completed = {completed} />
        ))}
       

        <div className="card-stats card-bg">
                <a href="#" ref={btnAll} className="card-stats-active" onClick={()=> {showAll()}}> All </a>
                <a href="#" ref={btnActive} className="card-stats-deactive" onClick={()=> {showActive()}}> Active </a>
                <a href="#" ref={btnCompleted} className="card-stats-deactive" onClick={()=> {showCmpleted()}}> Completed </a>
        </div>

      </div>  
    )
  }