"use client";

import { useEffect } from "react";

export default function LayoutEffects() {
    useEffect(() => {
        try {
            require("bootstrap/dist/js/bootstrap.min.js");
        } catch (_) {}

        document.body.classList.add("dark-mode");
    }, []);

    return null;
}
