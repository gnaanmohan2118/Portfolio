import { useState, useEffect, useRef } from "react";

export function useMobile(bp = 868) {
  const [m, s] = useState(() => typeof window !== "undefined" && window.innerWidth <= bp);
  useEffect(() => { const h = () => s(window.innerWidth <= bp); addEventListener("resize", h); return () => removeEventListener("resize", h) }, [bp]);
  return m;
}

export function useVis(th = 0.1) {
  const r = useRef(null); const [v, s] = useState(false);
  useEffect(() => { const el = r.current; if (!el) return; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) s(true) }, { threshold: th }); o.observe(el); return () => o.disconnect() }, []);
  return [r, v];
}

export function useTheme() {
  const [t, s] = useState(() => localStorage.getItem("gmg-t") || "light");
  useEffect(() => { document.documentElement.setAttribute("data-theme", t); localStorage.setItem("gmg-t", t) }, [t]);
  return [t, () => s(p => p === "dark" ? "light" : "dark")];
}

export function useScrollProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => { const h = () => { if (!ref.current) return; const r = ref.current.getBoundingClientRect(); const vh = window.innerHeight; setP(Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)))) }; addEventListener("scroll", h, { passive: true }); h(); return () => removeEventListener("scroll", h) }, []);
  return p;
}
