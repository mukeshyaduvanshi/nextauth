"use client";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

// const Provider = ({ children, session }) => {
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// };

// export default Provider;
