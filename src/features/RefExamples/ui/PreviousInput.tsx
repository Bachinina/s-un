import { useEffect, useRef, useState, type ChangeEvent } from "react";

export const PreviousInput = () => {
  const [value, setValue] = useState("");

  const previousValueRef = useRef("");
  const previousTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previousTextRef.current) {
      // выбрано это решение с выводом текста, так как ругался линтер
      previousTextRef.current.textContent = `Предыдущее значение: ${previousValueRef.current}`;
    }

    previousValueRef.current = value;
  }, [value]);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChange} value={value} />
      <div ref={previousTextRef}>Предыдущее значение:</div>
    </div>
  );
};
