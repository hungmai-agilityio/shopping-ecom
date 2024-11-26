/**
 * Converts the given time into total seconds (Countdown is counted in seconds)
 * @param days - The number of days.
 * @param hours - The number of hours.
 * @param minutes - The number of minutes.
 * @param seconds - The number of seconds.
 * @returns The total time in seconds.
 */
export const convertToSeconds = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number
): number => {
  return days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
}

/**
 * Formats the given time in seconds into an object with days, hours, minutes, and seconds.
 * @param seconds - The total time in seconds.
 * @returns An object containing days, hours, minutes, and seconds.
 */
export const formatTime = (seconds: number): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const day = Math.floor(seconds / (24 * 60 * 60));
  const hour = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minute = Math.floor((seconds % (60 * 60)) / 60);
  const sec = seconds % 60;
  return { days: day, hours: hour, minutes: minute, seconds: sec };
}

/**
 * Formats a number to always display at least two digits.
 * @param num - The number to format.
 * @returns A string with the number padded to two digits.
 */
export const formatNumber = (num: number): string => num.toFixed(0).padStart(2, '0');