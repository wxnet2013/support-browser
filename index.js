var win = window;
var doc = win.document || {};
var documentElement = doc.documentElement;
// https://github.com/cubiq/iscroll/blob/master/src/utils.js
var _elementStyle = document.createElement('div').style;
var _vendor = (function() {
	var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
		transform,
		i = 0,
		l = vendors.length;

	for (; i < l; i++) {
		transform = vendors[i] + 'ransform';
		if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
	}

	return false;
})();

function _prefixStyle(style) {
	if (_vendor === false) return false;
	if (_vendor === '') return style;
	return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
}


module.exports = {
	touch: function() {
		return 'ontouchstart' in window;
	},
	pointer: function() {
		return !!(window.PointerEvent || window.MSPointerEvent);
	},
	msPointer: function() {
		return 'msPointerEnabled' in navigator;
	},
	transition: function() {
		return _prefixStyle('transition') !== false;
	},
	transform: function() {
		return _prefixStyle('transform') !== false;
	},
	classList: function() {
		return 'classList' in documentElement;
	}
};
