import { convertToSeconds, formatNumber, formatTime } from "@/libs/helper/format";

describe('convertToSeconds', () => {
  it('should convert to seconds', () => {
    expect(convertToSeconds(1, 1, 1, 1)).toBe(90061);
    expect(convertToSeconds(0, 0, 0, 60)).toBe(60);
    expect(convertToSeconds(0, 1, 0, 0)).toBe(3600);
    expect(convertToSeconds(0, 0, 1, 0)).toBe(60);
  });
});

describe('formatTime', () => {
  it('should convert seconds to formatted time object', () => {
    expect(formatTime(3661)).toEqual({ days: 0, hours: 1, minutes: 1, seconds: 1 });
    expect(formatTime(60)).toEqual({ days: 0, hours: 0, minutes: 1, seconds: 0 });
    expect(formatTime(3600)).toEqual({ days: 0, hours: 1, minutes: 0, seconds: 0 });
    expect(formatTime(86461)).toEqual({ days: 1, hours: 0, minutes: 1, seconds: 1 });
  });
});

describe('formatNumber', () => {
  it('should return a number with two digits', () => {
    expect(formatNumber(1)).toBe('01');
    expect(formatNumber(10)).toBe('10');
    expect(formatNumber(0)).toBe('00');
    expect(formatNumber(99)).toBe('99');
  });
});
