"use client";

import {useEffect, useState} from "react";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";

export default function ConsentAwareAnalytics() {
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        const read = () => setHasConsent(localStorage.getItem("cookie-consent") === "true");
        read();
        const onUpdate = () => read();
        window.addEventListener("cookie-consent-updated", onUpdate);
        return () => window.removeEventListener("cookie-consent-updated", onUpdate);
    }, []);

    if (!hasConsent) return null;

    return (
        <>
            <SpeedInsights/>
            <Analytics/>
        </>
    );
}
