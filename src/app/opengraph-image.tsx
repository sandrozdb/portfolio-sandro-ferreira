import { ImageResponse } from "next/og";

export const alt = "Sandro Ferreira — Consultoria, Inteligência Artificial, Dados e Automação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#07090c", color: "#f4efe8", fontFamily: "sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 78% 20%, rgba(185,120,37,.24), transparent 36%)" }} />
      <div style={{ display: "flex", color: "#d6a15a", fontSize: 24, letterSpacing: 5, marginBottom: 28 }}>PORTFÓLIO PROFISSIONAL</div>
      <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -3, marginBottom: 24 }}>Sandro Ferreira</div>
      <div style={{ display: "flex", fontSize: 31, color: "#b8afa4" }}>Consultoria • Inteligência Artificial • Dados • Automação</div>
      <div style={{ display: "flex", width: 110, height: 5, background: "#b97825", marginTop: 48 }} />
    </div>, size,
  );
}
