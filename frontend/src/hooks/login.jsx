import axios from 'axios';


export const login = async (user) => {
    const data = {
      email: user.email,
      password: user.password
    }
    console.log(user.email, user.password);
    await axios.post("http://localhost:3001/auth/login", data).then(response => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem('status', response.data.status);
      localStorage.setItem('id', response.data.user._id);
      localStorage.setItem('name', response.data.user.name);
      localStorage.setItem('role', response.data.user.role);
    }).catch((err) => { alert(err) });  
};