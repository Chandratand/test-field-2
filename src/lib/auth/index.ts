import { db } from '@/db';
import { NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 3600,
    updateAge: 0,
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials: any) {
        try {
          if (credentials?.password && credentials.email) {
            const user = await db.user.findUnique({
              where: {
                email: credentials?.email,
              },
            });

            if (!user) throw new Error('invalid credentials');
            if (user.password !== credentials.password) throw new Error('invalid credentials');

            return { user } as any;
          }
          throw new Error('invalid credentials');
        } catch (error) {
          throw new Error(JSON.stringify(error));
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        ...session.user,
        ...token,
      };
    },
  },
  pages: {
    signIn: '/login',
  },
};

export const getAuthSession = () => getServerSession(authOptions);
