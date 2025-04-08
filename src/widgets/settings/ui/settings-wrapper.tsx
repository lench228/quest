import styles from "./settings.module.css";
import { ReactNode, useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { toggleSlider } from "entities/quest-items/model/quest-items.slice";

interface iSettingsWrapperProps {
  children: ReactNode;
}

export const SettingsWrapper = (props: iSettingsWrapperProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const PANEL_HEIGHT = 260;
  const VISIBLE_PART = 30;
  const [isExpanded, setIsExpanded] = useState(true);

  const [, drag] = useDrag(() => ({
    type: "SettingsWrapper",
    collect: () => {},
    end: (_, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset !== null) {
        const swipeUp = window.innerHeight - PANEL_HEIGHT - offset.y > 0;
        setIsExpanded(swipeUp);
        dispatch(toggleSlider(swipeUp));
      }
    },
  }));

  useEffect(() => {}, [isExpanded, setIsExpanded]);
  return (
    <div
      className={styles.container}
      ref={drag}
      style={{
        transform: `translateY(${isExpanded ? 0 : PANEL_HEIGHT - VISIBLE_PART}px)`,
        transition: "transform 0.3s ease",
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <svg
        width="200"
        height="4"
        viewBox="0 0 200 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="4" rx="2" fill="#464670" />
      </svg>
      {children}
    </div>
  );
};
