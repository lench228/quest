const Preloader = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"animate-spin"}
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="#2B2B33"
          stroke-width="4"
          stroke-dasharray="8 8"
        />
      </svg>
    </div>
  );
};

export default Preloader;
