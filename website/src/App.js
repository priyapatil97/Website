import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import Routing from './Routing';


const App = () => {
  return (
    <>
      <BrowserRouter>
        
        <Routing />
      </BrowserRouter>,
    </>
  );
}

export default App;
