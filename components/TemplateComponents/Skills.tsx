import React, { useState } from "react";

import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { SkillData } from "@/app/editor/page";
import data from "./PersonalDetails";

const Skills = ({
  data,
  setdata,
}: {
  data: SkillData[];
  setdata: React.Dispatch<React.SetStateAction<SkillData[]>>;
}) => {
  const [index, setIndex] = useState(data.length);
  const addCard = () => {
    setdata([...data, { skill: "", index: index }]);
    setIndex(index + 1);
  };
  const handleInputChange = (index: number, skill: string) => {
    setdata((prevData) =>
      prevData.map((item) =>
        item.index === index ? { ...item, skill: skill } : item
      )
    );
  };

  const removeCard = () => {
    if (data.length === 1) return;
    setdata(data.slice(0, data.length - 1));
  };
  return (
    <>
      <h1 className="text-lg font-semibold"> Skills</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {data.map((item) => {
          return (
            <CardWrapper
              key={item.index}
              handleInputChange={handleInputChange}
              item={item}
            />
          );
        })}
      </div>
      <div className="buttons space-x-3">
        <Button className="mt-4" onClick={addCard}>
          Add More
        </Button>
        <Button
          className="mt-4"
          onClick={removeCard}
          disabled={data.length === 1}
        >
          Remove
        </Button>
      </div>
    </>
  );
};

export default Skills;

const CardWrapper = ({
  handleInputChange,
  item,
}: {
  handleInputChange: (index: number, value: string) => void;
  item: SkillData;
}) => {
  return (
    <Card className="w-[40%]">
      <CardHeader>
        <CardTitle>Add a Skill</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
        value={item.skill}
          id="skill"
          type="text"
          placeholder="eg. Software Development"
          onChange={(e) => handleInputChange(item.index, e.target.value)}
        />
      </CardContent>
    </Card>
  );
};