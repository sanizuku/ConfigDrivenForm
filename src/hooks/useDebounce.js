import { useState, useCallback } from "react";

const useDebounce = (func, delay) => {
  const [timeoutId, setTimeoutId] = useState(null);

  const debouncedFunction = useCallback(
    (name, value) => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear previous timeout if the user types again
      }
      const newTimeoutId = setTimeout(() => {
        func(name, value); // Call the actual function after the delay
      }, delay);
      setTimeoutId(newTimeoutId); // Store the timeoutId to clear it on next input
    },
    [timeoutId, func, delay] // Dependencies: timeoutId, func, and delay
  );

  return debouncedFunction;
};

export default useDebounce;
