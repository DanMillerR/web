module.exports = {
    root: true,
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'next',
        'prettier',
    ],
    plugins: ['@typescript-eslint'],
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
}
