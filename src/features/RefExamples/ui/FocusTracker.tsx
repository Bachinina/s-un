import { useRef, type FocusEvent } from "react";

export const FocusTracker = () => {
  const inputFirstRef = useRef<HTMLInputElement | null>(null);
  const inputSecondRef = useRef<HTMLInputElement | null>(null);
  const focusCounter = useRef(0);

  const onFocus = (evt: FocusEvent<HTMLInputElement>) => {
    const previousElement = evt.relatedTarget;

    if (previousElement === inputFirstRef.current || previousElement === inputSecondRef.current) {
      focusCounter.current++;
      console.log("Количество переходов фокуса между полями: ", focusCounter.current);
    }
  };

  const onClick = () => {
    if (inputFirstRef.current) {
      inputFirstRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputFirstRef} type="text" onFocus={onFocus} />
      <input ref={inputSecondRef} type="text" onFocus={onFocus} />

      <button
        onMouseDown={(evt) => evt.preventDefault()} // чтобы кнопка не забирала на себя фокус
        onClick={onClick}
      >
        Сфокусировать на первом
      </button>
    </div>
  );
};
