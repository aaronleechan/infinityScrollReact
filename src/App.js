import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import List from './List'

function App() {
  return (
    <div className="container">
      <div className="row">
        <List/>
      </div>
    </div>
  );
}

export default App;
