import React, { useState } from "react";
import { useRef } from "react";
import { InputForm } from "./Input";
import { List } from "./List";

export default function Base() {
  const btnAll = useRef(null)
  const btnActive = useRef(null)
  const btnCompleted = useRef(null)
 
  let tStartX = 0
  let tStartY = 0
  let tEndX = 0
  let tEndY = 0
  const [todos, setTodos] = useState([
    // fot testing
    {
      text: "List 1",
      done: false,
      ref: React.createRef(0)
    },
    {
      text: "List 2",
      done: false,
      ref: React.createRef(1)
    },
    {
      text: "List 3",
      done: false,
      ref: React.createRef(2)
    },
  ])

  const [stat, setStat] = useState([
      {all: true},
      {active: false},
      {done: false}
  ])

  


  const add = (text, done, ref) => {
    done = false
    ref = React.createRef(todos.length + 1)
    const newList = [...todos, { text, done, ref }]
    setTodos(newList)
    console.log(newList)
  }

  const completed = index => {

    const newList = [...todos]
    console.log(newList[index].done)
    if (!newList[index].done) {
      newList[index].done = true
      setTodos(newList)
    } else {
      newList[index].done = false
      setTodos(newList)
    }
  }

  const del = index => {
    console.log(todos[index])
    todos[index].ref.current.style.display = "none"
    todos[index].text = ""
    console.log(todos[index])
  }

  const showAll = () => {
    for (var i in todos) {
      if ((todos[i].ref.current.className).includes(" remove-list")) {
        todos[i].ref.current.className = (todos[i].ref.current.className).replace(/ remove-list/g, "")
      }
    }
    const newStat = [...stat]
    newStat[0].all = true
    newStat[0].active = false
    newStat[0].done = false
    setStat(newStat)
  }

  const showActive = () => {

    for (var i in todos) {
      if (todos[i].done === true) {
        todos[i].ref.current.className += " remove-list"
      }
      if (todos[i].done === false) {
        if ((todos[i].ref.current.className).includes(" remove-list")) {
          todos[i].ref.current.className = (todos[i].ref.current.className).replace(/ remove-list/g, "")
        }
      }
    }

    const newStat = [...stat]
    newStat[0].all = false
    newStat[0].active = true
    newStat[0].done = false
    setStat(newStat)
  }

  const showCmpleted = () => {
    for (var i in todos) {
      if (todos[i].done === false) {
        todos[i].ref.current.className += " remove-list"
      }
      if (todos[i].done === true) {
        if ((todos[i].ref.current.className).includes(" remove-list")) {
          todos[i].ref.current.className = (todos[i].ref.current.className).replace(/ remove-list/g, "")
        }
      }
    }

    const newStat = [...stat]
    newStat[0].all = false
    newStat[0].active = false
    newStat[0].done = true
    setStat(newStat)
  }

  const touchStart = (e) => {
    tStartX = e.changedTouches[0].screenX 
    tStartY= e.changedTouches[0].screenY
  }

  function swipeDelete(index, e) {
    var p = document.querySelector(".card-done-tick")
    console.log(p.getTotalLength())
    tEndX = e.changedTouches[0].screenX 
    tEndY= e.changedTouches[0].screenY

    let dX = tEndX - tStartX
    let dY = tEndY - tStartY

    console.log(dX, dY)
    if (Math.abs(dX) > Math.abs(dY)) {

      if (dX < 0) {
        todos[index].ref.current.className += " swipe-delete"
          setTimeout(() => {
            del(index)
          },510)
      }
    }
  }

  return (
    <div>

      <InputForm add={add} />

      {todos.map((todo, index) => (
        <List todo={todo}
          index={index}
          del={del}
          completed={completed}
          touchStart={touchStart}
          swipeDelete={swipeDelete} />
      ))}

      <div className="card-stats card-bg">
        <a ref={btnAll} className={stat[0].all ? "card-stats-active" : "card-stats-inactive"} onClick={() => { showAll() }}> All </a>
        <a ref={btnActive} className={stat[0].active ? "card-stats-active" : "card-stats-inactive"} onClick={() => { showActive() }}> Active </a>
        <a ref={btnCompleted} className={stat[0].done ? "card-stats-active" : "card-stats-inactive"} onClick={() => { showCmpleted() }}> Completed </a>
      </div>

    </div>
  )
}