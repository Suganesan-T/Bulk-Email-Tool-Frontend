//import axios
import axios from "axios";

//define base url for API
const BASEURL = "https://bulk-email-tool-backend-moat.onrender.com";

//create axios instance
const instance = axios.create({
    baseURL: BASEURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }    
});

const protectInstance = axios.create({
    baseURL: BASEURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true 
})

export { instance, protectInstance };