import { api } from './api'; export const getOverview=()=>api.get('/analytics/overview').then(r=>r.data);
