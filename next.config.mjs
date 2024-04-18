/** @type {import('next').NextConfig} */
import withLinaria from "next-with-linaria";

// https://stackoverflow.com/questions/72293500/selector-root-is-not-pure-pure-selectors-must-contain-at-least-one-local-cla
const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};

function cssLoaderOptions(modules) {
  return {
    ...modules,
    mode: "local",
  };
}

const nextConfig = {
  webpack: (config) => {
    const oneOf = config.module.rules.find((rule) => typeof rule.oneOf === "object");

    if (oneOf) {
      const moduleCssRule = oneOf.oneOf.find((rule) => regexEqual(rule.test, /\.module\.css$/));

      if (moduleCssRule) {
        // Get the config object for css-loader plugin
        const cssLoader = moduleCssRule.use.find(({ loader }) => loader.includes("/css-loader/"));

        if (cssLoader) {
          cssLoader.options = {
            ...cssLoader.options,
            modules: cssLoaderOptions(cssLoader.options.modules),
          };
        }
      }
    }

    return config;
  },
};

export default withLinaria(nextConfig);
