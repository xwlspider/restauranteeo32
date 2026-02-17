// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
const { resolver } = config;

// Módulos JS no estándar
resolver.sourceExts = [...resolver.sourceExts, "cjs", "mjs"];

// Assets: modelos 3D e imágenes
resolver.assetExts = [...resolver.assetExts, "glb", "gltf", "bin", "mtl"];

module.exports = config;