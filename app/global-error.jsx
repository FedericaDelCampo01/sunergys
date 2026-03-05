"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="es">
      <body style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
        background: "#1a1a1a",
        color: "#fff",
      }}>
        <h2 style={{ marginBottom: "1rem" }}>Error inesperado</h2>
        <p style={{ marginBottom: "1.5rem", opacity: 0.8 }}>
          Recargá la página o intentá más tarde.
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: "10px 24px",
            background: "#F95E19",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Intentar de nuevo
        </button>
      </body>
    </html>
  );
}
