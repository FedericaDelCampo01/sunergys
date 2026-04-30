import "./globals.css";
import FloatingSimulatorButton from "@/components/common/floating-simulator-button";
import LayoutEffects from "@/components/common/layout-effects";

export const metadata = {
    title: "Sunergys | Soluciones de Energia Solar",
    description: "Soluciones solares personalizadas para hogares y empresas.",
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
            </body>
        </html>
    );
}