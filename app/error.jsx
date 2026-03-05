"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{
      minHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      textAlign: "center",
      fontFamily: "system-ui, sans-serif",
    }}>
      <h2 style={{ marginBottom: "1rem", color: "#333" }}>Algo salió mal</h2>
      <p style={{ marginBottom: "1.5rem", color: "#666" }}>
        Podés intentar de nuevo.
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
    </div>
  );
}
