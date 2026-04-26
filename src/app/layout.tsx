import "./globals.css";
import type {Metadata, Viewport} from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/next";
import {
    KEYWORDS,
    ORG_ADDRESS,
    ORG_EMAIL,
    ORG_LEGAL_NAME,
    ORG_SOCIAL,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_URL,
} from "@/utils/seo";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} | APS ETS — Vezzano sul Crostolo`,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: KEYWORDS,
    authors: [{name: SITE_NAME}],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "non-profit",
    formatDetection: {email: false, address: false, telephone: false},
    alternates: {canonical: "/"},
    openGraph: {
        type: "website",
        locale: "it_IT",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: `${SITE_NAME} — APS ETS Vezzano sul Crostolo`,
        description: SITE_DESCRIPTION,
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/logo.svg",
    },
};

export const viewport: Viewport = {
    themeColor: "#1e4380",
    width: "device-width",
    initialScale: 1,
};

const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "SportsActivityLocation", "NGO"],
    name: ORG_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/opengraph-image`,
    email: ORG_EMAIL,
    description: SITE_DESCRIPTION,
    address: {
        "@type": "PostalAddress",
        streetAddress: ORG_ADDRESS.streetAddress,
        postalCode: ORG_ADDRESS.postalCode,
        addressLocality: ORG_ADDRESS.addressLocality,
        addressRegion: ORG_ADDRESS.addressRegion,
        addressCountry: ORG_ADDRESS.addressCountry,
    },
    areaServed: {
        "@type": "Place",
        name: "Vezzano sul Crostolo, Reggio Emilia, Italia",
    },
    sameAs: ORG_SOCIAL,
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "it-IT",
    publisher: {"@type": "Organization", name: ORG_LEGAL_NAME},
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
        <Analytics/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(orgJsonLd)}}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}}
        />
        </body>
        </html>
    );
}
