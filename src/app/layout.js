import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
// import FireFliesBackground from "@/components/FireFliesBackground";
// import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Hannah's portfolio 2024",
    default: "Hannah's portfolio 2024",
  },
  description: "Hannah's portfolio 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        {/* <FireFliesBackground />
        <Sound /> */}
        <div id="my-modal" />
      </body>
    </html>
  );
}
