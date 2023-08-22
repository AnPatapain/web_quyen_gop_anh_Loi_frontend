import axios from "axios";

const login = (user) => {
    return axios.post("http://localhost:8080/api/security/login", user)
}

const signup = (user) => {
    return axios.post("http://localhost:8080/api/security/signup", user)
}

const AuthService = {
    login,
    signup
}

export default AuthService