// SortByTitle.js

import BookCard from "./BookCard";

const SortByTitle = (props) => {

    const { books, bookTitle } = props;

    const sortByTitle = books.sort((a, b) => {
        if (a.title < b.title)
            return -1;
        else 
            return 1;
    });

    return (
        <section>

            <div className="display-message">
                <p>Currently displaying results for '<strong>{bookTitle}</strong>'</p>
            </div>

            <div className="display-books-container">
                {
                    sortByTitle.map((book) => {
                        return (
                            <BookCard book={book} key={book.key}/>
                        )
                    })
                }
            </div>
        
        </section>
    )
}

export default SortByTitle;