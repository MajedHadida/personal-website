import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import NoPage from './pages/NoPage';
//Illustration by <a href="https://icons8.com/illustrations/author/ZzX8QJV19tuE">Maria Letta</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
//<a href="https://www.flaticon.com/free-icons/leaf" title="leaf icons">Leaf icons created by Freepik - Flaticon</a>
//Make sure after pushing, npm run build then npm run deploy

function App() {
  return (
    
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
    
  );
}
export default App;
