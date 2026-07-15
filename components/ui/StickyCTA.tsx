"use client";

import { useEffect, useState } from "react";
import { ReservationButton } from "@/components/ui/Button";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setVisible(progress >= 0.4);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-sand-50/95 px-4 py-3 backdrop-blur-md transition-transform duration-500 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <ReservationButton location="sticky" className="w-full" />
    </div>
  );
}
