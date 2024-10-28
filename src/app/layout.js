import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    template: "Hannah Gomez Kim",
    default: "Hannah Gomez Kim",
  },
  description: "Hannah Gomez Kim",
  openGraph: {
    title: "Hannah Gomez Kim",
    description: "portfolio for 2024",
    images: [
      {
        url: "preview-image.png",
        width: 1200,
        height: 630,
        alt: "Hannah's Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          poppins.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
