import axios from "axios";
import {getErrorMessage} from "./errorMessage.js";

const getAllProfiles =  () => {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:8080/api/posts")
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(getErrorMessage(error))
            })
    })
}

const addPost = (postDto) => {
    return axios.post("http://localhost:8080/api/posts", postDto)
}

const HomeService = {
    getAllProfiles,
    addPost
}

export default HomeService