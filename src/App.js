import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Browse from './pages/browse';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import { ProtectedRoute } from './helpers/ProtectedRoute';
import { useAuthListener } from './hooks';

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
