import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arindam Tripathi | Systems Engineer",
  description: "A systems-minded engineer who blends AI, design, and engineering to build emotionally engaging + technically solid products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
