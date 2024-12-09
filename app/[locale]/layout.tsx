import type {Metadata} from "next";
import {Ubuntu_Mono} from "next/font/google";
import "./globals.css";

const ubuntumono = Ubuntu_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-ubuntu-mono",
});

export const metadata: Metadata = {
    title: "EUROSOC",
    description: "Twoje cyberbezpieczeństwo oparte na szkoleniac",
    icons: {
        icon: "/assets/images/logo.svg",
    },
};


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="pl">
        <body className={ubuntumono.variable}>{children}</body>
        </html>
    );
}