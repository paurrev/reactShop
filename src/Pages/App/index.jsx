import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from '../../routes/Routes';
import Navbar from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';

function App() {
  return (
    <div className="min-h-screen">
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
        </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
