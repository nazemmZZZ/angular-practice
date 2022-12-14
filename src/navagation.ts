

export enum LoginReq{
  YES,NO,COMMON
}
export interface RoutesToUrl{
  name: string;
  url: string
  loginReq: LoginReq;
  active: Boolean
}

export const routesToUrl: RoutesToUrl[] = [
  { name: 'Home', url: '/', loginReq: LoginReq.COMMON, active: true },
  { name: 'Register', url: '/register', loginReq: LoginReq.NO, active: false },
  { name: 'Login', url: '/login', loginReq: LoginReq.NO, active: false },
];
