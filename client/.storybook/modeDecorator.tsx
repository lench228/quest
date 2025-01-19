import React, { useState } from "react";
export const ModeDecorator = (Story: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <section>
      <button
        onClick={toggleMode}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 9999,
          padding: "2px 2px",
          backgroundColor: isDarkMode ? "#333" : "#fff",
          color: isDarkMode ? "#fff" : "#333",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div
        style={{
          padding: "100px",
          border: "1px dashed gray",
          borderRadius: "5px",
          backgroundColor: isDarkMode ? "#2B2B33" : "#3939C5",
        }}
      >
        <Story />
      </div>
    </section>
  );
};
