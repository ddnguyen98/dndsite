module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react"],
    "plugins": ["react", "jsx-a11y", "prettier", "eslint-plugin-prettier"],
    "parser": "babel-eslint",

    "rules": {
        "react/jsx-filename-extension": 0,
        "react/prefer-stateless-function": 0,
    },
}
