/**@type {import('prettier').Config}*/
module.exports = {
  jsxSingleQuote: "true",
  semi: "false",
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn", "clsx", "twMerge"],
};
