
import { Fragment } from 'react';


// Config helper


import { BrowserRouter as Router, Route, Routes, useSearchParams } from 'react-router-dom';
import LoginCallback from './components/login-callback';
import LogoutCallback from './components/logout-callback';
import TokensPortal from './components/tokens-portal';
import AccessToken from './components/access-token';

function App(): React.ReactElement {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/logout" element={<LogoutCallback />} />
          <Route path="/login" element={<LoginCallback />} />
          <Route path="/" element={ <TokensPortal /> } />
          <Route path='/token' element={ <AccessToken /> } />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
