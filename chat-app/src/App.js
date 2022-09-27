
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
import SendLoginCode from './Components/SendLoginCode';
import { startTransition } from 'react';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Client from "./Components/Client";
import Agent from "./Components/Agent";

import ChatBox from "./Components/ChatBox";

 const App = () => {

    const sendCode = (phone) => console.log(phone);

  return (
    <SendLoginCode sendCode = {sendCode} />,
    <ChatBox />
   // <Client />
   // <SignUp SignUp={()=> console.log(1)}/>
   // <Login Login = {() => console.log(2)} />
  );
 
};



export default App;
