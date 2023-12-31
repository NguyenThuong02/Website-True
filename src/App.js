
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

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
