import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import HomeService from "../api/home.service.js";

const AddPost = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        imgUrl: "",
        contact: ""
    })
    useEffect(() => {
        if(!localStorage.getItem("user")) {
            navigate("/login?isSignup=false")
        }
    }, [])
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
        HomeService.addPost(formData)
            .then(response => {
                navigate("/")
            })
            .catch(error => {
                navigate("/")
            })
    }
    return (
        <div className="add-post-page">
            <h1>Quyên Góp ngay</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Tên món đồ</label>
                    <input name="name" value={formData.name} onChange={handleChange} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Hình ảnh</label>
                    <input name="imgUrl" value={formData.imgUrl} onChange={handleChange} type="text" className="form-control" placeholder="đường link hình ảnh"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Liên hệ</label>
                    <input name="contact" value={formData.contact} onChange={handleChange} type="text" className="form-control" placeholder="Số điện thoại hoặc email ..."/>
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}>Đăng bài</button>
            </form>
        </div>
    )
}

export default AddPost