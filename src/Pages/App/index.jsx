import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from '../../routes/Routes';
import Navbar from '../../Components/Navbar';

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
