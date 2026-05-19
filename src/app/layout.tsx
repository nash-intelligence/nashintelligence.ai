import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nash Intelligence",
  description: "Nash Intelligence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
