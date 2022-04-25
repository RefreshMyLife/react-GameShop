import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './page';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        {/* <Route path="/cart" element={<Cart/>} exact /> */}
      </Routes>
    </>
  );
}

export default App;
