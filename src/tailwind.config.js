module.exports = {
  content: [
    "./index.html", // pastikan konten disesuaikan dengan jalur file yang relevan
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px", // Menambahkan padding ke container
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
      },
      screens: {
        xs: "30rem", // 480px
        "2xl": "100rem", // 1600px
        "3xl": "120rem", // 1920px
      },
    },
  },
  plugins: [],
};
