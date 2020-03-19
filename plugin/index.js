'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPluginEntryUrl = undefined;

var _index = require('./utils/index.js');

var PLUGIN_NAME = 'myPlugin';
var CUSTOM_CARD = 'entry';

var pluginUrl = 'plugin://' + PLUGIN_NAME + '/' + CUSTOM_CARD + '?';

var getPluginEntryUrl = exports.getPluginEntryUrl = function getPluginEntryUrl(params) {
  return (0, _index.paramsToUrl)(pluginUrl, params);
};