import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error(
    "Missing Clerk Publishable Key. Please add VITE_CLERK_PUBLISHABLE_KEY to your environment variables.",
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </ClerkProvider>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#ef4444", marginBottom: "16px" }}>
          Configuration Error
        </h1>
        <p style={{ color: "#6b7280", maxWidth: "500px" }}>
          Missing Clerk Publishable Key. Please add{" "}
          <code
            style={{
              background: "#f3f4f6",
              padding: "2px 6px",
              borderRadius: "4px",
              color: "#1f2937",
            }}
          >
            VITE_CLERK_PUBLISHABLE_KEY
          </code>{" "}
          to your environment variables.
        </p>
      </div>
    )}
  </StrictMode>,
);
