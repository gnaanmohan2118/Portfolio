// ============================================================
//  App.jsx  -  Main shell: theme, loader, styles, page routing
//  You rarely need to edit this file.
// ============================================================
import { useState, useEffect } from "react";
import { useTheme } from "./hooks.js";
import { Nav } from "./components.jsx";
import Home from "./Home.jsx";
import Life from "./Life.jsx";
import Thoughts from "./Thoughts.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [theme, toggle] = useTheme();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 2200) }, []);

  return <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh", transition: "background .4s,color .4s" }}>
    <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap');
:root{--bg:#fbfbfd;--bg2:#f5f5f7;--card:#fff;--nav:rgba(251,251,253,.72);--ink:#1d1d1f;--ink2:#6e6e73;--ink3:#86868b;--acc:#0071e3;--acctint:rgba(0,113,227,.07);--rule:rgba(0,0,0,.09);--fd:'Outfit',-apple-system,sans-serif;--fb:'DM Sans',-apple-system,sans-serif;--fm:'JetBrains Mono',monospace}
[data-theme="dark"]{--bg:#000;--bg2:#111;--card:#1c1c1e;--nav:rgba(0,0,0,.72);--ink:#f5f5f7;--ink2:#a1a1a6;--ink3:#6e6e73;--acc:#2997ff;--acctint:rgba(41,151,255,.1);--rule:rgba(255,255,255,.08)}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}body{font-family:var(--fb);overflow-x:hidden}
::selection{background:var(--acc);color:#fff}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-thumb{background:var(--rule);border-radius:3px}
.hideScroll::-webkit-scrollbar{display:none}.hideScroll{scrollbar-width:none}
input:focus,textarea:focus{border-color:var(--acc)!important;box-shadow:0 0 0 3px var(--acctint)!important;transform:translateY(-1px)}
.nsi:hover{color:var(--acc)!important;background:var(--acctint)}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes spinSlow{to{transform:rotate(360deg)}}
@keyframes floatBlob{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-20px)}}
@keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes fadeSlideIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes letterPop{0%{opacity:0;transform:translateY(100%) rotate(14deg) scale(0.5)}60%{opacity:1;transform:translateY(-8%) rotate(-2deg) scale(1.05)}100%{opacity:1;transform:translateY(0) rotate(0) scale(1)}}
@keyframes loaderRing{0%{transform:rotate(0);opacity:.3}50%{opacity:1}100%{transform:rotate(360deg);opacity:.3}}
@keyframes loaderScale{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.15);opacity:1}}
@media(max-width:868px){.nd{display:none!important}.nb{display:flex!important}.sg{grid-template-columns:1fr!important}.g3r{grid-template-columns:1fr!important}.g2r{grid-template-columns:1fr!important}.skg{grid-template-columns:1fr!important}}
`}</style>

    {!loaded && <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "var(--bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", width: 60, height: 60, marginBottom: 28 }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "3px solid var(--acc)", borderTopColor: "transparent", animation: "loaderRing 1.2s linear infinite" }} />
        <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: "3px solid #5ac8fa", borderBottomColor: "transparent", animation: "loaderRing 1.8s linear infinite reverse" }} />
        <div style={{ position: "absolute", inset: 16, borderRadius: "50%", background: "var(--acc)", opacity: .15, animation: "loaderScale 1.5s ease infinite" }} />
      </div>
      <p style={{ fontFamily: "var(--fd)", fontSize: 18, fontWeight: 400, color: "var(--ink3)" }}>just a sec!</p>
      <p style={{ fontFamily: "var(--fd)", fontSize: 32, fontWeight: 800, letterSpacing: -1.5, marginTop: 6 }}><span style={{ color: "var(--ink)" }}>GMG</span> <span style={{ background: "linear-gradient(135deg,var(--acc),#34aadc,#5ac8fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Cooking 4 you...</span></p>
    </div>}

    <Nav page={page} go={setPage} theme={theme} toggle={toggle} />
    {loaded && page === "home" && <Home key="h" go={setPage} />}
    {loaded && page === "life" && <Life key="l" />}
    {loaded && page === "thoughts" && <Thoughts key="t" />}
  </div>;
}
