import { api } from './api'; export const login=(email:string,password:string)=>api.post('/auth/login',{email,password}); export const signup=(payload:any)=>api.post('/auth/signup',payload);
