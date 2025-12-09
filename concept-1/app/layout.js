// app/layout.js
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        <header style={{ marginBottom: 20 }}>
          <h1 style={{ margin: 0 }}>Next Rendering Modes Demo</h1>
          <nav style={{ marginTop: 8 }}>
            <Link href="/about" style={{ marginRight: 12 }}>About (SSG)</Link>
            <Link href="/dashboard" style={{ marginRight: 12 }}>Dashboard (SSR)</Link>
            <Link href="/news">News (ISR)</Link>
          </nav>
          <hr style={{ marginTop: 16 }} />
        </header>

        <main>{children}</main>

        <footer style={{ marginTop: 48, color: '#555' }}>
          <hr />
          <small>Tip: open DevTools → Network to observe SSG/SSR/ISR behavior.</small>
        </footer>
      </body>
    </html>
  );
}
