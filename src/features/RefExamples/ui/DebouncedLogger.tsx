import { useEffect, useRef, useState, type ChangeEvent } from "react";

export const DebouncedLogger = () => {
  const [value, setValue] = useState("");
  const timerRef = useRef<number | null>(null);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value;
    setValue(newValue);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      console.log("Значение: ", newValue);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
};
