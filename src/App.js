import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const LogIn = lazy(() => import('./pages/log-in'));
const SignUp = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Routes>
          <Route path={ROUTES.LOG_IN} element={<LogIn />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
