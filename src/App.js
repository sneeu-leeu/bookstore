import {
  BrowserRouter as Router, Route, Switch, Redirect, Link,
} from 'react-router-dom';
import Books from './components/books';
import Catagories from './components/catagories';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header bg-white p-3 d-flex align-items-center mb-4">
          <h1 className="header-text d-inline-block">BookStore CMS</h1>
          <Link to="/books" className=" link">BOOKS</Link>
          <Link to="/categories" className="link">CATEGORIES</Link>
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
  );
}

export default App;
