import axios from 'axios';


export const editImage = async (user) => {
    const data = {
        id: user.id,
        image: user.imagebase64
    }
    
    await axios.put(`http://localhost:3001/user/updateimage`, data, { headers: { 'authorization': `Bearer ${localStorage.getItem(`token`)}` } }).then(response => {
     console.log('image editted');
    }).catch((err) => { alert(err) });  
};
