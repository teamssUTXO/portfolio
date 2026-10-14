import { useEffect, useState } from "react";
import { sections } from "@/data/sections";

// Section whose box crosses this line
const ACTIVE_LINE = 0.3;

export function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    // re-checked on every scroll frame from live positions
    let frame = 0;
    const pick = () => {
      frame = 0;
      const line = window.innerHeight * ACTIVE_LINE;
      const current = sections.find(({ id }) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect && rect.top <= line && rect.bottom > line;
      });
      setActive(current?.id ?? null);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(pick);
    };
    pick();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [enabled]);
  return enabled ? active : null;
}
