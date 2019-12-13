module.exports = {
    "env": {
        "browser": true,
        "e65": true,
        "node": true
    },
    "extends": ["airbnb", "plugin:prettier:recommended"],
    "plugins": ["react", "jsx-a11y", "prettier", "eslint-plugin-prettier", "prettier/prettier"],
    "parser": "babel-eslint",

    "rules": {
        "react/jsx-filename-extension": 0,
    },
}
