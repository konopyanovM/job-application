export interface User {
  username: string;
  password: string;
}

export interface SignUpData extends User {
  rePassword: string;
}
