// app/page.js
export default function Home() {
  return (
    <section style={{ maxWidth: 900 }}>
      
      <p>This demo shows three rendering modes using the App Router:</p>

      <ul>
        <li>About — SSG (Static)</li>
        <li>Dashboard — SSR (Dynamic)</li>
        <li>News — ISR (Hybrid, revalidate=60s)</li>
      </ul>

      <p>
        Click the links in the header to open each page. Use DevTools → Network to inspect how each
        route fetches data.
      </p>
    </section>
  );
}
