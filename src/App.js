import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NoPage from './components/NoPage/NoPage';


function App() {
  return (
    <div>
      <Header></Header>
      

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/review' element={<Review/>}></Route>
          <Route path='/inventory' element={<Inventory/>}></Route>
          <Route path='*' element={<NoPage/>}></Route>
          
          





        </Routes>
      </BrowserRouter>
        
          

        

      
      
      
      
 
    </div>
  );
}

export default App;
