import axios from 'axios'

const URL=import.meta.env.VITE_REACT_AUTH_URL
// login user

// const login = async (userData) => {
//   // console.log(use)
//   const response = await axios.post(URL + 'login', userData)

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }
//   console.log('nikAuth', response.data);
//   return response.data
// }

// logout user

const logout = () => {
  localStorage.removeItem('user')
}

const authService = {  logout }
export default authService