import React from "react"
import Books from "./Books"


function Shelfs ({ name, books, onChange}) {
   
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((book) => (
                            <li key={book.id}>
                                <Books book={book} updateBook={onChange}/>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Shelfs;