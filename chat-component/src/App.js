import logo from './logo.svg';
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

function App() {

  const sendCode = (phone) => console.log(phone);

  return (
    <SendLoginCode sendCode = {sendCode} />
  );
}

export default App;
