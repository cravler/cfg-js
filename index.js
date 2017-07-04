'use strict';

var objectAt = require('object-at');
var objectHas = require('object-has');

module.exports = Config;

/**
 * @param raw
 * @constructor
 */
function Config (raw) {
    if (!(this instanceof Config)) {
        return new Config(raw);
    }

    this.raw = raw || {};
}

/**
 * @param property
 * @returns {boolean}
 */
Config.prototype.has = function has (property) {
    return objectHas(this.raw, property);
};

/**
 * @param property
 * @param _default_
 * @returns {*}
 */
Config.prototype.get = function get (property, _default_) {
    var value = objectAt(this.raw, property);
    return undefined === value ? _default_ : value;
};
