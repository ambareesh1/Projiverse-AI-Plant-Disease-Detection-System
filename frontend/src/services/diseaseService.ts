import { api } from './api'; export const getDiseases=()=>api.get('/diseases').then(r=>r.data);
