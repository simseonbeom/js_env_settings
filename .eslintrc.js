// node.js
// commonjs module load export


// import = require()
// export = module.exports / exports.모듈이름

module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": 'warn'
    },
    "root":true,
}
