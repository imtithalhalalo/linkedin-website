import axios from 'axios';


export const login = async (user) => {
    const data = {
      email: user.email,
      password: user.password
    }
    console.log(user.email, user.password);
    await axios.post("http://localhost:3001/auth/login", data).then(response => {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
    }).catch((err) => { alert(err) });
};