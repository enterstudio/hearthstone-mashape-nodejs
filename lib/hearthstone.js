var unirest = require('unirest');
var merge = require('merge');
var endpoints = require('./endpoints');


module.exports = function(api_key, locale) {
    locale = locale || "enUS";
    if(api_key) return new Hearthstone(api_key, locale);
    else throw new Error('Bad api key');
};

function Hearthstone(api_key, locale) {
    this.api_key = api_key;
    this.locale = locale;

    return this;
};

Object.keys(endpoints.methods).forEach(function(method) {
    var met = endpoints.methods[method];
    Hearthstone.prototype[method] = function(params, fn) {
        var self = this;

        if("function" == typeof params) {
            fn = params;
            params = {};
        }

        execMethod.call(self, params, met.resource, fn);

        return this;
    }
});

var execMethod = function(params, endpoint, fn) {
    params = params || {};
    params = merge({"locale": this.locale}, params);

    endpoint = endpoint
                .replace(':name', params.name)
                .replace(':set', params.set)
                .replace(':hero', params.hero)
                .replace(':faction', params.faction)
                .replace(':quality', params.quality)
                .replace(':race', params.race)
                .replace(':type', params.type);

    unirest
        .get(endpoints.base_url + endpoint)
        .header("X-Mashape-Key", this.api_key)
        .query(params)
        .end(function(res) {
            if(res.ok) fn(null, res.body);
            else fn(res.error, null);
        });
};