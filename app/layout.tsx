import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { aboutMeData, pages, contactMeLinks } from "./data/data";

import "./global.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header
          name={aboutMeData.name}
          pages={pages}
          contactMeLinks={contactMeLinks}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
