import { useRef, useState, type FC, type ReactNode } from "react";
import styles from "./Tooltip.module.css";
import { ETooltipPosition } from "./constants";
import { createPortal } from "react-dom";
import { useTheme } from "@shared/lib/hooks/useTheme";

const tooltipRoot = document.getElementById("tooltip-root");

interface ITooltipProps {
  text: string;
  position?: ETooltipPosition;
  children: ReactNode;
}
export const Tooltip: FC<ITooltipProps> = ({ text, position = "right", children }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // для позиционирования
  const triggerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    switch (position) {
      case ETooltipPosition.Top:
        setCoords({
          top: rect.top,
          left: rect.left + rect.width / 2,
        });
        break;

      case ETooltipPosition.Bottom:
        setCoords({
          top: rect.bottom,
          left: rect.left + rect.width / 2,
        });
        break;

      case ETooltipPosition.Left:
        setCoords({
          top: rect.top + rect.height / 2,
          left: rect.left,
        });
        break;

      case ETooltipPosition.Right:
        setCoords({
          top: rect.top + rect.height / 2,
          left: rect.right,
        });
        break;
    }
    setIsVisible(true);
  };

  return (
    <div
      className={styles.trigger}
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible &&
        tooltipRoot &&
        createPortal(
          <div
            className={`${styles.tooltip} ${styles[position]} ${styles[theme]}`}
            style={{
              top: coords.top,
              left: coords.left,
            }}
          >
            {text}
          </div>,
          tooltipRoot,
        )}
    </div>
  );
};
