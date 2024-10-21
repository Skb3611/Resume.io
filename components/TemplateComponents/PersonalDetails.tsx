import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { PersonalData } from "@/app/editor/page"
export default function data({
  data,
  setdata,
}: {
  data: PersonalData;
  setdata: React.Dispatch<React.SetStateAction<PersonalData>>;
}) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="text-lg font-semibold">Personal Details</h1>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={data?.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          name="role"
          value={data?.role || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="aboutme">About me</Label>
        <Textarea onChange={handleChange} value={data?.aboutme || ""} name="aboutme"></Textarea>
      </div>
      <div>
        <Label htmlFor="phone">Phone number</Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={data?.phone || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={data?.email || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="location">City, Country</Label>
        <Input
          id="address"
          name="address"
          value={data?.address || ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
