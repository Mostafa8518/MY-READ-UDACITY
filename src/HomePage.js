import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import Shelfs from './Shelfs';



const HomePage = ({books, selectedShelf}) => {


  const bookShelfs = [{ category: "currentlyReading", name: "currently Reading" }
      , { category: "wantToRead", name: "Want to Read" }, { category: "read", name: "Read" }];



    
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookShelfs.map(shelf => (<Shelfs 
                     key={shelf.category}
                      books={books.filter(book => book.shelf === shelf.category)}
                      name={shelf.name}
                     onChange={selectedShelf} />
                      )

            )}


          </div>
        </div>
        <div className="open-search">
          <Link to="/SearchPage">Search</Link>
        </div>
      </div> );
  }

  export default HomePage;
