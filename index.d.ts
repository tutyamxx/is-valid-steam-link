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
declare function isValidSteamLink(url: string | undefined | null): boolean;

export = isValidSteamLink;
