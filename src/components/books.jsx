const books = [{
  title: 'First Book',
  author: 'Author1',
  id: 1,
}];

export default function Books() {
  return (
    <div>
      <h3>All Books</h3>
      <div>
        <ul>
          { books.map((book) => (
            <li key={book.id}>
              <span>{book.title}</span>
              <button id={book.id} type="button">Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <form>
        <h4>Add New Book</h4>
        <input placeholder="Title" />
        <br />
        <br />
        <input placeholder="Author" />
        <br />
        <br />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}
