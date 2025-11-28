import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <div className="App" style={{ maxWidth: 420, margin: '24px auto', fontFamily: 'sans-serif' }}>
      
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default App;
