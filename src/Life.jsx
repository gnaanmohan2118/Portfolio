// ============================================================
//  Life.jsx  -  Life of GMG page
//  Edit D.passions in data.js to add/change passions
// ============================================================
import { D } from "./data.js";
import { R, Pill, TiltCard, Footer } from "./components.jsx";

export default function Life() {
  return <>
    <section style={{ minHeight: "85vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 24px 80px" }}>
      <R><p style={{ fontFamily: "var(--fm)", fontSize: 14, color: "var(--acc)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Beyond the Code</p></R>
      <R d={.1}><h1 style={{ fontFamily: "var(--fd)", fontSize: "clamp(56px,11vw,100px)", fontWeight: 900, lineHeight: .95, letterSpacing: -4 }}>Life of<br /><span style={{ background: "linear-gradient(135deg,var(--acc),#34aadc,#5ac8fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>GMG.</span></h1></R>
      <R d={.2}><p style={{ fontSize: "clamp(18px,2.2vw,22px)", fontWeight: 300, color: "var(--ink2)", maxWidth: 500, lineHeight: 1.5, marginTop: 24 }}>A rider, a rider, a rider, and somewhere along my life and journey I grew into a thinker, an explorer, still grounded in people and the moments we share.</p></R>
    </section>

    <section style={{ padding: "100px 24px", background: "linear-gradient(180deg,var(--bg2),var(--bg))" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <R><p style={{ fontFamily: "var(--fd)", fontSize: "clamp(24px,4vw,40px)", fontWeight: 300, lineHeight: 1.35, letterSpacing: -.5, position: "relative" }}>
          <span style={{ fontSize: 80, fontWeight: 900, color: "var(--acc)", opacity: .08, position: "absolute", top: -24, left: "50%", transform: "translateX(-50%)", fontFamily: "var(--fd)" }}>"</span>
          The best code I have ever written runs on two wheels, and the best architecture I have designed was the route to the next sunrise.
        </p><p style={{ fontSize: 15, color: "var(--ink3)", marginTop: 24 }}>/ Gnana Ganesh</p></R>
      </div>
    </section>

    <section style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <R><div style={{ textAlign: "center", marginBottom: 60 }}><p style={{ fontFamily: "var(--fm)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "var(--acc)", marginBottom: 12 }}>My Passions</p><h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(36px,5vw,56px)", fontWeight: 800, letterSpacing: -2 }}>What fuels me.</h2></div></R>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="g2r">
          {D.passions.map((p, i) =>
            <R key={p.title} d={i * .07}><TiltCard>
              <div style={{ fontSize: 48, marginBottom: 12 }}>{p.emoji}</div>
              <h3 style={{ fontFamily: "var(--fd)", fontSize: 22, fontWeight: 700, letterSpacing: -.3, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 15, color: "var(--ink2)", lineHeight: 1.6 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>{p.tags.map(t => <Pill key={t} color={p.color}>{t}</Pill>)}</div>
            </TiltCard></R>
          )}
        </div>
      </div>
    </section>
    <Footer />
  </>;
}
