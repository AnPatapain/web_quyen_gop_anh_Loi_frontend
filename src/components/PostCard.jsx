// eslint-disable-next-line react/prop-types
const PostCard = ({imgUrl, cardTitle, contact}) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imgUrl} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{cardTitle}</h5>
                        <p className="card-text">Liên hệ: {contact}</p>
                        <a href="#" className="btn btn-primary">Trao đổi</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard