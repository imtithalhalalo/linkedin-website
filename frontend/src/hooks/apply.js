import axios from 'axios';


export const apply = async (applicant) => {
    const data = {
        user: applicant.user,
        job: applicant.job,
        email: applicant.email,
        phonenum: applicant.phonenum
    }
    console.log(applicant.user, applicant.job)
    await axios.post(`http://localhost:3001/user/apply`, data, { headers: { 'authorization': `Bearer ${localStorage.getItem(`token`)}` } }).then(response => {
     return response.data.message;
    }).catch((err) => { alert(err) });  
};