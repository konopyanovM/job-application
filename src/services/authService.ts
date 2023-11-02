import { User } from '../types';

const USERS_KEY = 'users';
const USER_KEY = 'user';

export const authService: any = {
  getUsers: (): User[] => {
    const usersRaw = localStorage.getItem(USERS_KEY);
    let users: User[] = [];

    if (usersRaw !== null) users = JSON.parse(usersRaw);
    return users;
  },
  getUser: () => {},
  register: (data: User): void => {
    // @ts-ignore
    const users = this.getUsers();

    const newUsers = users.push(data);

    localStorage.setItem(USER_KEY, newUsers);
  },
};
