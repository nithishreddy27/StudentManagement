import { useState } from "react";
import Router from "next/router";
import { useUser } from "../lib/hooks";
import Form from "../components/loginForm";

const Login = () => {
  useUser({ redirectTo: "/student/profile", redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (errorMsg) setErrorMsg("");

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    console.log(body);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/student/profile");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  }

  return (
    <>
      <div className="relative z-40 h-screen flex justify-center align-middle">
        <div className=" bg-slate-200 w-[70%] mx-auto my-auto flex ">
          <div className="w-[40%]">
            <img src="/login.jpg " className="w-[100%] h-[100%]" alt="" />
          </div>
          <div className="w-60% mx-5">
            <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
