module.exports = {
    webpack: function(config) {
        require('react-app-rewire-postcss')(config, true);
        return config;
    },
}