module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.resolve.alias["react-native$"] = "react-native-web";
    config.resolve.alias["@expo/vector-icons"] =
      "react-native-vector-icons/dist";
    // Return the altered config
    return config;
  },
  stories: [
    "../src/storybook/stories/**/**/**/*.stories.mdx",
    "../src/storybook/stories/**/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
