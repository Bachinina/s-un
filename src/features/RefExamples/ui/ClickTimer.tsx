import { useRef } from "react";
import type { IClickData } from "../model/types";

export const ClickTimer = () => {
  const clickTimer = useRef<IClickData>({
    startTime: null,
    clickCount: 0,
  });

  const onClick = () => {
    clickTimer.current.clickCount++;

    if (!clickTimer.current.startTime) {
      clickTimer.current.startTime = Date.now();
      return;
    }

    console.log(
      "Разницу между текущим временем и временем первого клика: ",
      Date.now() - clickTimer.current.startTime,
      "\nOбщее количество кликов: ",
      clickTimer.current.clickCount,
    );
  };

  return (
    <div>
      <button onClick={onClick}>Нажми меня</button>
    </div>
  );
};
