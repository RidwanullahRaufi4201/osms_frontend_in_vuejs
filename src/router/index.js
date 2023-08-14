import {createRouter,createWebHistory} from 'vue-router'
import routes from './routes'

import { useAuthStore } from '../store/auth'


const router=createRouter({
    routes,
    history:createWebHistory()
})




router.beforeEach(async(to,from,next)=>{
 const store=useAuthStore()
    await store.fetchUser()
    if(to.meta.authRequired&&!store.Islogin)
    {
        next("/login")
    }else if(to.meta.guest&& store.Islogin){
             next("/")
    }else{
        next()
    }

     
})



export default router

