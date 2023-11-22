/**
 *  is-valid-steam-link - Checks if the url provided is a valid Steam url
 *  @version: v1.0.0
 *  @link: https://github.com/tutyamxx/is-valid-steam-link
 *  @license: MIT
 **/

module.exports = (url) => {
    if (!url || typeof url !== 'string') {
        return false;
    }

    const steamValidUrlPattern = /^(https?:\/\/)?(?:\w+\.)?(steamcommunity\.com|store\.steampowered\.com|help\.steampowered\.com)\/.*$/;

    if (url.match(steamValidUrlPattern)) {
        return true;
    }

    return false;
};
