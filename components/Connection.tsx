"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Image from "next/image";

interface Data{
  email:string;
  password:string;
  name:string;
}
const Connection = () => {
  const [data, setdata] = useState<Data>({
    name:"",
    email:"",
    password:""
  })
  const { data: session } = useSession();
  console.log(session);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogin = async(e: React.FormEvent) => {
    e.preventDefault();
    let res = await fetch("/api/customauth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(await res.json())
    setIsDialogOpen(false);
  };

  const handleSignup = async(e: React.FormEvent) => {
    e.preventDefault();
    let res = await fetch("/api/customauth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(await res.json())
    setIsDialogOpen(false);
  };

  const handlechange=(e:React.ChangeEvent<HTMLInputElement>) => {
    setdata({...data,[e.target.id]:e.target.value})
  }
  const handlesignup = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data)
    setIsDialogOpen(false);

  }
  

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          {session ? (
            <Button variant={"link"} className="p-0">
              <img
                height={100}
                width={100}
                src={session.user?.image ?? ""}
                alt="profile"
                className="w-full h-full rounded-full"
                loading="lazy"
              />
            </Button>
          ) : (
            <Button variant="outline">Login / Signup</Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {session ? "My Account" : "Login / Signup"}
            </DialogTitle>
            <DialogDescription>
              {session
                ? "Manage your account or log out."
                : "Login to your account or create a new one."}
            </DialogDescription>
          </DialogHeader>
          {session ? (
            <div className="space-y-4">
              <h4 className="font-medium text-sm">
                Welcome back! {session.user?.name}
              </h4>
              <Button onClick={() => signOut()} className="w-full">
                Logout
              </Button>
            </div>
          ) : (
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Signup</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input value={data.email} id="email" type="email" required onChange={(e)=>handlechange(e)}/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input value={data.password} id="password" type="password" required onChange={(e)=>handlechange(e)}/>
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Name</Label>
                    <Input value={data.name} id="name" type="name" required onChange={(e)=>handlechange(e)}/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Email</Label>
                    <Input value={data.email} id="email" type="email" required onChange={(e)=>handlechange(e)}/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Password</Label>
                    <Input value={data.password} id="password" type="password" required onChange={(e)=>handlechange(e)}/>
                  </div>
                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                </form>
              </TabsContent>
              {/* Social Media Login Section */}
              <div className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center py-5"
                  onClick={() => signIn("google")}
                >
                  <img
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="Google logo"
                    width={25}
                    height={25}
                    className="mr-2"
                  />
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center py-5"
                  onClick={() => signIn("twitter")}
                >
                  <img
                    src="https://authjs.dev/img/providers/twitter.svg"
                    alt="Twitter logo"
                    width={25}
                    height={25}
                    className="mr-2"
                  />
                  Continue with Twitter
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center py-5"
                  onClick={() => signIn("linkedin")}
                >
                  <img
                    src="https://authjs.dev/img/providers/linkedin.svg"
                    alt="LinkedIn logo"
                    width={25}
                    height={25}
                    className="mr-2"
                  />
                  Continue with LinkedIn
                </Button>
              </div>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Connection;
