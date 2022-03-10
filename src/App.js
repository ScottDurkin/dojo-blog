import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the new blog";
  return (
    <div className="App">
      <NavBar />
      <div className="header">
        <Home />
      </div>
      </div>
  );
}

export default App;
