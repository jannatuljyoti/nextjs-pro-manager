import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Fixed demo user
const demoUser = {
  id: 1,
  name: "John Doe",
  email: "user@example.com",
  password: "123456",
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === demoUser.email &&
          credentials?.password === demoUser.password
        ) {
          return {
            id: demoUser.id,
            name: demoUser.name,
            email: demoUser.email,
          };
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/login" },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/products";
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET, // Must add in .env.local
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
