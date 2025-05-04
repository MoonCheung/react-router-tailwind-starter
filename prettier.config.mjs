/** @type {import("prettier").Config} */
const functions = ['cn', 'clsx']
const config = {
  tailwindFunctions: functions,
  customFunctions: functions,
  endingPosition: 'absolute-with-indent',
  plugins: [
    // https://www.nikolailehbr.ink/blog/tailwind-css-tips#Automatic-wrapping-of-long-class-names
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    'prettier-plugin-merge'
  ],
  printWidth: 150,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: true,
  useTabs: false,
  jsxSingleQuote: true,
  endOfLine: 'auto'
}

export default config
