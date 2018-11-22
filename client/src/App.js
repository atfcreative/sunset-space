import React, { Component } from 'react';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LoginForm />
        <SignUpForm />
      </div>
    );
  }
}

export default App;
