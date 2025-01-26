import { useState } from "react";
import BlurText from "~components/BlureText";
import { Button } from "~components/Button";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "~components/Dialog";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue, SelectGroup } from "~components/Select";
import { useBirth } from "~hooks/useBirth";

export default function BirthFormPage() {
  const [, setBirth] = useBirth();

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleYearChange = (value: string) => {
    setYear(value);
  };
  const handleMonthChange = (value: string) => {
    setMonth(value);
  };
  const handleDayChange = (value: string) => {
    setDay(value);
  };

  const isAvailableBirth = (() => {
    if (year === '' || month === '' || day === '') return false;
    return true;
  })()

  const onClickSubmit = () => {
    if (!isAvailableBirth) return;
    setBirth(`${year}-${month}-${day}`);
  }

  return <div className="flex flex-col items-center justify-center h-full">
    <BlurText
      text="Enter your birthdate"
      delay={150}
      animateBy="words"
      direction='bottom'
      className="text-2xl mb-8 text-white"
    />

    <div className="flex gap-4">
      <div className="flex gap-1">
        <Select value={year} onValueChange={handleYearChange}>
          <SelectTrigger>
            <SelectValue placeholder="year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.from({ length: 2025 - 1900 + 1 }, (_, i) => 2025 - i).map(
                (year) => (
                  <SelectItem key={year} value={String(year)}>
                    {year}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={month} onValueChange={handleMonthChange}>
          <SelectTrigger>
            <SelectValue placeholder="month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="01">1</SelectItem>
            <SelectItem value="02">2</SelectItem>
            <SelectItem value="03">3</SelectItem>
            <SelectItem value="04">4</SelectItem>
            <SelectItem value="05">5</SelectItem>
            <SelectItem value="06">6</SelectItem>
            <SelectItem value="07">7</SelectItem>
            <SelectItem value="08">8</SelectItem>
            <SelectItem value="09">9</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="11">11</SelectItem>
            <SelectItem value="12">12</SelectItem>
          </SelectContent>
        </Select>

        <Select value={day} onValueChange={handleDayChange}>
          <SelectTrigger>
            <SelectValue placeholder="day" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 31 }, (_, i) => i + 1).map(
              (day) => (
                <SelectItem key={day} value={String(day)}>{day}</SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      </div>

      <Dialog>
        <DialogTrigger>
          <Button disabled={!isAvailableBirth}>
            Submit
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Confirm your birthdate</DialogTitle>
          <DialogDescription>
            {`${year}-${month}-${day}`}
          </DialogDescription>
          <DialogFooter>
            <Button onClick={onClickSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
}
