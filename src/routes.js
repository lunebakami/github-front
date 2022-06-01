import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
