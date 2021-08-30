import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as UUID } from 'uuid';
import { allBooks, addBook, removeBook } from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector(allBooks);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const setBookTitle = (e) => {
    setTitle(e.target.value);
  };

  const setBookAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      id: UUID(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  const removeBookFromStore = (e) => {
    dispatch(removeBook({ id: e.target.id }));
  };

  return (
    <div>
      <h3>All Books</h3>
      <div>
        <ul>
          { books.map((book) => (
            <li key={book.id}>
              <span>{book.title}</span>
              <button id={book.id} type="button" onClick={removeBookFromStore}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <form>
        <h4>Add New Book</h4>
        <input placeholder="Title" onChange={setBookTitle} />
        <br />
        <br />
        <input placeholder="Author" onChange={setBookAuthor} />
        <br />
        <br />
        <button type="button" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
}
