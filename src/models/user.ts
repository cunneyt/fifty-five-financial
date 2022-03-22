export class ApiRequest {
  email:string;
  password:string;
}
export class ApiResult{
  data:string;
  status:ApiStatus;
  error:string;
}
export enum ApiStatus{
 Ok=0,
 Error=1
}