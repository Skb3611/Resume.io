"use client";
import Template1 from "@/Templates/Template1";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PersonalDetails from "@/components/TemplateComponents/PersonalDetails";
import EducationDetails from "@/components/TemplateComponents/EducationDetails";
import Skills from "@/components/TemplateComponents/Skills";
import Experience from "@/components/TemplateComponents/Experience";

export default function ResumeBuilder() {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setResume((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-center">Editor</h2>
         <PersonalDetails />
          {/* <EducationDetails /> */}
          {/* <Skills /> */}
          {/* <Experience /> */}
    
          <Button className="w-full">Save Resume</Button>
        </div>

        <div className="bg-white w-full p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Preview</h2>
          <Template1 size="full" />
        </div>
      </div>
    </div>
  );
}

