import { useState } from 'react';
import { search } from './BooksAPI';
import { Link } from "react-router-dom"
import Books from './Books';


const SearchPage = ({ onChangeBook, books }) => {
 
  const [searchedBooks, setSearchedBooks] = useState([]);
 const [query, setQuery] = useState("");
 
  const addBook = (query) => {
    setQuery(query);
    search(query, 20)
      .then((searchShelf) => {
        if (!searchShelf) {
          setSearchedBooks([]);
        }
        if (searchShelf) {
          const updateShelves = searchShelf.map((homeBook) => {
            for (const book of books) {
              if (homeBook.id === book.id) {
                homeBook.shelf = book.shelf;
                break;
              }
            }
            return homeBook;
          });
          setSearchedBooks(updateShelves);
        }
      })
      .catch((e) => console.log(e));
  };


  return (
    <div className="search-books">
      <div className="search-books-bar">
       <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => addBook(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
            
          {
            searchedBooks.map((book) => (
              <Books book={book} updateBook={onChangeBook} key={book.id} />
           
          )) }
        </ol>
      </div>
    </div>
  );
};


export default SearchPage;








