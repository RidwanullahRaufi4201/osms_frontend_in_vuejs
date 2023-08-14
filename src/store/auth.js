import { defineStore } from "pinia";
import {computed,ref} from "vue"

import { csrfcookies,login,register,getUser,logout } from "../http/auth-api";

export const useAuthStore=defineStore("authStore",()=>{
    const user=ref(null)

    const Islogin=computed(()=> !!user.value)


    const fetchUser=async()=>{
       try{
        const {data} = await getUser()
        user.value=data
       }catch(errors){
          user.value=null
       }
        
    }


    const handleLogin=async(credential)=>{
           await csrfcookies()
           await login(credential)
           await fetchUser()
    }

    const handleRegiser=async(newUser)=>{
              await register(newUser)
              await handleLogin({
                email:newUser.email,
                password:newUser.password
              })
    }



    const handleLogout=async()=>{
              await logout()
              user.value=null

            }


            return{
                user,
                handleRegiser,
                handleLogin,
                handleLogout,
                Islogin,
                fetchUser,
               


            }
})