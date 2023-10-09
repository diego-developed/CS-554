
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Account from './Account.jsx';
import ChangePassword from './ChangePassword.jsx';
import Home from './Home.jsx';
import Landing from './Landing.jsx';
import Navigation from './Navigation.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navigation />
        </header>
      </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='home' element={<Home />} />
        <Route path='account' element={<Account />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='changepassword' element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
