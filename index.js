/**
 *  is-valid-steam-link - λ Checks if the url provided is a valid λ Steam url/link
 *  @version: v1.1.0
 *  @link: https://github.com/tutyamxx/is-valid-steam-link
 *  @license: MIT
 **/


/**
 * Checks whether a given URL is a valid Steam link.
 *
 * This function validates URLs for the following Steam domains:
 * - steamcommunity.com
 * - store.steampowered.com
 * - help.steampowered.com
 *
 * @param {string} url - The URL string to validate.
 * @returns {boolean} Returns `true` if the URL matches a valid Steam domain, otherwise `false`.
 *
 */
const isValidSteamLink = (url) => {
    if (!url || typeof url !== 'string') {
        return false;
    }

    const steamValidUrlPattern = /^(https?:\/\/)?(?:[a-z0-9-]+\.)?(steamcommunity\.com|steampowered\.com|s\.team)(\/.*)?$/i;

    if (url.match(steamValidUrlPattern)) {
        return true;
    }

    return false;
};

// --| CommonJS export
module.exports = isValidSteamLink;

// --| ESM default export for `import` statements
module.exports.default = isValidSteamLink;
