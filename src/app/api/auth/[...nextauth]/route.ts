import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        return {
          id: "1",
          name: "ajeet",
          email: "123456"
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
