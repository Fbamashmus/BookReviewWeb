import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import Books from './Component/Books';
import './App.css';

//Main page
function App() 
  return (
    <div className="App">
    <Header />
    <Body />
    <Books />
    <Footer />
    </div>
  );
}

export default App;
