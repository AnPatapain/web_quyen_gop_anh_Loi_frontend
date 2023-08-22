import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";
import HomeService from "../api/home.service.js";
import AuthService from "../api/auth.service.js";
import {getErrorMessage} from "../api/errorMessage.js";

const Login = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const isSignup = searchParams.get("isSignup") == "true" ? true : false
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name

        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        if(isSignup) {
            AuthService.signup(formData)
                .then(response => {
                    console.log(response.data)
                    localStorage.setItem("user", response.data.username)
                    navigate("/")
                })
                .catch(error => {
                    alert(getErrorMessage(error))
                })
        }else {
            AuthService.login(formData)
                .then(response => {
                    console.log(response.data)
                    localStorage.setItem("user", response.data.username)
                    navigate("/")
                })
                .catch(error => {
                    alert(getErrorMessage(error))
                })
        }
    }
    return (
        <div className="auth-modal">
            <h2>{isSignup ? "Đăng Ký" : "Đăng Nhập"}</h2>
            {isSignup ? <a href={"/login?isSignup=false"}>Đã có tài khoản ? đăng nhập</a> : <a href={"/login?isSignup=true"}>Chưa có tài khoản Đăng ký ngay</a>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    required={true}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Mật khẩu"
                    required={true}
                    onChange={handleChange}
                />
                <button className="primary-button">{isSignup ? 'Đăng Ký' : 'ĐĂNG NHẬP'}</button>
            </form>
        </div>
    )
}

export default Login