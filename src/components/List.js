import React from "react";

export function List ({index, todo, completed, del}) {

    return (
        <div key={index} id={index} className="card-list card-bg add-list" ref={todo.ref} >
        <button className="card-done-icon" >
            <svg style={{display: "inline", zIndex: "-999"}} className="svg-icon" onClick={ () => completed(index)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path  d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/></svg>
            {/* <svg style={{display: "block", zIndex: "200"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M22.319,4.431,8.5,18.249a1,1,0,0,1-1.417,0L1.739,12.9a1,1,0,0,0-1.417,0h0a1,1,0,0,0,0,1.417l5.346,5.345a3.008,3.008,0,0,0,4.25,0L23.736,5.847a1,1,0,0,0,0-1.416h0A1,1,0,0,0,22.319,4.431Z"/></svg> */}
            </button>
            <div className="card-list-text card-text" 

            // onTouchStart={(e)=> {
            //       tStartX = e.changedTouches[0].screenX 
            //       tStartY= e.changedTouches[0].screenY}} 
            //       onTouchEnd = {(e)=> {
            //         tEndX = e.changedTouches[0].screenX 
            //         tEndY= e.changedTouches[0].screenY
            //         swipeDelete(index)
            //       }}
                     style={{textDecoration: todo.done ? "line-through" : ""}}>
            {todo.text}
            </div>
            <button href="#" className="card-delete-icon" >
                <svg style={{display: "inline"}} onClick={()=>{del(index)} }  className="svg-icon" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path  d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
            </button>
        </div>
    )
}