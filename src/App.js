import { Browse, Home, Signin, Signup } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProtectedRoute, RedirectUser } from './utils/routes'
import IsAuth from './hooks/isAuth';



export default function App() {
  let user = IsAuth();
  return (
    <Router>
      <RedirectUser path="/signin" exact
        user={user} loggedinPath="/browse">
        <Signin />
      </RedirectUser>

      <RedirectUser path="/signup" exact
        user={user} loggedinPath="/browse">
        <Signup />
      </RedirectUser>

      <ProtectedRoute loggedOutPath = "/signin" path="/browse"
        exact user={user}>
        <Browse />
      </ProtectedRoute>

      <Route exact path="/">
        <Home />
      </Route>

    </Router>

  );
}


