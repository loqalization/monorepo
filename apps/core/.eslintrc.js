module.exports = {
    extends: ['./node_modules/configs/nest-eslint.js', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
