import NextAuth, { NextAuthOptions } from "next-auth"

import GoogleProvider from "next-auth/providers/google"

const options: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
}

export default NextAuth(options)
