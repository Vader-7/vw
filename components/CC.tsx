import React from "react";

export const CC = () => {
  return (
    <div className="container relative mb-[2rem] flex items-center justify-center gap-2 font-inter text-xs antialiased drop-shadow-sm">
      <abbr title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.">
        CC BY-NC 4.0
      </abbr>
      {` ${new Date().getFullYear()} © Tyler Miranda Hayashi.`}
    </div>
  );
};
