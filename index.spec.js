'use strict';

var Config = require('./index');
var assert = require('chai').assert;

describe('cfg-js', function () {

    var cfg = new Config({
        hello: {
            cfg: {
                js: 'hello cfg-js'
            }
        }
    });

    it('has', function () {
        assert.equal(cfg.has('hello.cfg.js'), true);
        assert.equal(cfg.has('js.cfg.hello'), false);
    });

    it('get', function () {
        assert.equal(cfg.get('hello.cfg.js'), 'hello cfg-js');
        assert.equal(cfg.get('js.cfg.hello'), undefined);
    });

});