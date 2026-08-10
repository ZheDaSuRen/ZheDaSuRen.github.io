(() => {
  const renderDiagrams = async () => {
    if (typeof mermaid === "undefined") return;

    const dark = document.body.getAttribute("data-md-color-scheme") === "slate";
    mermaid.initialize({
      startOnLoad: false,
      theme: dark ? "dark" : "neutral",
      securityLevel: "strict",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    });

    try {
      await mermaid.run({ querySelector: ".mermaid" });
    } catch (error) {
      console.error("Mermaid render failed:", error?.message || error);
    }
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => renderDiagrams());
  } else {
    window.addEventListener("DOMContentLoaded", renderDiagrams);
  }
})();
