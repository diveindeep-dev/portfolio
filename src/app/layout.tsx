import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PROJECT',
  description: 'Projects of diveindeep',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
        <link rel="manifest" href="static/site.webmanifest" />
        <link rel="mask-icon" href="static/safari-pinned-tab.svg" color="#0080f5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
