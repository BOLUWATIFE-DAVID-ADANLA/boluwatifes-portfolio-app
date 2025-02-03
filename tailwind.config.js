/** @type {import('tailwindcss').Config} */
module.exports = {
   theme: {
     extend: {
       padding: {
         xs: "4px",
         sm: "8px",
         md: "16px",
         lg: "24px",
         xl: "32px",
         "2xl": "40px",
       },
       fontSize: {
         h1: ["40px", { lineHeight: "48px", fontWeight: "700" }], // H1: 40px, Bold
         h2: ["32px", { lineHeight: "40px", fontWeight: "600" }], // H2: 32px, SemiBold
         h3: ["28px", { lineHeight: "36px", fontWeight: "500" }], // H3: 28px, Medium
         h4: ["24px", { lineHeight: "32px", fontWeight: "500" }], // H4: 24px, Medium
         body: ["16px", { lineHeight: "24px", fontWeight: "400" }], // Body: 16px, Normal
       },
       fontWeight: {
         light: "300",
         normal: "400",
         medium: "500",
         semibold: "600",
         bold: "700",
         extrabold: "800",
       },
     },
   },
   plugins: [],
 };
 