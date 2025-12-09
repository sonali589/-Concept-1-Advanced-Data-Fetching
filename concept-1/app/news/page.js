export const revalidate = 60;

export default async function NewsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts = await res.json();

  const generatedAt = new Date().toISOString();

  return (
    <main style={{ padding: 20 }}>
      <h2>News (ISR — 60s Revalidate)</h2>
      <p><strong>Generated at:</strong> {generatedAt}</p>

      {posts.slice(0, 5).map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </main>
  );
}
