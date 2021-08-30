import {
  BrowserRouter as Router, Route, Switch, Redirect, Link,
} from 'react-router-dom';
import Books from './components/books.jsx'
import Catagories from './components/catagories'
import './App.css';

function App() {
  return (
    <div className="BookstoreContain">
      <h1>Bookstore CMS</h1>
      <Router>
        <Link to='/books'>Books</Link>
        <Link to='/catagories'>Catagories</Link>
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/catagories">
            <Catagories />
          </Route>
          <Redirect from='/' to='/books'/>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
