"use client";
import Button from "../../../components/elements/Button";
import TextBox from "../../../components/elements/TextBox";
import { signIn } from "next-auth/react";
import { useRef } from "react";

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const LoginPage = ({ searchParams }: IProps) => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    if(userName.current && pass.current){
        const result = await signIn("credentials", {
            username: userName.current,
            password: pass.current,
            redirect: true,
            callbackUrl: "/",
        });
    }
    
  };
  return (
    <div className={"flex flex-col justify-center items-center  h-screen gap-1 bg-slate-200"}>
      {searchParams?.message && <p className="text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>}
      <div className="px-8 py-5 shadow bg-white rounded-md flex flex-col gap-4">
        <TextBox lableText="User Name" onChange={(e) => (userName.current = e.target.value)} required />
        <TextBox lableText="Password" type={"password"} onChange={(e) => (pass.current = e.target.value)} required/>
        <Button onClick={onSubmit}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;