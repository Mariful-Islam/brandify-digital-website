import type { ReactNode } from "react";
import SmoothScrollClient from "./SmoothScrollClient";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}

        {/* Only enables GSAP after browser hydration */}
        <SmoothScrollClient />
      </div>
    </div>
  );
}