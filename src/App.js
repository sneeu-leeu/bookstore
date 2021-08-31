import {
  BrowserRouter as Router, Route, Switch, Redirect, Link,
} from 'react-router-dom';
import Books from './components/books';
import Catagories from './components/catagories';
import './App.css';

function App() {
  return (
    <div className="big-cont">
      <div className="App">
        <Router>
          <header className="d-flex align-centre">
            <h1 className="navhead">BookStore CMS</h1>
            <Link to="/books" className="navLink">Books</Link>
            <Link to="/categories" className="navLink op50 m-left-nav">Categories</Link>
          </header>
          <Switch>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/categories">
              <Catagories />
            </Route>
            <Redirect from="/" to="/books" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
