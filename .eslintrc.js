module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    'ecmaVersion': 2018,
  },
  plugins: ['jest'],
  env: {
    'node': true,
    'es6': true,
    'jest/globals': true,
  },
  rules: {
    /* best practices */
    'consistent-return': ['warn'],
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'smart'],
    'no-div-regex': ['warn'],
    'no-eval': ['error'],
    'no-extra-label': ['error'],
    'no-floating-decimal': ['error'],
    'no-implicit-coercion': ['error', {boolean: false, number: true, string: true}],
    'no-implicit-globals': ['error'],
    'no-implied-eval': ['error'],
    'no-iterator': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-param-reassign': ['error'],
    'no-proto': ['error'],
    'no-restricted-properties': [
      'error',
      /* jest describe.only, test.only and it.only */
      {object: 'describe', property: 'only'},
      {object: 'test', property: 'only'},
      {object: 'it', property: 'only'},
    ],
    'no-return-assign': ['error'],
    'no-return-await': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['off', {allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true}],
    'no-useless-call': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-return': ['error'],
    'no-void': ['error'],
    'no-warning-comments': ['warn', {terms: ['todo', 'fixme', 'xxx'], location: 'start'}],
    'no-with': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'require-await': ['warn'],
    'wrap-iife': ['error', 'inside'],
    'no-label-var': ['error'],
    'no-undef-init': ['error'],
    'no-unused-vars': ['error', {args: 'after-used', argsIgnorePattern: '^logger$', ignoreRestSiblings: true}],
    'no-use-before-define': ['error', {functions: false, classes: true, variables: false}],

    /* commonjs / nodejs */
    'global-require': ['error'],
    'handle-callback-err': ['error'],
    'no-buffer-constructor': ['error'],
    'no-mixed-requires': ['error'],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'no-process-env': ['error'],
    'no-process-exit': ['error'],
    'no-sync': ['error', {allowAtRootLevel: true}],

    /* style */
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['warn', 'always', {considerPropertyDescriptor: true}],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, {SwitchCase: 1}],
    'key-spacing': ['error', {beforeColon: false, afterColon: true, mode: 'strict'}],
    'keyword-spacing': ['error', {before: true, after: true}],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
    'max-len': ['warn', {code: 120, comments: 120, ignoreUrls: true, ignoreRegExpLiterals: true}],
    'max-statements-per-line': ['error', {max: 1}],
    'new-parens': ['error'],
    'no-continue': ['warn'],
    'no-lonely-if': ['error'],
    'no-mixed-operators': ['error'],
    'no-multi-assign': ['warn'],
    'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 0, maxEOF: 0}],
    'no-new-object': ['warn'],
    'no-trailing-spaces': ['error'],
    'no-unneeded-ternary': ['warn'],
    'no-whitespace-before-property': ['warn'],
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', {multiline: true, consistent: true}],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after', {overrides: {'?': 'before', ':': 'before'}}],
    // TODO: ADD THIS RULE -> 'prefer-object-spread': ['error'],
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {before: false, after: true}],
    'semi-style': ['error', 'last'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', {words: true, nonwords: false}],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': ['error', {after: true, before: false}],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': ['error'],

    /* ecmascript6 */
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {before: true, after: true}],
    'generator-star-spacing': ['error', {before: true, after: true}],
    'no-duplicate-imports': ['error', {includeExports: true}],
    'no-useless-computed-key': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'no-template-curly-in-string': ['error'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-numeric-literals': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['warn'],
    'require-yield': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': ['warn', {ignoreCase: false, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']}],
    'symbol-description': ['error'],
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', {before: true, after: true}],
  },
  overrides: [{
    files: ['**/config.js', '**/config/environment/*.js'],
    rules: {
      'no-process-env': ['off'],
    },
  }],
};