module.exports = {
  plugins: [
    'curry',
    'flowtype',
    'import',
    'jsx-a11y',
    'node',
    'prefer-object-spread',
    'promise',
    'react',
    'security',
  ],
  extends: [
    './rules/es6',
    './rules/etc',
    './rules/import',
    './rules/react',
    './rules/flowtype',
    './rules/security',
  ].map(require.resolve),
}
