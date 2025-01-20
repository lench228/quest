import React from "react";

import Navigation from "../src/widgets/navigation/ui/navigation";
export const ModeDecorator = (Story: any) => {
  return (
    <section
      className={"dark:bg-background-main bg-white"}
      style={{
        width: "600px",
        gap: "20px",
        border: "1px dashed gray",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navigation></Navigation>
      <div
        className={"mt-1/2 items-center bg-additional dark:bg-background"}
        style={{
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Story />
      </div>
    </section>
  );
};
