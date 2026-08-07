import { ClickTimer } from "./ClickTimer";
import { DebouncedLogger } from "./DebouncedLogger";
import { FocusTracker } from "./FocusTracker";
import { PreviousInput } from "./PreviousInput";
import { WebSocketLogger } from "./WebSocketLogger";
import styles from "./RefExamples.module.css";

export const RefExamples = () => {
  return (
    <div className={styles.wrap}>
      <ClickTimer />
      <PreviousInput />
      <FocusTracker />
      <DebouncedLogger />
      <WebSocketLogger />
    </div>
  );
};
