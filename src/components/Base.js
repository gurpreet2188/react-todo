import React, { useState } from "react";
import { useRef } from "react";
import { InputForm } from "./Input";
import { List } from "./List";

export default function  Base() {
    const title = useRef(null)
    const btnAll = useRef(null)
    const btnActive = useRef(null)
    const btnCompleted = useRef(null)
    let tStartX = 0
    let tStartY = 0
    let tEndX = 0
    let tEndY = 0
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
          newList[index].ref.current.className = "card-list card-bg add-list card-bg-done"
          newList[index].done = true
          setTodos(newList)
      } else {
        newList[index].ref.current.className = "card-list card-bg add-list"
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
            if(todos[i].ref.current.className === "card-list card-bg add-list card-bg-done remove-list")
           { todos[i].ref.current.className = "card-list card-bg add-list card-bg-done"}
           if (todos[i].ref.current.className === "card-list card-bg add-list remove-list") {
            todos[i].ref.current.className = "card-list card-bg add-list"
            }
        } 

    }
    
    function showActive () {
        btnAll.current.className = "card-stats-deactive"
        btnActive.current.className = "card-stats-active"
        btnCompleted.current.className = "card-stats-deactive"
        for(var i = 0; i < todos.length; i++) {
            if(todos[i].ref.current.className === "card-list card-bg add-list card-bg-done")
            {todos[i].ref.current.className = "card-list card-bg add-list card-bg-done remove-list"}
            if(todos[i].ref.current.className === "card-list card-bg add-list remove-list") 
            {todos[i].ref.current.className = "card-list card-bg add-list"}
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

    function showCmpleted () {
        btnAll.current.className = "card-stats-deactive"
        btnActive.current.className = "card-stats-deactive"
        btnCompleted.current.className = "card-stats-active"
        
        for(var i = 0; i < todos.length; i++) {

            if(todos[i].ref.current.className === "card-list card-bg add-list")
            {todos[i].ref.current.className = "card-list card-bg add-list remove-list"}

            if(todos[i].ref.current.className === "card-list card-bg add-list card-bg-done remove-list") {
                todos[i].ref.current.className = "card-list card-bg add-list card-bg-done"
            }
        }
    }
  
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