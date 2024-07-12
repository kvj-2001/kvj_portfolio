import './App.css';

/* eslint-disable no-unused-vars */
import './App.css'
import Home from './components/pages/Home.jsx'
import Project from './components/pages/Project.jsx'
import Project_Single from './components/pages/Project_Single.jsx'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/home' Component={Home}/>
          <Route path='/project' Component={Project}/>
          <Route path='/totalDetails' Component={Project_Single}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
