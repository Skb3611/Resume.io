import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
;

export default function PersonalDetails () {
    const [PersonalDetails, setPersonalDetails] = useState({
      name: "",
      role: "",
      aboutme: "",
      phone: "",
      email: "",
      location: "",
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPersonalDetails({ ...PersonalDetails, [e.target.name]: e.target.value })
    }
    return (
      <>
        <h1 className="text-lg font-semibold">Personal Details</h1>
        <div><Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={PersonalDetails.name}
          onChange={handleChange}
        /></div>
        <div><Label htmlFor="role">Role</Label>
        <Input
          id="role"
          name="role"
          value={PersonalDetails.role}
          onChange={handleChange}
        /></div>
        <div><Label htmlFor="aboutme">About me</Label>
       <Textarea>
        
       </Textarea></div>
        <div><Label htmlFor="phone">Phone number</Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={PersonalDetails.phone}
          onChange={handleChange}
        /></div>
        <div><Label htmlFor="email">Email</Label>
        <Input
        type="email"
          id="email"
          name="email"
          value={PersonalDetails.email}
          onChange={handleChange}
        /></div>
        <div><Label htmlFor="location">City, Country</Label>
        <Input
          id="location"
          name="location"
          value={PersonalDetails.location}
          onChange={handleChange}
        /></div>
      </>
    );
  };