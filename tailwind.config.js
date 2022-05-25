module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
