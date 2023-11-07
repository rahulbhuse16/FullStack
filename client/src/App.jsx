import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './routes/Home/home';
import About from './routes/About/about';
import Book from './routes/Books/book';
import CreateBook from './routes/Books/createBook';
import SingleBook from './routes/Books/singleBook';
import EditBook from './routes/Books/editBook';


import './App.css'


function App() {
  

  return (
    <>
    
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/books" element={ <Book/> }/>
          <Route path="/createbook/" element={ <CreateBook/> }/>
          <Route path="/books/:slug" element={ <SingleBook/> }/>
          
          <Route path="/editbook/:slug" element={ <EditBook/> }/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
