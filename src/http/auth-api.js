import api from './api'

export const csrfcookies=()=>api.get('/sanctum/csrf-cookie')

export const login=(credential)=>api.post("/login",credential)
export const register=(user)=>api.post("/register",user)

export const logout=()=>api.post("/logout")


export const getUser=()=>api.get("/api/user")