/* eslint-disable global-require */
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nesting"),
    require("postcss-custom-properties"),
    require("autoprefixer")
  ]
};
