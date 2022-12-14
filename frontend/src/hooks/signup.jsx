import axios from 'axios';

export const signup = async (user) => {
    let email = user.email;
    let name = email.split('@')[0];
    const data = {
      name: name,
      email: user.email,
      password: user.password,
      role: user.role
    }
    console.log(name, user.email, user.password, user.role);
    await axios.post("http://localhost:3001/auth/signup", data).then(response => {
      return response.data;
    }).catch((err) => { alert(err) });
};