import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import {SpeedInsights} from '@vercel/speed-insights/next';

export const metadata = {
    title: "Circolo ANSPI Don Primo Mazzolari | Associazione Sportiva Dilettantistica APS ETS",
    description:
        "Iniziative sociali, educative, sportive e ricreative a Vezzano sul Crostolo: campeggi a Vaglie, Sagra della Madonna della Neve e molto altro.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="it">
        <body className="min-h-screen bg-white text-neutral-800 antialiased">
        <Nav/>
        <main>{children}</main>
        <Footer/>
        <CookieBanner/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
