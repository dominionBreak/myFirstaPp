var BUTTON = (function(module) {

	module.TapME = function(resultObject) { 
		resultObject.prepend(Date() + '<br/>');
	};

	return module;
}(BUTTON || {}));