import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    },
    {
        languageOptions: { globals: globals.browser }
    },
    pluginJs.configs.recommended,
    ...tsEslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/no-unescaped-entities': 'off',
            'quotes': ['error', 'single'],
            'object-curly-newline': ['error', {
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 5
                },
            }],
            'object-property-newline': ['error', {
                allowAllPropertiesOnSameLine: false,
            }],
        },
    },
];
