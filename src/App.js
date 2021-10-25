import React, {useState} from 'react';
import './views/font.css';
import './App.css';
import {header} from './components/header'
import Base from './components/Base'

function App() {
  
  
  return (
        <div className="App p-6" >
            <style>{'body {background: rgb(255,232,214); background: linear-gradient(180deg, rgba(255,232,214,1) 1%, rgba(221,190,169,0.7987570028011204) 100%), no-repeat; background-attachment:fixed; height:100%;}' }</style>
         
          {header()}
          {/* <Create/> */}
          <Base />
         
       
        </div>
  );
}

export default App;