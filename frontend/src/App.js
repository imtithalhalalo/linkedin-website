import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from './components/Login';
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserPage/UserProfile";
import CreatePost from "./components/CompanyPage/CreatePost";
import NavUser from "./components/NavUser";
import Jobs from "./components/UserPage/Jobs"
function App() {
  const [path, setPath] = useState('./login');

  const getPath = (role) => {
		switch (role) {
			case 'user':
				setPath('/user');
				break;
			case 'company':
				setPath('/company');
				break;
			default:
				setPath('/login');
				break;
		}
	}
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <SignUp />
        }/>
        <Route path='/login' element={
          <Login onLogin={getPath}/>
        }/>
        <Route path='/user' element={<><NavUser/> <UserProfile /></>} />
				<Route path='/company' element={<CreatePost />} />
        <Route path='/jobs' element={<><NavUser/><Jobs /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
