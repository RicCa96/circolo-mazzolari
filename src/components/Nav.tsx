"use client";

import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
    {href: "/", label: "Home"},
    {href: "/about", label: "Chi siamo"},
    {href: "/attivita", label: "Attività"},
    {href: "/donazioni", label: "5x1000"},
    {href: "/trasparenza", label: "Trasparenza"},
    {href: "/contatti", label: "Contatti"},
];

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        if (!isOpen) return;
        const handleClick = () => setIsOpen(false);
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-50 bg-blue-50 backdrop-blur">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-bold tracking-tight text-primary flex items-center shrink-0">
                        <Image src="/logo.svg" alt="Logo ANSPI" width={100} height={35} className="mr-2" priority={true}/>
                        <div className="hidden sm:block">
                            <p className="text-lg leading-tight">Circolo Don Primo Mazzolari</p>
                            <p className="text-secondary/80 text-sm leading-tight">Associazione Sportiva Dilettantistica APS ETS</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="rounded-full px-3 py-2 text-xs text-neutral-800 font-bold hover:bg-primary/10 transition-colors whitespace-nowrap"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Navigation (Speeddial-like) */}
                    <div className="lg:hidden relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2.5 rounded-full transition-all duration-300 flex items-center justify-center bg-transparent text-primary ${
                                isOpen ? 'rotate-90' : ''
                            }`}
                            aria-label="Menu"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            )}
                        </button>

                        {/* Popover Menu */}
                        <div className={`absolute right-0 mt-4 w-48 bg-white rounded-2xl shadow-2xl border border-blue-50 py-2 flex flex-col gap-1 transition-all duration-300 origin-top-right ${
                            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                        }`}>
                            {links.map((l, i) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 text-sm text-neutral-700 font-bold hover:bg-primary/10 hover:text-primary transition-all flex items-center ${
                                        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${isOpen ? i * 40 : 0}ms` }}
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
