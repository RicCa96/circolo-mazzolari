import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Circolo ANSPI Don Primo Mazzolari | Vezzano sul Crostolo",
    description:
        "Iniziative sociali, educative, sportive e ricreative a Vezzano sul Crostolo: campeggi a Vaglie, Sagra della Madonna della Neve e molto altro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="it">
        <body className="min-h-screen bg-white text-neutral-900 antialiased font-semibold dark:bg-neutral-950 dark:text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
