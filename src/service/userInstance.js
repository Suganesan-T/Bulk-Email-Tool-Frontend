import { useParams } from "react-router-dom";
import { instance, protectInstance } from "./Instance";

//define the user service
const userService = {
    //register a user
    register: async(firstname,lastname,email,password)=>{
        //make a post request to the register enpoints
        return await instance.post('/signup', 
        {
            firstname:firstname, 
            lastname: lastname,
            email: email,
            password:password
            
        });
        
    },
    login: async(email, password)=>{
        //make a post request to the login enpoints
        return await protectInstance.post('/signin',
        {
            email: email,
            password:password
        })
    },
    forgetPassword: async(email)=>{
        //make a post request to the forget password enpoints
        return await protectInstance.post('/forgetpassword',
        {
            email: email
        })
    },
    resetPassword: async (token, password) => {
        return await protectInstance.post(`/resetpassword/${token}`, {
            password: password
        });
    },
    getUser: async()=>{
        return await protectInstance.get('/user');
    },
    logout: async()=>{
        return await protectInstance.get('/logout')
    }
}
export default userService