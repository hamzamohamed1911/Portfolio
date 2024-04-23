import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./_components/TransitionProvider.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hamza muhamed Portfolio ",
  description: "showing my projects here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TransitionProvider>
         {children}
       </TransitionProvider>
        </body>
    </html>
  );
}
