import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { aboutMeData, pages, contactMeLinks } from "./data/data";

import "./global.css";

export const metadata = {
  title: "aitanacodes, web developer",
  description: "aitanacodes, web developer",
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
        <main className="sm:mb-32 mb-16">{children}</main>

        <Footer contactMeLinks={contactMeLinks} />
      </body>
    </html>
  );
}
