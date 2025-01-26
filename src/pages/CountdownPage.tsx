import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { Button } from "~components/Button";
import { useBirth } from "~hooks/useBirth";

export function CountdownPage() {
  const [birth, setBirth] = useBirth();

  const birthDate = useMemo(() => {
    if (!birth) return dayjs();
    return dayjs(`${birth} 00:00:00`);
  }, [birth]);

  const endOfLife = useMemo(() => {
    return birthDate.add(80, 'year');
  }, [birthDate]);

  const calculateRemain = () => {
    const now = dayjs();
    const diffInMs = endOfLife.diff(now);

    if (diffInMs <= 0) {
      return [0, 0, 0, 0];
    }

    const MS_PER_SECOND = 1000;
    const MS_PER_MINUTE = MS_PER_SECOND * 60;
    const MS_PER_HOUR = MS_PER_MINUTE * 60;
    const MS_PER_DAY = MS_PER_HOUR * 24;

    const days = Math.floor(diffInMs / MS_PER_DAY);
    const remainingAfterDays = diffInMs % MS_PER_DAY;

    const hours = Math.floor(remainingAfterDays / MS_PER_HOUR);
    const remainingAfterHours = remainingAfterDays % MS_PER_HOUR;

    const minutes = Math.floor(remainingAfterHours / MS_PER_MINUTE);
    const remainingAfterMinutes = remainingAfterHours % MS_PER_MINUTE;

    const seconds = Math.floor(remainingAfterMinutes / MS_PER_SECOND);

    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    return [years, months, days, hours, minutes, seconds];
  }

  const [[years, months, days, hours, minutes, seconds], setRemain] = useState(calculateRemain());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemain(calculateRemain());
    }, 1000);
    return () => clearInterval(interval);
  }, [calculateRemain])

  const handleResetBirth = () => {
    setBirth(null);
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-[500px] text-lg">
        <NumberFlow value={years} suffix=" years" className="w-full" />
        <NumberFlow value={months} suffix=" months" className="w-full" />

        <span className="text-4xl font-bold w-full">
          <NumberFlowGroup>
            <NumberFlow value={days} suffix=" days " />
            <NumberFlow value={hours} suffix=":" format={{ minimumIntegerDigits: 2 }} />
            <NumberFlow value={minutes} suffix=":" digits={{ 1: { max: 5 } }} format={{ minimumIntegerDigits: 2 }} />
            <NumberFlow value={seconds} digits={{ 1: { max: 5 } }} format={{ minimumIntegerDigits: 2 }} />
          </NumberFlowGroup>
        </span>
      </div>

      <Button variant="ghost" className="absolute bottom-4 right-4" onClick={handleResetBirth}>reset birth</Button>
    </div>
  )
}