/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}", "./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'text': '#fbfcfe',
                'background': '#0b0d1e',
                'primary': '#4e3ab6',
                'secondary': '#180a1f',
                'accent': '#903bba',
            },

        },
    },
    plugins: [],
}
