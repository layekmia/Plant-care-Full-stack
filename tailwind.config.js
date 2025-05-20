import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
 content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
   ".flowbite-react\\class-list.json"
 ],
  theme: {
    extend: {
       colors: {
        // Light Mode Colors
        primary: "#4CAF50",
        accent: "#81C784",
        background: "#F9F9F9",
        card: "#FFFFFF",
        heading: "#2E7D32",
        body: "#333333",
        borderLight: "#E0E0E0",

        // Dark Mode Colors
        dark: {
          primary: "#66BB6A",
          accent: "#A5D6A7",
          background: "#121212",
          card: "#1E1E1E",
          heading: "#C8E6C9",
          body: "#E0E0E0",
          border: "#333333",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [flowbiteReact],
}