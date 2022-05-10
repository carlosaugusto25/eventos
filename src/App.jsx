import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

//PÁGINAS
import { Login } from './view/login';
import { NewUser } from './view/new-user';
import { Home } from './view/home';
import { RecoveryPassword } from './view/recovery-password';
import { RegisterEvent } from './view/register-event';

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/newuser' element={<NewUser />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/recovery-password' element={<RecoveryPassword />} />
          <Route exact path='/register-event' element={<RegisterEvent />} />
        </Routes>
      </Router>
    </Provider>
  );
}
