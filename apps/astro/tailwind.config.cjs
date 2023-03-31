/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  // @ts-ignore
  presets: [require("@acme/tailwind-config")],
};

module.exports = config;
