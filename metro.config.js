// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// 1. Enable package exports resolution
config.resolver.unstable_enablePackageExports = true;

// 2. Ensure ts, tsx, mjs, cjs are included in source extensions
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'mjs',
  'cjs',
  'ts',
  'tsx',
];

module.exports = config;