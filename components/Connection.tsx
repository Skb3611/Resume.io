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

const Connection = () => {
  const { data: session } = useSession();
  console.log(session);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(false);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(false);
  };

  const handleLogout = () => {};

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          {session ? (
            <Button variant={"link"} className="p-0">
              <img
                src={session.user?.image}
                alt="profile"
                className="w-full h-full rounded-full"
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
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" required />
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
