// ============================================================
//  Thoughts.jsx  -  My Thoughts / blog page
//  Edit D.blogs in data.js to add new posts:
//  { tag: "Category", title: "Title", excerpt: "Short desc.", color: "#hex" }
// ============================================================
import { D } from "./data.js";
import { R, Pill, TiltCard, Footer } from "./components.jsx";

export default function Thoughts() {
  return <>
    <section style={{ minHeight: "85vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 24px 80px" }}>
      <R><p style={{ fontFamily: "var(--fm)", fontSize: 14, color: "var(--acc)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>Open Thinking</p></R>
      <R d={.1}><h1 style={{ fontFamily: "var(--fd)", fontSize: "clamp(56px,11vw,100px)", fontWeight: 900, lineHeight: .95, letterSpacing: -4 }}>My<br /><span style={{ background: "linear-gradient(135deg,#5856d6,var(--acc),#5ac8fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Thoughts.</span></h1></R>
    </section>

    <section style={{ padding: "60px 24px 120px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="g3r">
          {D.blogs.map((b, i) =>
            <R key={b.title} d={i * .08}><TiltCard>
              <Pill color={b.color}>{b.tag}</Pill>
              <h3 style={{ fontFamily: "var(--fd)", fontSize: 22, fontWeight: 700, letterSpacing: -.3, marginTop: 16, marginBottom: 10, lineHeight: 1.25 }}>{b.title}</h3>
              <p style={{ fontSize: 15, color: "var(--ink2)", lineHeight: 1.6, flex: 1 }}>{b.excerpt}</p>
              <p style={{ fontSize: 12, color: "var(--ink3)", marginTop: 20 }}>Coming Soon</p>
            </TiltCard></R>
          )}
        </div>
      </div>
    </section>
    <Footer />
  </>;
}
