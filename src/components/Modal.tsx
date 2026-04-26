'use client';

import {ReactNode, useEffect, useId, useRef} from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    showFooter?: boolean;
}

export default function Modal({isOpen, onClose, title, children, showFooter = true}: ModalProps) {
    const titleId = useId();
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previouslyFocused = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== 'Tab' || !dialogRef.current) return;
            const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
            );
            if (focusables.length === 0) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        if (isOpen) {
            previouslyFocused.current = document.activeElement as HTMLElement;
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
            window.addEventListener('keydown', handleTab);
            queueMicrotask(() => closeButtonRef.current?.focus());
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('keydown', handleTab);
            if (isOpen) previouslyFocused.current?.focus?.();
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            role="presentation"
            onClick={onClose}
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="bg-white rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-6 border-b border-neutral-100">
                    <h3 id={titleId} className="text-xl font-bold text-neutral-900">{title}</h3>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-500"
                        aria-label="Chiudi finestra di dialogo"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             aria-hidden="true" focusable="false">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="p-6 overflow-y-auto text-neutral-600 leading-relaxed">
                    {children}
                </div>
                {showFooter && (
                    <div className="p-6 border-t border-neutral-100 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
                        >
                            Chiudi
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
