import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const getMode =()=>{

    return JSON.parse(localStorage.getItem("mode")) || false
  }
  const[dark,setDark]=useState(getMode);

  useEffect(()=>{
localStorage.setItem("mode",JSON.stringify(dark))

  },[dark])

 
  return (
    <div className={dark ? "App dark-mode":"App"}>
        <div className="nav">
              <label className="switch">
                      <input type="checkbox"
                      checked={dark}
                      onChange={()=>setDark(!dark)}/>
                      <span className="slider round"></span>
              </label>
        </div>

        <div className="content">
            <h1>{dark?"Dark Mode is On":"Light Mode is On "}</h1>
            <p style={{fontsize:"20px"}}>{dark?"You are in the Dark Mode" :"For Dark Mode press Togge"}</p>
    </div>
    </div>
  );
}

export default App;
