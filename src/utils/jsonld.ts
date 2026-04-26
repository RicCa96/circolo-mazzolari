import {ORG_ADDRESS, ORG_EMAIL, ORG_LEGAL_NAME, ORG_SOCIAL, SITE_NAME, SITE_URL} from "./seo";

export function breadcrumbsJsonLd(trail: Array<{name: string; path: string}>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: SITE_NAME,
                item: SITE_URL,
            },
            ...trail.map((it, i) => ({
                "@type": "ListItem",
                position: i + 2,
                name: it.name,
                item: `${SITE_URL}${it.path}`,
            })),
        ],
    };
}

export function contactPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: `Contatti — ${SITE_NAME}`,
        url: `${SITE_URL}/contatti`,
        inLanguage: "it-IT",
        mainEntity: {
            "@type": "Organization",
            name: ORG_LEGAL_NAME,
            email: ORG_EMAIL,
            url: SITE_URL,
            address: {
                "@type": "PostalAddress",
                streetAddress: ORG_ADDRESS.streetAddress,
                postalCode: ORG_ADDRESS.postalCode,
                addressLocality: ORG_ADDRESS.addressLocality,
                addressRegion: ORG_ADDRESS.addressRegion,
                addressCountry: ORG_ADDRESS.addressCountry,
            },
            sameAs: ORG_SOCIAL,
        },
    };
}

export function aboutPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: `Chi siamo — ${SITE_NAME}`,
        url: `${SITE_URL}/about`,
        inLanguage: "it-IT",
        about: {
            "@type": "Organization",
            name: ORG_LEGAL_NAME,
            url: SITE_URL,
        },
    };
}
