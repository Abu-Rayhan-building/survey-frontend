console.log("config runed")

module.exports = {
    syntax: "postcss-scss",
    plugins: [
        require("postcss-import"),
        require('postcss-flexbugs-fixes'),
        require('tailwindcss'),
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: 'no-2009',
            },
            features: {
                'nesting-rules': true
            },
            stage: 3,
        }),
    ]
}
