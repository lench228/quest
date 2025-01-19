import React from "react";
import Navigation from "../src/widgets/navigation/ui/navigation";
export const ModeDecorator = (Story: any) => {
  return (
    <section
      className={" bg-white dark:bg-background"}
      style={{
        width: "100%",
        height: "100%",
        border: "1px dashed gray",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Navigation></Navigation>
      <Story />
    </section>
  );
};
