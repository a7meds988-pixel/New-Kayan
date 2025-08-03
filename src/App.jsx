
import { Routes, Route } from 'react-router-dom';
import InvoicesPage from './pages/InvoicesPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<InvoicesPage />} />
    </Routes>
  );
}
