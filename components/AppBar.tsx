import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Button from "./elements/Button";

const AppBar = () => {
  const { data: session } = useSession();
  // console.log({ session });

  return (
    <div className="bg-blue-500 p-2 justify-center items-center flex gap-5 ">
      <Link className="text-white hover:text-blue-200" href={"/"}>
        Home
      </Link>

      <Link className="text-white hover:text-blue-200" href={"/admin"}>
        Admin Panel
      </Link>
      <Link className="text-white hover:text-blue-200" href={"/user"}>
        User Panel
      </Link>
      <div className="ml-auto justify-center items-center flex gap-2">
        {session?.user ? (
          <>
            <p className="text-white"> {session.user.name}</p>
            <Button onClick={() => signOut()}>
              Logout
            </Button>
          </>
        ) : (
          <Button onClick={() => signIn()}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default AppBar;