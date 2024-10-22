import axios from "axios"

export const api = axios.create({
    baseURL: "https://rocketnotes-api-a959.onrender.com",
})

