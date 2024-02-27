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
                '200': '200px'
            },
            height: {
                '200': '200px'
            },
            colors: {
                'snake-green': '#60A534',
            },
        },
    },
    plugins: [],
}

