module.exports = {
    extends: [
        'prettier',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: ['tsconfig.json'],
    },
    rules: {
        'react-hooks/exhaustive-deps': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                modifiers: ['destructured'],
                format: null,
            },
        ],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    },
};