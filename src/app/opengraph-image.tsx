import { ImageResponse } from "next/og";

export const alt = "Sandro Ferreira — Consultoria, Inteligência Artificial, Dados e Automação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#05090d", color: "#f4f8fb", fontFamily: "sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 78% 20%, rgba(20,134,184,.22), transparent 36%)" }} />
      <div style={{ display: "flex", color: "#55bde8", fontSize: 24, letterSpacing: 5, marginBottom: 28 }}>PORTFÓLIO PROFISSIONAL</div>
      <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -3, marginBottom: 24 }}>Sandro Ferreira</div>
      <div style={{ display: "flex", fontSize: 31, color: "#aab8c4" }}>Consultoria • Inteligência Artificial • Dados • Automação</div>
      <div style={{ display: "flex", width: 110, height: 5, background: "#1486b8", marginTop: 48 }} />
    </div>, size,
  );
}
