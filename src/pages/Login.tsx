import { Button, Input } from "@nextui-org/react";
import React from "react";

const Login = () => {
    return (
        <div className="max-w-[440px] w-full p-3 mt-12 mx-auto">
            <h1 className="text-center text-2xl">Login your chatify account</h1>
            <form action="" className="flex flex-col gap-4">
                <Input placeholder="Please enter your email" />
                <Input placeholder="Please enter your password" />
                <Button className="w-full">Login</Button>
            </form>
        </div>
    );
};

export default Login;
