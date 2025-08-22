import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Product App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
