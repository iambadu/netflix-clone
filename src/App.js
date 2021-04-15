import { Browse, Home, Signin, Signup } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/browse">
        <Browse/>
      </Route>
      <Route exact path="/signin">
        <Signin/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
    </Router>

  );
}

export default App;
