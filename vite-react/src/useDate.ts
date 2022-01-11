import { useEffect, useState } from "react";

export const useDate = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleString("ja-JP"));
    }, 100);
    return () => {
      clearInterval(interval);
    };
  });
  return time;
};
