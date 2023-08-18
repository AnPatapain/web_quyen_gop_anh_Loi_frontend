import {useEffect, useState} from "react";
import HomeService from "../api/home.service.js";
import Nav from "../components/Nav.jsx";
import PostCard from "../components/PostCard.jsx";

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        HomeService.getAllProfiles()
            .then(data => {
                console.log(data)
                setPosts(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div className="home">
            <Nav/>
            <div className="d-flex justify-content-center">
                <div className="posts-container">
                    {posts.map((post) => {
                        return <PostCard key={post.id} imgUrl={post.imgUrl} cardTitle={post.name} contact={post.contact} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default Home