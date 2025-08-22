import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Example dummy auth - replace later with DB
        if (credentials?.email === "test@example.com" && credentials?.password === "1234") {
          return { id: "1", name: "Kel User", email: "test@example.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/auth/signin", // custom login page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // put this in .env
})
