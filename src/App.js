import React, {useState} from 'react';
import './views/font.css';
import './views/light.css'
import './views/dark.css'
import './views/common.css'
import './App.css';

import Base from './components/Base'
import { useMediaQuery } from 'react-responsive';


function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1001px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  return (
        <div>
         
          { isTabletOrMobile && 
          
            <div className="App p-6">
            <Base />
            </div>
            
          }
          
          {isBigScreen && 
          <div className="desktop"> 
          <style> {'background: rgb(107,112,92);background: radial-gradient(circle, rgba(107,112,92,1) 1%, rgba(80,82,70,1) 55%, rgba(183,183,164,1) 100%);'} </style>
            <div className="App p-11">
            <Base />
            </div>
          </div>
          }
          

       
        </div>
  );
}

export default App;