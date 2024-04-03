/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", './*.html',],

  theme: {
    extend: {},
  },
  plugins: [
    [require("flowbite/plugin")]
  ]
}

