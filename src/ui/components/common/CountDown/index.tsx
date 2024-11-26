'use client';
import React, { useState, useEffect } from 'react';

// Components
import CountdownItem from '@/ui/components/common/Countdown/Item';

// Libs
import { convertToSeconds, formatNumber, formatTime } from '@/libs';

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ days, hours, minutes, seconds }: CountdownProps) => {
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

  return (
    <div className="flex space-x-4 text-center text-dark">
      <CountdownItem label="Days" value={formatNumber(day)} />
      <span className="text-primary text-3xl mt-6">:</span>
      <CountdownItem label="Hours" value={formatNumber(hour)} />
      <span className="text-primary text-3xl mt-6">:</span>
      <CountdownItem label="Minutes" value={formatNumber(minute)} />
      <span className="text-primary text-3xl mt-6">:</span>
      <CountdownItem label="Seconds" value={formatNumber(sec)} />
    </div>
  );
};

export default Countdown;
