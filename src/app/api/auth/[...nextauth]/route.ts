import mongoDBClient from "@/lib/db";
import { UserType } from "@/types";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { v4 as uuidv4 } from "uuid";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(mongoDBClient),
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {},
      async authorize(creds, req) {
        console.log("CREDS", creds);

        if (creds && "email" in creds && "password" in creds) {
          await mongoDBClient.connect();

          const user = (await mongoDBClient
            .db("cinema-park")
            .collection("users")
            .findOne({
              email: creds.email || "",
            })) as UserType | null;

          if (user) {
            const hashedPass = await bcrypt.compare(
              creds.password as string,
              user.password
            );
            if (hashedPass) {
              return Promise.resolve({
                id: user._id as any,
                name: user.name,
                email: user.email,
                image: user.image,
              });
            }
          }
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
    generateSessionToken: () => uuidv4(),
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
