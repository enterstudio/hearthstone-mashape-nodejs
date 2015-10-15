# hearthstone-mashape #

Hearthstone Mashape provide a Node.js wrapper for [hearthstoneapi.com](http://hearthstoneapi.com/)

# Table of Contents
* [Install](#install)
* [Example](#example)
* [Documentation](#documentation)
* [Contribution](#contribution)
* [Laravel](#laravel)

# <a name="install"></a>Install

```
npm install hearthstone-mashape
```

Get your API key on [mashape.com](https://market.mashape.com/dashboard)

# <a name="example"></a>Example

```javascript
var Hearthstone = require('hearthstone-mashape')('YOUR_API_KEY', 'frFR');
// if locale is empty, the value by default is 'enUS'

Hearthstone.cards(function(err, data) {
    console.log(data);
});

Hearthstone.search({name: 'Gnome'}, function(err, data) {
    console.log(data);
});
```

# <a name="documentation"></a>Documentation

## Available locales ##

enUS, enGB, deDE, esES, esMX, frFR, itIT, koKR, plPL, ptBR, ruRU, zhCN, zhTW

## Method available ##

### `cards(params, callback)` ###
Returns all available Hearthstone cards including non collectible cards.
```javascript
var params = {
    attack: NUMBER,
    collectible: NUMBER, // 1 only return collectible cards
    cost: NUMBER,
    durability: NUMBER,
    health: NUMBER,
    locale: STRING
};
Hearthstone.cards(params, function(err, data) {})
```

### `card(params, callback)` ###
Returns card by name or ID. This may return more then one card if they share the same name. Loatheb returns both the card and the boss.
```javascript
var params = {
    name: STRING, // Mandatory
    collectible: NUMBER,
    locale: STRING
];
Hearthstone.card(params, function(err, data) {})
```

### `backs(params, callback)` ###
Return a list of all the card backs.
```javascript
var params = {
    locale: STRING
];
Hearthstone.backs(params, function(err, data) {})
```

### `search(params, callback)` ###
Returns cards by partial name.
```javascript
var params = {
    name: STRING, // Mandatory
    collectible: NUMBER
    locale: STRING
];
Hearthstone.search(params, function(err, data) {})
```

### `set(params, callback)` ###
Returns all cards in a set. Example values: Blackrock Mountain, Classic.
```javascript
var params = {
    set: STRING, // Mandatory
    attack: NUMBER,
    collectible: NUMBER,
    cost: NUMBER,
    durability: NUMBER,
    health: NUMBER,
    locale: STRING
];
Hearthstone.set(params, function(err, data) {})
```

### `hero(params, callback)` ###
Returns all the cards of a class. Example values: Mage, Paladin.
```javascript
var params = {
    hero: STRING, // Mandatory,
    attack: NUMBER,
    collectible: NUMBER,
    cost: NUMBER,
    durability: NUMBER,
    health: NUMBER,
    locale: STRING
];
Hearthstone.hero(params, function(err, data) {})
```

### `faction(params, callback)` ###
Returns all the cards of a certain faction. Example values: Horde, Neutral.
```javascript
var params = {
    faction: STRING, // Mandatory,
    attack: NUMBER,
    collectible: NUMBER,
    cost: NUMBER,
    durability: NUMBER,
    health: NUMBER,
    locale: STRING
];
Hearthstone.faction(params, function(err, data) {})
```

### `quality(params, callback)` ###
Returns all the cards of a certain quality. Example values: Legendary, Common.
```javascript
var params = {
    quality: STRING, // Mandatory
    attack: NUMBER,
    collectible: NUMBER,
    cost: NUMBER,
    durability: NUMBER,
    health: NUMBER,
    locale: STRING
];
Hearthstone.quality(params, function(err, data) {})
```

### `race(params, callback)` ###
Returns all the cards of a certain race. Example values: Mech, Murloc.
```javascript
var params = {
    race: STRING, // Mandatory
    attack: NUMBER,
    collectible: NUMBER,
    cost: NUMBER,
    durability: NUMBER,
    health: NUMBER,
    locale: STRING
];
Hearthstone.quality(params, function(err, data) {})
```

### `type(params, callback)` ###
Returns all the cards of a certain type. Example values: Spell, Weapon.
```javascript
var params = {
    type: STRING, // Mandatory
    attack: NUMBER,
    collectible: NUMBER,
    cost: NUMBER,
    durability: NUMBER,
    health: NUMBER,
    locale: STRING
];
Hearthstone.type(params, function(err, data) {})
```

### `info(params, callback)` ###
Returns a list of current patch, classes, sets, types, factions, qualities, races and locales.
```javascript
var params = {
    locale: STRING
];
Hearthstone.info(params, function(err, data) {})
```

# <a name="contribution"></a>Contribution

Feel free to fork or PR.

# <a name="laravel"></a>Laravel

This package exists for [Laravel 5](https://github.com/Rtransat/hearthstone-api)