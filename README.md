# is-valid-steam-link

<p align="center"><a href="https://nodei.co/npm/is-valid-steam-link/"><img src="https://nodei.co/npm/is-valid-steam-link.png"></a></a></p>

* Simple NPM package that Checks if the url provided is a valid λ Steam url/link
* This package WILL NOT VALIDATE STEAM ID/PROFILE ID! Just checks if it is a valid λ Steam url/link
* ♻️ Works seamlessly with `CommonJS`, `ESM` and `TypeScript`

# Install via [NPM](https://www.npmjs.com/package/is-valid-steam-link)

`$ npm i is-valid-steam-link`

# Usage

- Returns a `Boolean` indicating whether the string is a valid λ Steam url/link
- It will return `false` if the parameter is empty or not a string.

## CommonJS
```javascript
const isValidSteamLink = require('is-valid-steam-link');

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

// --| All will return true
validSteamLink.forEach((url) => {
    console.log(isValidSteamLink(url));
});

const invalidSteamLink = [
    'www.github.com',
    'www.youtube.com',
    'www.discord.gg',
    'https://discordapp.com/api/oauth2/authorize?client_id=412067927333011470&permissions=8&scope=bot',
    'https://www.npmjs.com/package/is-discord-invite'
];

// --| All will return false
invalidSteamLink.forEach((url) => {
    console.log(isValidSteamLink(url));
});
```

## ESM
```javascript
import isValidSteamLink from 'is-valid-steam-link';

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

// --| All will return true
validSteamLink.forEach((url) => {
    console.log(isValidSteamLink(url));
});

const invalidSteamLink = [
    'www.github.com',
    'www.youtube.com',
    'www.discord.gg',
    'https://discordapp.com/api/oauth2/authorize?client_id=412067927333011470&permissions=8&scope=bot',
    'https://www.npmjs.com/package/is-discord-invite'
];

// --| All will return false
invalidSteamLink.forEach((url) => {
    console.log(isValidSteamLink(url));
});
```

## TypeScript
```javascript
import isValidSteamLink from 'is-valid-steam-link';

const validSteamLink: string[] = [
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

// --| All will return true
validSteamLink.forEach((url: string) => {
    const result: boolean = isValidSteamLink(url);
    console.log(result);
});

const invalidSteamLink: string[] = [
    'www.github.com',
    'www.youtube.com',
    'www.discord.gg',
    'https://discordapp.com/api/oauth2/authorize?client_id=412067927333011470&permissions=8&scope=bot',
    'https://www.npmjs.com/package/is-discord-invite'
];

// --| All will return false
invalidSteamLink.forEach((url: string) => {
    const result: boolean = isValidSteamLink(url);
    console.log(result);
});
```
