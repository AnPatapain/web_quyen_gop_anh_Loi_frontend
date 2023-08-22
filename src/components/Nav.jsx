import {useNavigate} from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">QuyenGop.com</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Trang Chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/add">Quyên góp ngay</a>
                        </li>
                        {
                            localStorage.getItem("user") ?
                                <li className="nav-item">
                                    <a className="nav-link active" href="/add">{localStorage.getItem("user")}</a>
                                </li> :
                                <li className="nav-item">
                                    <a className="nav-link active" href="/login?isSignup=false">Đăng Nhập</a>
                                </li>
                        }
                        {
                            localStorage.getItem("user") ?
                                <li className="nav-item">
                                    <a className="nav-link active" href="/" onClick={logout}>Đăng Xuất</a>
                                </li> : null
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav