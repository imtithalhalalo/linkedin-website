import axios from 'axios';


export const edit = async (user) => {
    const data = {
        id: user.id,
        name: user.name,
        location: user.location,
        education: user.education,
        experience: user.experience
    }
    
    await axios.put(`http://localhost:3001/user/`, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } }).then(response => {
     console.log('editted');
    }).catch((err) => { alert(err) });  
};