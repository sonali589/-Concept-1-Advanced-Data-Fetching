export const revalidate = false;

export default function AboutPage() {
  const builtAt = new Date().toISOString();

  return (
    <main style={{ padding: 20 }}>
      <h2>About (SSG)</h2>
      <p>This page was generated at build time.</p>
      <p><strong>Built at:</strong> {builtAt}</p>
    </main>
  );
}
