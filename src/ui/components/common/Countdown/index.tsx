'use client';
import React, { useState, useEffect } from 'react';

// Components
import CountdownItem from '@/ui/components/common/Countdown/Item';

// Libs
import { convertToSeconds, formatNumber, formatTime } from '@/libs';
import { clsx } from 'clsx';

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCircle?: boolean;
}

const Countdown = ({
  days,
  hours,
  minutes,
  seconds,
  isCircle
}: CountdownProps) => {
  const [timer, setTimer] = useState<number>(
    convertToSeconds(days, hours, minutes, seconds)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          return convertToSeconds(days, hours, minutes, seconds);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);

  const {
    days: day,
    hours: hour,
    minutes: minute,
    seconds: sec
  } = formatTime(timer);

  const colon = !isCircle && (
    <span className="text-primary lg:text-3xl mt-6">:</span>
  );
  return (
    <div className="flex space-x-4 text-center text-dark">
      <CountdownItem
        label="Days"
        value={formatNumber(day)}
        isCircle={isCircle}
      />

      {colon}
      <CountdownItem
        label="Hours"
        value={formatNumber(hour)}
        isCircle={isCircle}
      />
      {colon}
      <CountdownItem
        label="Minutes"
        value={formatNumber(minute)}
        isCircle={isCircle}
      />
      {colon}
      <CountdownItem
        label="Seconds"
        value={formatNumber(sec)}
        isCircle={isCircle}
      />
    </div>
  );
};

export default Countdown;
