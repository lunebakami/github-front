import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { User } from './pages/User';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
