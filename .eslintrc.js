module.exports = {
    extends: [
        "airbnb",
        "prettier",
        "prettier/react",
        "plugin:jsx-a11y/strict",
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: ["import", "prettier", "jsx-a11y", "@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: __dirname,
        exclude: ["node_modules"]
    },
    env: {
        browser: true
    },
    rules: {
        "import/extensions": [0],
        "import/no-extraneous-dependencies": [0],
        "import/no-unresolved": [0],
        "import/prefer-default-export": [0],
        indent: [
            0,
            4,
            {
                SwitchCase: 1
            }
        ],
        "no-plusplus": [0],
        "no-shadow": [0],
        "prettier/prettier": [1],
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function"
            }
        ],
        "react/jsx-filename-extension": [0],
        "react/jsx-props-no-spreading": [0],
        "react/no-array-index-key": [0],
        "react/require-default-props": [0],
        "@typescript-eslint/no-non-null-assertion": "off"
    }
};
