import React, { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { store } from "./store/store";
import { authSlice } from "./store/authSlice";
import { counterSlice } from "./store/counterSlice";
import { useEffect } from "react";


const Counter = ()=>{
  // const [count,setCount] = useState(0);

let count = useSelector((state)=> state.count)
const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="count-number"></h1>
        <div className="buttons-wrapper">
          <div
            className="count-button"
           onClick={()=>{ dispatch(counterSlice.actions.incriseByOne) ;console.log(count)}}
          ></div>
          <div
            className="reset-button"
            onClick={()=>{ dispatch(counterSlice.actions.resetCount)}}

          ></div>
        </div>
      </header>
    </div>
  );
}
//
const NavigationRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(authSlice.actions.setData(decoded));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
//
const App = () => {
  return (
    <Provider store={store}>
      <NavigationRoutes />
    </Provider>
  );
};

export default App;