import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import Counter from './components/Counter';
import Header from './components/Header';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className='App'>
      <Header />
      <RegisterForm />
    </div>
  );
};

export default App;
