import { GET, POST } from '@/auth'

export { GET, POST }
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { compare } from "bcryptjs";
// import { neon } from '@neondatabase/serverless';
// const handler = NextAuth({
//   session: {
//     strategy: "jwt",
//   },
// providers: [
//   CredentialsProvider({
//     // // The name to display on the sign in form (e.g. "Sign in with...")
//     // name: "Credentials",
//     // // `credentials` is used to generate a form on the sign in page.
//     // // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//     // // e.g. domain, username, password, 2FA token, etc.
//     // // You can pass any HTML attribute to the <input> tag through the object.
//     credentials: {
//       email: {  },
//       password: {  }
//     },
//     async authorize(credentials, req) {

//       // Connect to the Neon database
//       const sql = neon(`${process.env.DATABASE_URL}`)
//       const response = await sql`
//         SELECT * FROM users WHERE email = ${credentials?.email}
//       `;
//       const user = response[0];

//       const passwordCorect = await compare
//       (
//         credentials?.password || "", user?.password || ""
//       );
//       console.log(passwordCorect && user);
//       if (user && passwordCorect) {
//         // Any object returned will be saved in `user` property of the JWT
//         return { 
//           id: user.id, 
//           email: user.email, 
//           name: `${user.firstname} 
//           ${user.lastname}` };
//       }      
//      return null;
//     }
//   })
// ]

// })
// export{ handler as GET, handler as POST};