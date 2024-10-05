import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "../ui/textarea";

interface Data {
  index: number;
  Startdate: Date | null | undefined;
  Enddate: Date | null | undefined;
  company: string;
  position: string;
  summary: string;
}
const Experience = () => {
  const [data, setdata] = useState<Data[]>([
    { index: 0, Startdate: null, Enddate: null, company: "", position: "", summary: "" },
  ]);
  const [index, setindex] = useState(1);
  const addCard = () => {
    setdata([
      ...data,
      { index: index, Startdate: null, Enddate: null, company: "", position: "", summary: "" },
    ]);
    setindex(index + 1);
  };

  const removeCard = () => {
    if (data.length === 1) return;
    setdata(data.slice(0, data.length - 1));
  };
  const handleInputChange = (
    CardIndex: number,
    field: keyof Data,
    value: string | Date
  ) => {
    setdata((prevData) =>
      prevData.map((item) =>
        item.index === CardIndex ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="mb-2">
      <h1 className="font-semibold text-lg mb-3">Work Experience</h1>

      <Carousel className="w-[80%] mx-auto">
        <CarouselContent>
          {data.map((item) => {
            return (
              <CarouselItem key={item.index}>
                <CardWrapper
                  key={item.index}
                  data={item}
                  handleInputChange={handleInputChange}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="btns space-x-3">
        <Button className="mt-4" onClick={addCard}>
          Add More
        </Button>
        <Button
          className="mt-4"
          disabled={data.length === 1}
          onClick={removeCard}
        >
          {" "}
          Remove{" "}
        </Button>
      </div>
    </div>
  );
};

export default Experience;

const CardWrapper = ({
  data,
  handleInputChange,
}: {
  data: Data;
  handleInputChange: (
    index: number,
    field: keyof Data,
    value: string | Date
  ) => void;
}) => {
  return (
    <>
      <Card className="w-full">
        <CardHeader className="p-4">
          <CardTitle>Add Your Experience</CardTitle>
        </CardHeader>
        <CardContent className="py-2">
          <div className="mb-3">
            <Label htmlFor="company">Company</Label>
            <Input
              type="text"
              id="company"
              name="company"
              placeholder="Company Name"
              onChange={(e) =>
                handleInputChange(data.index, "company", e.target.value)
              }
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="position">Position</Label>
            <Input
              type="text"
              id="position"
              name="position"
              placeholder="Position"
              onChange={(e) =>
                handleInputChange(data.index, "position", e.target.value)
              }
            />
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <Label htmlFor="startDate">Start Date</Label>
            <DatePicker handleInputChange={handleInputChange} data={data} name="Startdate"/>
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <Label htmlFor="endDate">End Date</Label>
            <DatePicker handleInputChange={handleInputChange} data={data} name="Enddate" />
          </div>
          <div className="mb-2">
            <Label htmlFor="summary">Short Summary</Label>
            <Textarea
              id="summary"
              name="summary"
              placeholder="Short Summary"
              rows={3}
              onChange={(e) =>
                handleInputChange(data.index, "summary", e.target.value)
              }
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

function DatePicker({
  name,
  handleInputChange,
  data,
}: {
  name:keyof Data
  handleInputChange: (
    index: number,
    field: keyof Data,
    value: string | Date
  ) => void;
  data: Data;
}) {
  const [date, setDate] = React.useState<Date>();
  const setDateFunc = (date: Date | undefined) => {
    setDate(date);
    handleInputChange(data.index, name , date || "");
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
