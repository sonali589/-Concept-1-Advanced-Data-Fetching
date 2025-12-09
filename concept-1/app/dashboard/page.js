// app/dashboard/page.js
export const dynamic = "force-dynamic";

const FALLBACK = {
  disclaimer: "Fallback data — API unreachable",
  items: [{ id: 0, title: "Fallback item", body: "No real data available" }],
  time: { updatedISO: new Date().toISOString() },
};

export default async function DashboardPage() {
  let data = FALLBACK;

  try {
    // Reliable public demo API
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Status ${res.status}`);

    const posts = await res.json();
    data = { items: posts, time: { updatedISO: new Date().toISOString() } };
  } catch (err) {
    console.error("Dashboard fetch failed:", err);
    // keep fallback so the page still renders
  }

  const serverTime = new Date().toISOString();

  return (
    <main style={{ padding: 20 }}>
      <h2>Dashboard (SSR)</h2>
      <p><strong>Server render time:</strong> <code>{serverTime}</code></p>

      <section style={{ marginTop: 12 }}>
        <h3>Sample Posts</h3>
        {data?.items?.length ? (
          <ul>
            {data.items.map((p) => (
              <li key={p.id} style={{ marginBottom: 8 }}>
                <strong>{p.title}</strong>
                <p style={{ margin: 0 }}>{p.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available.</p>
        )}
        <div style={{ marginTop: 8, color: "#666" }}>
          Source time: <code>{data.time?.updatedISO ?? "-"}</code>
        </div>
      </section>
    </main>
  );
}
