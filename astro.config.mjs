import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import addClasses from "rehype-add-classes";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    integrations: [
        mdx({
            extendPlugins: false,
        }),
        sitemap(),
        tailwind({
            config: { applyBaseStyles: false },
        }),
    ],
    markdown: {
        extendDefaultPlugins: true,
        rehypePlugins: [
            [
                addClasses,
                {
                    h1: "text-4xl font-bold mt-5",
                    h2: "text-2xl font-bold mt-3",
                    h3: "text-xl font-bold",
                    h4: "text-lg font-bold",
                    h5: "font-bold",
                    h6: "font-bold",
                    p: "text-lg md:text-xl mt-3",
                    code: "text-red-600 bg-red-100 p-1 rounded-md",
                },
            ],
        ],
    },
});
