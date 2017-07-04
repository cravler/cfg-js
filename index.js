'use strict';

var objectAt = require('object-at');
var objectHas = require('object-has');

module.exports = Config;

/**
 * @param raw
 * @constructor
 */
function Config (raw) {
    this.raw = raw || {};
}

/**
 * @param property
 */
Config.prototype.has = function has (property) {
    return objectHas(this.raw, property);
};

/**
 * @param property
 */
Config.prototype.get = function get (property) {
    return objectAt(this.raw, property);
};
