import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },

  async webpackFinal (config) {
    const paths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
      locales: '',
      buildLocales: ''
    };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');

    config.plugins?.push(
      new DefinePlugin({
        _IS_DEV_: JSON.stringify(true),
        _API_: JSON.stringify('https://testapi.ru'),
        _PROJECT_: JSON.stringify('storybook')
      })
    );

    return config;
  }
};
export default config;
