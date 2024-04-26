import type { Metadata } from "next";
import Provider from "./Provider";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";


export const metadata: Metadata = {
  title: "Next13 study",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
