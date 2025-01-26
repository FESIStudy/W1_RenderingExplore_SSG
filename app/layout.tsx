import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/csr">CSR</Link>
            </li>
            <li>
              <Link href="/ssg">SSG</Link>
            </li>
            <li>
              <Link href="/ssr">SSR</Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
