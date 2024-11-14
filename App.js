

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu'; // your component where useNavigate is used
import './Menu.css'
import Drinks from './Drinks';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Menu />} />
<Route path="/drinks" element={<Drinks />} />
<Route path="/contact"element={<Contact/>}/>
     </Routes>
    </BrowserRouter>
  );
 }

 export default App;





