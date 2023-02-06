import { get, post } from './base';
export const CRUD = {
  index: (type:string) =>
    get('/'+type),
    create: (type:string,params:any) =>
    post('/'+type, params),
}