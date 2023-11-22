const isValidSteamLink = require('../index.js');

const validSteamLink = [
    'https://steamcommunity.com/market/',
    'https://steamcommunity.com/discussions/',
    'https://steamcommunity.com/?subsection=broadcasts',
    'https://store.steampowered.com/',
    'https://steamcommunity.com/profiles/76561198009610232/',
    'https://steamcommunity.com/id/tutyakafutux/',
    'https://help.steampowered.com/en/',
    'http://steamcommunity.com/market/',
    'http://steamcommunity.com/discussions/',
    'http://steamcommunity.com/?subsection=broadcasts',
    'http://store.steampowered.com/',
    'http://steamcommunity.com/profiles/76561198009610232/',
    'http://steamcommunity.com/id/tutyakafutux/',
    'http://help.steampowered.com/en/',
    'steamcommunity.com/id/tutyakafutux/'
];

const invalidSteamLink = [
    'www.github.com',
    'www.youtube.com',
    'www.discord.gg',
    'https://discordapp.com/api/oauth2/authorize?client_id=412067927333011470&permissions=8&scope=bot',
    'https://www.npmjs.com/package/is-discord-invite'
]

test('Check for valid Steam urls/links', () => validSteamLink.forEach((url) => expect(isValidSteamLink(url)).toBe(true)));
test('Check for invalid Steam urls/links', () => invalidSteamLink.forEach((url) => expect(isValidSteamLink(url)).toBe(false)));
test('Should return false if not a string', () => {
    expect(isValidSteamLink(12345)).toBe(false);
    expect(isValidSteamLink([12345])).toBe(false);
    expect(isValidSteamLink({})).toBe(false);
    expect(isValidSteamLink([[1], [2]])).toBe(false);
    expect(isValidSteamLink(Infinity)).toBe(false);
});
test('Should return false if parameter is empty', () => expect(isValidSteamLink()).toBe(false));
