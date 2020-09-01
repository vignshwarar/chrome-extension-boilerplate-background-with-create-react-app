module.exports = function override(config, env) {
    /* Overrides config without ejecting react-app */
    const isEnvProduction = (env === 'production');
    config.output = { ...config.output,filename:isEnvProduction ? 'bundle.min.js' : 'static/js/bundle.js' }; /* Overriding default config to single bundle */
    config.optimization = { ...config.optimization, splitChunks:false, runtimeChunk:false };
    return config;
}