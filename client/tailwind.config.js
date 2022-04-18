module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            golden: "#dcca87",
            black: "#0c0c0c",
            white: "#fff",
            glass: "rgba(230, 228, 228, 0.25)",
            grey: "#383838",
        },
        fontFamily: {
            lato: ["Lato", "sans-serif"],
            lobster: ["Lobster", "cursive"],
            poppins: ["Poppins", "sans-serif"],
            roboto: ["Roboto", "sans-serif"],
        },
        minHeight: {
            full: "calc(100vh - 70px)",
        },
        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            boxShadow: {
                shadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            },
        },
    },
    plugins: [],
};
