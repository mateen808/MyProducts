import React from 'react'
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from '../Routes/CustomRoutes';
import '../style.css';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
    </>
  )
}

export default App
