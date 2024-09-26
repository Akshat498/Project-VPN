/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      bgcolor: {
        bgred: "#F53838",
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "25px",
        XXL: "30px",
        fourXL: "35px",
        fiveXL: "50px",
        sixXL:"18px",
      },
      fontWeight: {
        sm: "400",
        md: "500",
        lg: "700",
      }
    },
  },
  plugins: [],
}
