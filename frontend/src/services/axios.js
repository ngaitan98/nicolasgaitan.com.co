import axios from "axios";
import experience from "../assets/files/experience.json";
import projects from "../assets/files/experience.json";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BUCKET_URL
})
export async function getExeperience(){
    if(process.env.REACT_APP_ENV === "dev"){
        return experience
    }
    const {data} = await instance.get("/files/experience.json");
    return data
}
export async function getProjects(){
    const {data} = await instance.get("/files/projects.json");
    return data
}