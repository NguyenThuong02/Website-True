
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/TrangChu';

function App() {
  return (
    <div className="App">
      <div>
          <Header />
      </div>
      <div>
          <Outlet />
          {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
