import React, { useEffect } from "react";

export const CC = () => {
  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setDateState(new Date(data.time));
      });
  }, []);
  useEffect(() => {
    const tick = setInterval(() => {
      setDateState(new Date());
    }, 1000);
    return () => clearInterval(tick);
  }, []);


  const [dateState, setDateState] = React.useState(new Date());
  return (
    <div className="relative flex items-center justify-center text-xs antialiased drop-shadow-sm font-medium py-[2rem] text-center">
      {dateState && (
        <span title="CC">
          © Tyler Miranda Hayashi.
          <br />
          {dateState.toLocaleTimeString("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
          })}
        </span>
      )}
    </div>
  );
};


