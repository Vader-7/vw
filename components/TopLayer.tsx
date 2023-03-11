import React from "react"

export function TopLayer() {
  return (
    <div className="sticky top-0 w-full h-10 z-10 bgA dark:bgDark inset-0 content-none">
      <div
        className="blurTop relative h-20 backdrop-blur-sm opacity-90 pointer-events-none select-none"
        aria-hidden="true"
      />
    </div>
  )
}
