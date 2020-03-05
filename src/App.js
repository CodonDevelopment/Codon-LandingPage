import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
        <Navbar />
        <div style={{height: '100vh'}}></div>
        <Footer />
    </div>
  );
}

export default App;
