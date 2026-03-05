"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + "Sunergys - Solar & Renewable Energy";
  }, []);
};

export default SEO;