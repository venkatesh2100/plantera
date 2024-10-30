import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        const user = await prisma.user.findUnique({
          where: { email: credentials?.username },
        });

        try {
          if (user && credentials?.password) {
            const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
            if(isPasswordValid){
              console.log(user)
              return user;
            }
          }
        } catch (error) {
          message: `password is incorrect ${error}`;
        }

        if(!user && credentials?.password){
          const hashedPass = await bcrypt.hash(credentials.password, 10);
          const user = await prisma.user.create({
            data: {
              email: credentials.username,
              password: hashedPass
            }
          })
          if(user){
            console.log(user)
            return user;
          }
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin"
  }
});

export { handler as GET, handler as POST };
