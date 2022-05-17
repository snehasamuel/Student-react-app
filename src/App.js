import logo from './logo.svg';
import './App.css';
import Addstudent from './components/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' exact element={<Addstudent/>}/>
<Route path='/search' exact element={<Search/>}/>

    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
