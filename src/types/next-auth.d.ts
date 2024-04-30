/* eslint-disable import/order */
/* eslint-disable no-shadow */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    password?: string;
    status: string;
    role: role;
  }
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      phoneNumber: string;
      password?: string;
      status: string;
      role: string;
    };
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: number;
      name: string;
      email: string;
      phoneNumber: string;
      password?: string;
      status: string;
      role: string;
    };
  }
}
