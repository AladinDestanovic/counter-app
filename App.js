import React, { useState } from "react";
import "./App.css";

const App = ()=> {
 const [count,setCount] = useState(0);


    /// 
    /// 
    ///
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="count-number">{count}</h1>
          <div className="buttons-wrapper">
            <div
              className="count-button"
              onClick={() => {
setCount(count + 1)
              }}
            ></div>
            <div
              className="reset-button"
              onClick={() => {
setCount(0)         
    }}
            ></div>
          </div>
        </header>
      </div>
    );
  }


export default App;