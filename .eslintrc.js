module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
    plugins: ['prettier', 'vue'],
    rules: {
        'prettier/prettier': 'error',
        'no-console': process.env.NODE_ENV === 'development' ? 0 : 2,
        'no-debugger': process.env.NODE_ENV === 'development' ? 0 : 2,
        'no-extend-native': 'off',
        'no-useless-escape': 'off',
        'prefer-promise-reject-errors': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
