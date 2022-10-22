import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

function getGreeting(user) {
  if (user) {
    return <h1 >Hello, {formatName(user)}.</h1>
  }
  return <h1>Hello, Stranger.</h1>
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://cdn.pixabay.com/photo/2022/10/04/07/23/alien-7497513_1280.png'
}

// const element = <img src={user.avatarUrl} />
const element = (
  <div>
    {getGreeting(user)}
    <img src={user.avatarUrl} />
  </div>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
      </header>
    </div>
  );
}

export default App;
