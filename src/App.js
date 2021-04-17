import { Browse, Home, Signin, Signup } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RedirectUser } from './utils/routes'



function App() {
  let user = null;
  return (
    <Router>
      <RedirectUser
      path="/signin"
        exact
        user={user}
        loggedinPath="/browse">
        <Signin />
      </RedirectUser>
      <RedirectUser
      path="/signup"
        exact
        user={user}
        loggedinPath="/browse">
        <Signup />
      </RedirectUser>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
    </Router>

  );
}

export default App;
