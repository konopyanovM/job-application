export interface User {
  username: string;
  password: string;
}

export interface SignUpData extends User {
  rePassword: string;
}

export interface Vacancy {
  employer_name: string;
  employer_logo: string;
  job_title: string;
  job_description: string;
}
