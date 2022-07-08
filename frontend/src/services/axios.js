import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BUCKET_URL
})
export async function getExeperience(){
    const {data} = await instance.get("/files/experience.json");
    return data
}
export async function getProjects(){
    const {data} = await instance.get("/files/projects.json");
    console.log(data);
    return data
}