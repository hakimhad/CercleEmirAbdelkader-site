import typography from '@tailwindcss/typography';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lap: "1000px",
      },
    },
  },
  plugins: [typography],
};

