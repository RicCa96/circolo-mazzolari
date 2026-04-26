import type {MetadataRoute} from "next";
import {SITE_URL} from "@/utils/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const routes: Array<{path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]}> = [
        {path: "/", priority: 1.0, changeFrequency: "weekly"},
        {path: "/about", priority: 0.8, changeFrequency: "monthly"},
        {path: "/attivita", priority: 0.9, changeFrequency: "weekly"},
        {path: "/come-associarsi", priority: 0.8, changeFrequency: "yearly"},
        {path: "/donazioni", priority: 0.7, changeFrequency: "yearly"},
        {path: "/trasparenza", priority: 0.6, changeFrequency: "monthly"},
        {path: "/contatti", priority: 0.7, changeFrequency: "yearly"},
        {path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly"},
        {path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly"},
    ];

    return routes.map((r) => ({
        url: `${SITE_URL}${r.path}`,
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
    }));
}
