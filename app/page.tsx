"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <section>
      <h1>Home Page</h1>
      <h2>Sign In with Google</h2>
      <button onClick={() => signIn("google")}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </section>
  );
}
