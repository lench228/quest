
import { ReactNode, useEffect, useState } from "react";

interface iSettingsWrapperProps {
  children: ReactNode;
}

export const SettingsWrapper = (props: iSettingsWrapperProps) => {
  const { children } = props;


  const [isExpanded, setIsExpanded] = useState(true);


  useEffect(() => {}, [isExpanded, setIsExpanded]);
  return (
    <div
      className={"flex flex-col w-1/2 items-center transition-transform duration-300  self-center py-4 px-2 dark:bg-grey bg-additional h-full"}


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
