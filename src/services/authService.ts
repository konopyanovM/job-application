import { SignUpData, User } from '../types';
import toast from 'react-hot-toast';
import { NavigateFunction } from 'react-router-dom';

const USERS_KEY = 'users';
const USER_KEY = 'user';
const AUTH_KEY = 'isAuthorized';

export const authService: any = {
  isAuthorized: function () {
    return Boolean(localStorage.getItem(AUTH_KEY));
  },
  getUsers: function (): User[] {
    const usersRaw = localStorage.getItem(USERS_KEY);
    let users: User[] = [];

    if (usersRaw !== null) users = JSON.parse(usersRaw);
    return users;
  },
  getUser: function () {},
  register: function (data: User, navigate: NavigateFunction): void {
    const users = this.getUsers();

    // Check for duplicates
    const isDuplicateName = this._userExist(data);

    // And register only if name is not duplicated
    if (!isDuplicateName) {
      users.push(data);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));

      navigate('/auth/login');
      toast.success('Registration successful! Now log in to your account');
    } else {
      toast.error('This username is already taken');
    }
  },
  login: function (data: User, navigate: NavigateFunction) {
    const userData = this._userExist(data);

    if (userData && userData.password === data.password) {
      localStorage.setItem(AUTH_KEY, 'true');
      navigate('/');
    } else if (userData.password !== data.password) {
      toast.error('Incorrect password');
    } else {
      toast.error('User not found');
    }
  },
  _userExist: function (data: User) {
    return this.getUsers().find(user => {
      return user.username === data.username;
    });
  },
};
