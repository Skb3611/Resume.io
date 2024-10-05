"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Data {
  index: number;
  date: Date | null | undefined;
  degree: string;
  location: string;
}
const EducationDetails = () => {
  const [data, setdata] = useState<Data[]>([
    { index: 0, date: null, degree: "", location: "" },
  ]);
  const [index, setindex] = useState(1);

  const addCard = () => {
    setdata([...data, { index: index, date: null, degree: "", location: "" }]);
    setindex(index + 1);
  };
  const handleInputChange = (
    cardIndex: number,
    field: keyof Data,
    value: string | Date
  ) => {
    setdata((prevData) =>
      prevData.map((item) =>
        item.index === cardIndex ? { ...item, [field]: value } : item
      )
    );
  };
  const removeCard = () => {
    if (data.length === 1) return;
    setdata(data.slice(0, data.length - 1));
  };
  return (
    <div>
      <h1 className="font-semibold text-lg mb-3"> Education Details</h1>
      <div className="flex flex-wrap gap-2">
        {data.map((item, index) => (
          <CardWrapper
            key={item.index}
            handleInputChange={handleInputChange}
            data={item}
          />
        ))}
      </div>
      <div className="btns space-x-3">
        <Button className="mt-4" onClick={addCard}>
          Add More
        </Button>
        <Button
          className="mt-4"
          disabled={data.length === 1}
          onClick={removeCard}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default EducationDetails;

let CardWrapper = ({
  data,
  handleInputChange,
}: {
  data: Data;
  handleInputChange: (index: number, field: keyof Data, value: string|Date) => void;
}) => {
  return (
    <Card className="p-4">
      <CardContent>
        <div className="mb-2">
          <Label htmlFor="degree">Degree</Label>
          <Input
            id="degree"
            name="degree"
            value={data.degree}
            onChange={(e) =>
              handleInputChange(data.index, "degree", e.target.value)
            }
          />
        </div>
        <div className="mb-2 flex flex-col gap-2">
          <Label htmlFor="date">Year of Completion</Label>
          <DatePicker handleInputChange={handleInputChange} data={data} />
        </div>
        <div className="mb-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={data.location}
            onChange={(e) =>
              handleInputChange(data.index, "location", e.target.value)
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

function DatePicker({
  handleInputChange,
  data
}: {
  handleInputChange: (index: number, field: keyof Data, value: string|Date) => void;
  data: Data
}) {
  const [date, setDate] = React.useState<Date>();
  const setDateFunc = (date: Date|undefined) => {
    setDate(date);
    handleInputChange(data.index, "date", date || "");
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDateFunc}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
