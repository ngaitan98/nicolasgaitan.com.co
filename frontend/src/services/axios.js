import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BUCKET_URL
})
export async function getExeperience(){
    console.log(process.env);
    const {data} = await instance.get("/files/experience.json");
    return data
}