import React from "react";
import Navigation from "../src/widgets/navigation/ui/navigation";

export const ModeDecorator = (Story: any) => {
  return (
    <section
      className={"dark:bg-background-main bg-white"}
      style={{
        gap: "20px",
        border: "1px dashed gray",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navigation></Navigation>
      <div
        className={
          "h-full w-full bg-additional dark:bg-background overflow-y-auto"
        }
        style={{
          borderRadius: "5px",
        }}
      >
        <Story />
      </div>
    </section>
  );
};
