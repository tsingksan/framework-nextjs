const OpenProps = require("open-props");

module.exports = {
  plugins: {
    "postcss-preset-env": {
      autoprefixer: { grid: true }, // Default: true
      stage: 2, // Default: 2
    },
    "postcss-jit-props": OpenProps,
  },
};
