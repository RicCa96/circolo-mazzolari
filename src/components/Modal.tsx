'use client';

import { ReactNode, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    showFooter?: boolean;
}

export default function Modal({ isOpen, onClose, title, children, showFooter = true }: ModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div 
                className="bg-white rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-6 border-b border-neutral-100">
                    <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-neutral-100 transition-colors text-neutral-500"
                        aria-label="Chiudi"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div className="p-6 overflow-y-auto text-neutral-600 leading-relaxed">
                    {children}
                </div>
                {showFooter && (
                    <div className="p-6 border-t border-neutral-100 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
                        >
                            Chiudi
                        </button>
                    </div>
                )}
            </div>
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
}
