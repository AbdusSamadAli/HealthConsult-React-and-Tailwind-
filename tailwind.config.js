// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line specifies where Tailwind should look for CSS classes
  ],
  theme: {
    extend: {}, // You can extend the default Tailwind theme here
  },
  plugins: [], // You can add Tailwind CSS plugins here if needed
}

