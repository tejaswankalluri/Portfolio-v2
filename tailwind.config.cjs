/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                NotoSans: ["Noto Sans", "sans-serif"],
                BebasNeue: ["Bebas Neue", "cursive"],
            },
        },
    },
    plugins: [],
};
