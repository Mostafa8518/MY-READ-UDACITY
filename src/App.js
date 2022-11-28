import React from 'react';
import {useEffect ,useState} from 'react'
import "./App.css";
import * as BooksAPI from "./BooksAPI"
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage.js'
import SearchPage from './SearchPage';


function App () {


const [books, setBooks] =useState([]);

useEffect (() => {  BooksAPI.getAll().then((books)=>{setBooks(books);});
} ,[]);



 const selectShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then (()=>{
      book.shelf=shelf;
      setBooks(books.filter((b)=> b.id !== book.id).concat(book));
    });
   
  };

    return (
      <div className="app">
        <Routes>
          <Route exact path="/"
            element={<HomePage books={books} selectedShelf={selectShelf} />} />
          <Route path="/SearchPage"
            element={<SearchPage books={books} onChangeBook={selectShelf} />} />


        </Routes>

      </div>
    );

};

export default App;















