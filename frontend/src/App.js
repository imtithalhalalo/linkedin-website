import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from './components/Login';
import SignUp from "./components/SignUp";

function App() {
  const [page,setPage] = useState('');
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <SignUp />
        }/>
        <Route path='/login' element={
          <Login />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
