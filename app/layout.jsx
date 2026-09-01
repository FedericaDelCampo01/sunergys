import "./globals.css";
import FloatingSimulatorButton from "@/components/common/floating-simulator-button";
import LayoutEffects from "@/components/common/layout-effects";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
    title: "Sunergys | Soluciones de Energia Solar",
    description: "Soluciones solares personalizadas para hogares y empresas.",
    verification: {
        google: "lu254ZmGY_wdV3K_Q-uPTJPwh28uS8Vj4JFEi9iU1Q4",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </head>
            <body>
                <LayoutEffects />
                {children}
                <FloatingSimulatorButton />
                <Analytics />
            </body>
        </html>
    );
}