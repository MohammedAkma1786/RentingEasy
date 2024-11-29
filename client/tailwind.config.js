/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E", // Deep black for primary elements
        secondary: "#E0E0E0", // Light grey for secondary elements
        "secondary-dark": "#333333", // Dark gray for accents
        accent: "#E0E0E0", // Light gray for highlights
        background: "#F9F9F9", // Very light gray for overall page background
        "cloud-white": "#FFFFFF", // Clean white for contrast
        "sky-gray": "#CCCCCC", // Medium gray for sections
        "sun-yellow": "#FFD700", // Warm yellow for occasional accents
        text: "#000000", // Solid black for text readability
        textsec: "white",
        muted: "#666666", // Medium gray for secondary text or subtle details
      },
      fontSize: {
        "14px": "14px", // Small captions or labels
        "16px": "16px", // Default body text
        "20px": "20px", // Slightly larger text for readability
        "24px": "24px", // Subheadings
        "36px": "36px", // Medium headings
        "48px": "48px", // Large headings
        "64px": "64px", // Hero section text
      },
      screens: {
        xs: "400px", // Extra small screens
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
        "2xl": "1536px", // High-resolution screens
      },
      backgroundImage: {
        "sky-gradient": "linear-gradient(180deg, #1E1E1E 0%, #F9F9F9 100%)", // Soft black-to-gray gradient
        "cloud-pattern": "url('/path-to-cloud-pattern.jpg')", // Optional cloud pattern
      },
      boxShadow: {
        "cloud-soft": "0px 4px 6px rgba(30, 30, 30, 0.2)", // Soft black shadow
        "sun-glow": "0px 4px 15px rgba(255, 215, 0, 0.4)", // Warm yellow glow for accents
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
