import logo from './logo.svg';
import './App.css';
import SendLoginCode from './Components/SendLoginCode';
import { startTransition } from 'react';

function App() {

  const sendCode = (phone) => console.log(phone);
  return (
    <SendLoginCode sendCode = {sendCode} />
  );
}

export default App;
