"use client";
import Template1 from "@/components/Templates/Template1";
import { Button } from "@/components/ui/button";
import PersonalDetails from "@/components/TemplateComponents/PersonalDetails";
import EducationDetails from "@/components/TemplateComponents/EducationDetails";
import Skills from "@/components/TemplateComponents/Skills";
import Experience from "@/components/TemplateComponents/Experience";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export interface PersonalData {
  name: string;
  role: string;
  aboutme: string;
  phone: string;
  email: string;
  address: string;
}

export interface EducationData {
  index: number;
  degree: string;
  location: string;
  university: string;
  date: Date | null | undefined;
}
export interface SkillData {
  skill: string;
  index: number;
}
export interface ExperienceData {
  index: number;
  company: string;
  position: string;
  summary: string;
  startdate: Date | null | undefined;
  enddate: Date | null | undefined;
}
export interface FinalData extends PersonalData {
  Education: EducationData[];
  Skills: SkillData[];
  Experience: ExperienceData[];
}

export default function ResumeBuilder() {
  useEffect(() => {
    const resume = localStorage.getItem("resume");
    if (resume) {
      const parsed = JSON.parse(resume);
      setpersonaldata(parsed);
      seteducationdata(parsed?.Education);
      setskilldata(parsed?.Skills);
      setexperiencedata(parsed?.Experience);
      setfinaldata(parsed);
      setProgress(parsed?.progress);
    }

    return () => {};
  }, []);

  const [progress, setProgress] = useState(0);
  const [personaldata, setpersonaldata] = useState<PersonalData>({
    name: "",
    role: "",
    aboutme: "",
    phone: "",
    email: "",
    address: "",
  });
  const [educationdata, seteducationdata] = useState<EducationData[]>([
    { index: 0, date: null, degree: "", location: "", university: "" },
  ]);
  const [skilldata, setskilldata] = useState<SkillData[]>([
    { skill: "", index: 0 },
  ]);
  const [experiencedata, setexperiencedata] = useState<ExperienceData[]>([
    {
      index: 0,
      company: "",
      position: "",
      summary: "",
      startdate: null,
      enddate: null,
    },
  ]);
  const [finaldata, setfinaldata] = useState<FinalData>();
  let handlesave = () => {
    setfinaldata({
      ...personaldata,
      Education: educationdata,
      Skills: skilldata,
      Experience: experiencedata,
    });
    localStorage.setItem(
      "resume",
      JSON.stringify({
        ...personaldata,
        Education: educationdata,
        Skills: skilldata,
        Experience: experiencedata,
        progress: progress,
      })
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 max-h-screen">
          <h2 className="text-xl font-semibold mb-4 text-center">Editor</h2>
          <div className="min-h-[80%]">
          {(() => {
            switch (progress) {
              case 0:
                return (
                  <PersonalDetails
                    data={personaldata}
                    setdata={setpersonaldata}
                  />
                );
              case 1:
                return (
                  <EducationDetails
                    data={educationdata}
                    setdata={seteducationdata}
                  />
                );
              case 2:
                return <Skills data={skilldata} setdata={setskilldata} />;
              case 3:
                return (
                  <Experience
                    data={experiencedata}
                    setdata={setexperiencedata}
                  />
                );
            }
          })()}
          </div>
          <div className="btns flex w-full justify-between">
            <Button onClick={handlesave}>Save Resume</Button>
            <div className="nav flex gap-4">
              <Button
                disabled={progress === 0}
                onClick={() => setProgress(progress - 1)}
              >
                <ArrowLeft className="size-6 mr-2" />
                Prev{" "}
              </Button>
              <Button
                disabled={progress === 3}
                onClick={() => setProgress(progress + 1)}
              >
                Next <ArrowRight />{" "}
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-background dark:bg-background w-full px-4 rounded-lg shadow-lg ">
          <Template1
            PersonalData={personaldata}
            EducationData={educationdata}
            SkillData={skilldata}
            ExperienceData={experiencedata}
          />
        </div>
      </div>
    </div>
  );
}
