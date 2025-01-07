module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/icons': './src/icons',
          '@/navigation': './src/navigation',
          '@/screens': './src/screens',
          '@/services': './src/services',
          '@/styles': './src/styles',
          '@/types': './src/types',
          '@/utils': './src/utils',
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
