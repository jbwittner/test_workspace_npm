module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "standard",
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
      ],
      "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "project": "./tsconfig.base.json",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    },
    "ignorePatterns": ["dist", "node_modules", "examples", "scripts", ".eslintrc.js"]
}
