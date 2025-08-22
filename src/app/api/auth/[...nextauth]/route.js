import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // এখানে তোমার user validation logic
        // উদাহরণ: একজাম্পল user
        if (
          credentials.email === "user@example.com" &&
          credentials.password === "123456"
        ) {
          return { id: 1, name: "John Doe", email: "user@example.com" }
        }
        return null
      }
    })
  ],
  pages: { signIn: "/login" },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/products" // Successful login → /products
    }
  },
  session: { strategy: "jwt" }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
