/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

export default {
    semi: false,
    singleQuote: false,
    trailingComma: "none",
    overrides: [
        {
            files: ["*.js", "*.ts"],
            options: {
                tabWidth: 4
            }
        }
    ]
}
