"use client"
import { useEffect } from 'react';
import "./globals.css";
import FloatingSimulatorButton from "@/components/common/floating-simulator-button";

export default function RootLayout({ children }) {
    useEffect(() => {
        try {
            require('bootstrap/dist/js/bootstrap.min.js');
        } catch (_) {}
        document.body.classList.add('dark-mode');
    }, []);

    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </head>
            <body>
                {children}
                <FloatingSimulatorButton />
            </body>
        </html>
    );
}