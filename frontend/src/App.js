import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from './components/Login';
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserPage/UserProfile";
import CreatePost from "./components/CompanyPage/CreatePost";
import NavUser from "./components/NavUser";
import Jobs from "./components/UserPage/Jobs"
import JobsSearched from "./components/UserPage/JobsSearched";
import NavCompany from "./components/NavCompany";
import CompanyJobs from "./components/CompanyPage/CompanyJobs";
import Applicants from "./components/CompanyPage/Applicants";
import ApplicantProfile from "./components/CompanyPage/ApplicantProfile";
import FollowBox from "./components/FollowBox";
import AllCompanies from "./components/UserPage/AllCompanies";
import CompanyProfile from "./components/CompanyPage/CompanyProfile";
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
				<Route path='/company' element={<><NavCompany/><CreatePost /></>} />
        <Route path='/companyjobs' element={<><NavCompany/><CompanyJobs /></>} />
        <Route path='/applicants' element={<><NavCompany/><Applicants /></>} />
        <Route path='/jobs' element={<><NavUser/><Jobs /></>} />
        <Route path='/search' element={<><NavUser/><JobsSearched /></>} />
        <Route path='/applicant' element={<><NavCompany/><ApplicantProfile /></>} />
        <Route path='/companies' element={<><NavUser/><AllCompanies /></>} />
        <Route path="/companyprofile" element={<><NavCompany/> <CompanyProfile/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
