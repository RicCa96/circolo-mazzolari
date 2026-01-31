"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "./Container";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
            <Container className="!px-0">
                <div className="bg-white border border-primary/20 shadow-2xl rounded-3xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-sm text-neutral-600 leading-relaxed">
                            <p>
                                Utilizziamo i cookie tecnici per migliorare la tua esperienza sul nostro sito.
                                Proseguendo la navigazione o cliccando su &quot;Accetta&quot;, acconsenti all&apos;uso dei cookie.
                                Per maggiori informazioni, consulta la nostra{" "}
                                <Link href="/privacy-policy" className="text-primary font-bold hover:underline">
                                    Privacy Policy
                                </Link>{" "}
                                e la nostra{" "}
                                <Link href="/cookie-policy" className="text-primary font-bold hover:underline">
                                    Cookie Policy
                                </Link>.
                            </p>
                        </div>
                        <div className="flex shrink-0 gap-3 w-full md:w-auto">
                            <button
                                onClick={acceptCookies}
                                className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 cursor-pointer"
                            >
                                Accetta
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
