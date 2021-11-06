import React from "react";

export function List({ index, todo, completed, del, touchStart, swipeDelete }) {

    return (
        <div key={index} id={index} className="card-list card-bg add-list" ref={todo.ref} onTouchStart={(e) => { touchStart(e) }} onTouchEnd={(e) => { swipeDelete(index, e) }}>
            <button className="card-done-icon" >

                <svg style={{ display: "inline", zIndex: "-999" }}
                    onClick={() => { completed(index) }} xmlns="http://www.w3.org/2000/svg" id="Outline" width="18" height="18" viewBox="0 0 24 24" version="1.1" id="svg5">
                    <circle className="card-done-icon" transform="scale(1,-1)" cx="12" cy="-12" r="10.498" />
                    <path className={todo.done ? "card-done-tick tick-on" : "card-done-tick tick-off"} d="m6.3737 12.25 4.4628 3.9134 7.0466-8.1999" pathLength="100" />
                </svg>

            </button>
            <div className="card-list-text card-text" style={{ textDecoration: todo.done ? "line-through" : "" }}>
                {todo.text}
            </div>
            <button href="#" className="card-delete-icon" >
                <svg style={{ display: "inline" }} onClick={() => { del(index) }} className="svg-icon" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" /><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" /><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" /></svg>
            </button>
        </div>
    )
}