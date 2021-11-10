import React,{ useState } from "react";

export function InputForm({add}) {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return
      add(value)
      setValue("")
    }

    return (
      <div className="card-create card-bg">
         <span className="create-icon svg-icon">
            <svg style={{display: "inline"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/></svg></span>
       
            <form  className="create-form">
              <input type="text" className="card-create-input" value={value} placeholder="Create a Todo..." onChange={e => setValue(e.target.value)}
              />
            </form>
       
        <a href="#" className="create-add-icon svg-icon">
            <svg style={{display: "inline"}} onClick={handleSubmit} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg></a>
        </div>
    )
  }