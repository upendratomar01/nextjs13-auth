"use client";
import { useSession } from "next-auth/react";

const AdminPage = () => {
  const { data: session } = useSession();

  return (
    <div className="p-5">
      <p className="flex justify-center items-center p-5 text-purple-500 text-2xl font-bold">This Is The Admin Panel. Only Admin Users Can Access This.</p>

      <div className="grid grid-cols-5">
        <p className="text-slate-600">UserName:</p>
        <p className="col-span-4 text-sky-600">{session?.user.userName}</p>
        <p className="text-slate-600">Name:</p>
        <p className="col-span-4  text-sky-600">{session?.user.name}</p>
        <p className="text-slate-600">Role:</p>
        <p className="col-span-4  text-sky-600"> {session?.user.role}</p>
      </div>
    </div>
  );
};

export default AdminPage;