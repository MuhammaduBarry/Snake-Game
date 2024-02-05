/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            gridTemplateRows: {
                // Simple 16 row grid
                '16-row': 'repeat(16, 1fr)'
            },
            gridTemplateColumns: {
                '16-col': 'repeat(16, 1fr)'
            },
            width: {
                '600-w': '600px'
            },
            height: {
                '600-h': '600px'
            },
            colors: {
                'snake-green': '#60A534',
            },
        },
    },
    plugins: [],
}

