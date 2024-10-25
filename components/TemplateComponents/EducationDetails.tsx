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
import { EducationData } from "@/app/editor/page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EducationDetails = ({
  data,
  setdata,
}: {
  data: EducationData[];
  setdata: React.Dispatch<React.SetStateAction<EducationData[]>>;

}) => {
  const [index, setindex] = useState(1);

  const addCard = () => {
    setdata([...data, { index: index, date: null, degree: "", location: "",university:"" }]);
    setindex(index + 1);
  };
  const handleInputChange = (
    cardIndex: number,
    field: keyof EducationData,
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
        <Carousel className="w-[90%] mx-auto">
          <CarouselContent>
            {data.map((item) => (
              <CarouselItem className="basis-1/2" key={item.index}>
                <CardWrapper
                  handleInputChange={handleInputChange}
                  data={item}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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

const CardWrapper = ({
  data,
  handleInputChange,
}: {
  data: EducationData;
  handleInputChange: (
    index: number,
    field: keyof EducationData,
    value: string | Date
  ) => void;
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
        <div className="mb-2">
          <Label htmlFor="University">University</Label>
          <Input
            id="university"
            name="university"
            value={data.university}
            onChange={(e) =>
              handleInputChange(data.index, "university", e.target.value)
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

function DatePicker({
  handleInputChange,
  data,
}: {
  handleInputChange: (
    index: number,
    field: keyof EducationData,
    value: string | Date
  ) => void;
  data: EducationData;
}) {
  const setDateFunc = (date: Date | undefined) => {
    handleInputChange(data.index, "date", date || "");
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !data.date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {data.date ? format(data.date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={data.date || undefined}
          onSelect={setDateFunc}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
