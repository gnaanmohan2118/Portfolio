import { useState, useEffect, useRef } from "react";
import { D } from "./data.js";
import { useVis } from "./hooks.js";

export function R({ children, d = 0, dir = "up", style = {} }) {
  const [r, v] = useVis();
  const t = { up: "translateY(32px)", left: "translateX(-32px)", right: "translateX(32px)" };
  return <div ref={r} style={{ opacity: v ? 1 : 0, transform: v ? "none" : t[dir], transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${d}s, transform .7s cubic-bezier(.16,1,.3,1) ${d}s`, ...style }}>{children}</div>;
}

export function Nav({ page, go, theme, toggle }) {
  const [sc, setSc] = useState(false);
  const [mob, setMob] = useState(false);
  useEffect(() => { const h = () => setSc(scrollY > 10); addEventListener("scroll", h); return () => removeEventListener("scroll", h) }, []);
  const ng = p => { go(p); setMob(false); scrollTo({ top: 0, behavior: "smooth" }) };
  return <>
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, height: 48, display: "flex", alignItems: "center", background: "var(--nav)", backdropFilter: "saturate(180%) blur(20px)", WebkitBackdropFilter: "saturate(180%) blur(20px)", borderBottom: sc ? "1px solid var(--rule)" : "1px solid transparent", transition: "all .3s" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
        <button onClick={() => ng("home")} style={{ fontFamily: "var(--fd)", fontWeight: 700, fontSize: 18, color: "var(--ink)", background: "none", border: "none", cursor: "pointer" }}>GMG</button>
        <div className="nd" style={{ display: "flex", gap: 2 }}>
          {[["home", "Home"], ["life", "Life of GMG"], ["thoughts", "My Thoughts"]].map(([k, l]) =>
            <button key={k} onClick={() => ng(k)} style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: page === k ? 500 : 400, color: page === k ? "var(--acc)" : "var(--ink2)", background: "none", border: "none", cursor: "pointer", padding: "5px 14px", borderRadius: 99, transition: "all .2s" }}>{l}</button>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {[{ h: D.li, c: "fab fa-linkedin-in" }, { h: D.gh, c: "fab fa-github" }, { h: D.tw, c: "fab fa-twitter" }].map(s =>
            <a key={s.c} href={s.h} target="_blank" rel="noopener noreferrer" className="nsi" style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink3)", fontSize: 12, textDecoration: "none", transition: "all .2s" }}><i className={s.c} /></a>
          )}
          <span style={{ width: 1, height: 14, background: "var(--rule)", margin: "0 4px" }} />
          <button onClick={toggle} style={{ width: 28, height: 28, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>{theme === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19"}</button>
          <button className="nb" onClick={() => setMob(!mob)} style={{ display: "none", width: 32, height: 32, border: "none", background: "none", cursor: "pointer", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
            <span style={{ display: "block", width: 16, height: 1.5, background: "var(--ink)", borderRadius: 1, transition: "all .3s", transform: mob ? "rotate(45deg) translate(3px,3px)" : "none" }} />
            <span style={{ display: "block", width: 16, height: 1.5, background: "var(--ink)", borderRadius: 1, transition: "all .3s", opacity: mob ? 0 : 1 }} />
            <span style={{ display: "block", width: 16, height: 1.5, background: "var(--ink)", borderRadius: 1, transition: "all .3s", transform: mob ? "rotate(-45deg) translate(3px,-3px)" : "none" }} />
          </button>
        </div>
      </div>
    </nav>
    {mob && <div style={{ position: "fixed", top: 48, left: 0, right: 0, bottom: 0, background: "var(--bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, zIndex: 999 }}>
      {[["home", "Home"], ["life", "Life of GMG"], ["thoughts", "My Thoughts"]].map(([k, l]) =>
        <button key={k} onClick={() => ng(k)} style={{ fontFamily: "var(--fb)", fontSize: 24, fontWeight: 500, color: page === k ? "var(--acc)" : "var(--ink)", background: "none", border: "none", cursor: "pointer", padding: "12px 24px" }}>{l}</button>
      )}
    </div>}
  </>;
}

export const Footer = () =>
  <footer style={{ padding: "48px 24px", textAlign: "center", borderTop: "1px solid var(--rule)", background: "var(--bg2)" }}>
    <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 14 }}>
      {[{ h: D.li, i: "fab fa-linkedin-in" }, { h: D.gh, i: "fab fa-github" }, { h: D.tw, i: "fab fa-twitter" }].map(s =>
        <a key={s.i} href={s.h} target="_blank" rel="noopener noreferrer" className="nsi" style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--card)", border: "1px solid var(--rule)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink2)", textDecoration: "none", fontSize: 16, transition: "all .3s" }}><i className={s.i} /></a>
      )}
    </div>
    <p style={{ fontSize: 13, color: "var(--ink3)" }}>{"\u00A9"} 2026 Gnana Ganesh M</p>
  </footer>;

export const Pill = ({ children, color }) =>
  <span style={{ display: "inline-block", fontFamily: "var(--fm)", fontSize: 11, fontWeight: 600, padding: "5px 14px", borderRadius: 99, background: color ? `${color}12` : "var(--acctint)", color: color || "var(--acc)", letterSpacing: .3, marginTop: 8 }}>{children}</span>;

export const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0, sx: 50, sy: 50 });
  const onM = e => { if (!ref.current) return; const r = ref.current.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; setT({ rx: (y - .5) * -14, ry: (x - .5) * 14, sx: x * 100, sy: y * 100 }) };
  const onTouch = e => { if (!ref.current || !e.touches[0]) return; const tc = e.touches[0]; const r = ref.current.getBoundingClientRect(); const x = (tc.clientX - r.left) / r.width, y = (tc.clientY - r.top) / r.height; setT({ rx: (y - .5) * -14, ry: (x - .5) * 14, sx: x * 100, sy: y * 100 }) };
  return <div ref={ref} onMouseMove={onM} onMouseLeave={() => setT({ rx: 0, ry: 0, sx: 50, sy: 50 })} onTouchMove={onTouch} onTouchEnd={() => setT({ rx: 0, ry: 0, sx: 50, sy: 50 })} style={{ perspective: 800 }}>
    <div style={{ transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`, transition: "transform .2s ease", background: "var(--card)", border: "1px solid var(--rule)", borderRadius: 24, padding: "32px 28px", position: "relative", overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${t.sx}% ${t.sy}%, rgba(255,255,255,.06), transparent 60%)`, pointerEvents: "none" }} />
      {children}
    </div>
  </div>;
};

export function SwipeDots({ count, active }) {
  return <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
    {Array.from({ length: count }).map((_, i) => <div key={i} style={{ width: active === i ? 24 : 8, height: 8, borderRadius: 4, background: active === i ? "var(--acc)" : "var(--rule)", transition: "all .3s cubic-bezier(.16,1,.3,1)" }} />)}
  </div>;
}

export function HSwipe({ children, cardWidth = 300, gap = 16, padLeft = 24 }) {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const count = Array.isArray(children) ? children.length : 0;
  useEffect(() => {
    const el = scrollRef.current; if (!el) return;
    const h = () => { const idx = Math.round(el.scrollLeft / (cardWidth + gap)); setActiveIdx(Math.min(idx, count - 1)) };
    el.addEventListener("scroll", h, { passive: true }); return () => el.removeEventListener("scroll", h);
  }, [cardWidth, gap, count]);
  return <div>
    <div ref={scrollRef} className="hideScroll" style={{ display: "flex", gap: gap, overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", paddingLeft: padLeft, paddingRight: 24, paddingBottom: 8 }}>
      {(Array.isArray(children) ? children : [children]).map((child, i) => <div key={i} style={{ flex: `0 0 ${cardWidth}px`, scrollSnapAlign: "start" }}>{child}</div>)}
    </div>
    <SwipeDots count={count} active={activeIdx} />
  </div>;
}

export const inp = { width: "100%", padding: "14px 18px", fontFamily: "var(--fb)", fontSize: 15, border: "1px solid var(--rule)", borderRadius: 14, background: "var(--card)", color: "var(--ink)", outline: "none", transition: "all .3s" };
