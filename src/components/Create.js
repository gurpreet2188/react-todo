import react from "react";
import React, {Component, useState} from "react";

var l = []
var val = ''
var c = true
var i = 0

function getInput(v) {
  val = v
  console.log(v)
}

function Input () {
  var [input, setInput] = useState('')
  if (c) {
    return (
      <input  value={input}  className="App-create-input" placeholder="Create a Todo..." onInput={e => setInput(getInput(e.target.value))}/>
    )
  } else {
    input= ""
    return (
      <input  value={input}  className="App-create-input" placeholder="Create a Todo..." onInput={e => setInput(getInput(e.target.value))}/>
    )
  }
}

function BtnStat () {
  return (
    <a href="#" className="App-todo-list-stat" >
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path fill="#000" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/></svg>
    </a>
  )
}

function BtnDel() {
  return (
    <a href="#" className="App-todo-list-del" >
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path fill="#000" d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
    </a>
  )
}

function listText(v) {
  return (
    <p className="App-todo-list-text">
        {v} 
    </p>
  )
}

function el () {
  return console.log(document.getElementById("0"))
}

export class Create extends Component{
  
  constructor (props) {
    super(props)
    this.state = {
      num: -1,
      list: l
    }
    this.listRef = react.createRef()
  }

  setList () {
    c = false
    this.setState({
    num: this.state.num + 1
    }, () => {
      let i =  String(this.state.num)
      l.push(
        <div id={i} className="App-todo-list-base" ref={this.listRef}>
          <BtnStat/>
          {listText(val)}
          <BtnDel/>
        </div>
      )
      this.setState({
        list: l
      })
      c = true
    })
    el()
  }

  render () {
    
      return (
          <div>
            <div className="App-create">
            <span className="App-icons-base App-icon-create">
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/></svg></span>
    
              <Input/>
              
              <a href="#" className="App-icons-base App-icon-add" onClick={() => {this.setList()}}>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg></a>
            </div>
          
            <div className="App-todo-div">
              {this.state.list}
            </div>
        </div>
      );
  }

}







