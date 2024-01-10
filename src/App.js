import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Info from './pages/Info';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}


export default App;