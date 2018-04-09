/* =====================================================================

	DEVICE

===================================================================== */
var Device = {};
(function() {
	
	// デバイスタイプ判定（PC / TB / SP）
	var dev = {};
	var ua = window.navigator.userAgent.toLowerCase();

	var find = function(needle) {
		return ua.indexOf(needle) !== -1;
	};

	dev.ios = function() {
		return dev.iphone() || dev.ipod() || dev.ipad();
	};
	dev.iphone = function() {
		return find('iphone');
	};
	dev.ipod = function() {
		return find('ipod');
	};
	dev.ipad = function() {
		return find('ipad');
	};
	dev.android = function() {
		return find('android');
	};
	dev.androidPhone = function() {
		return dev.android() && find('mobile');
	};
	dev.androidTablet = function() {
		return dev.android() && !find('mobile');
	};
	dev.blackberry = function() {
		return find('blackberry') || find('bb10') || find('rim');
	};
	dev.blackberryPhone = function() {
		return dev.blackberry() && !find('tablet');
	};
	dev.blackberryTablet = function() {
		return dev.blackberry() && find('tablet');
	};
	dev.windows = function() {
		return find('windows');
	};
	dev.windowsPhone = function() {
		return dev.windows() && find('phone');
	};
	dev.windowsTablet = function() {
		return dev.windows() && find('touch');
	};
	dev.fxos = function() {
		return (find('(mobile;') || find('(tablet;')) && find('; rv:');
	};
	dev.fxosPhone = function() {
		return dev.fxos() && find('mobile');
	};
	dev.fxosTablet = function() {
		return dev.fxos() && find('tablet');
	};
	dev.meego = function() {
		return find('meego');
	};
	dev.mobile = function() {
		return dev.androidPhone() || dev.iphone() || dev.ipod() || dev.windowsPhone() || dev.blackberryPhone() || dev.fxosPhone() || dev.meego();
	};
	dev.tablet = function() {
		return dev.ipad() || dev.androidTablet() || dev.blackberryTablet() || dev.windowsTablet() || dev.fxosTablet();
	};

	var type;
	if (dev.ios()) {
		if (dev.ipad()) {
			// ios ipad tablet
			type = 'TB';
		} else if (dev.iphone()) {
			// ios iphone mobile
			type = 'SP';
		} else if (dev.ipod()) {
			// ios ipod mobile
			type = 'SP';
		}
	} else if (dev.android()) {
		if (dev.androidTablet()) {
			// android tablet
			type = 'TB';
		} else {
			// android mobile
			type = 'SP';
		}
	} else if (dev.blackberry()) {
		if (dev.blackberryTablet()) {
			// blackberry tablet
			type = 'TB';
		} else {
			// blackberry mobile
			type = 'SP';
		}
	} else if (dev.windows()) {
		if (dev.windowsTablet()) {
			// windows tablet
			type = 'TB';
		} else if (dev.windowsPhone()) {
			// windows mobile
			type = 'SP';
		} else {
			// desktop
			type = 'PC';
		}
	} else if (dev.fxos()) {
		if (dev.fxosTablet()) {
			// fxos tablet
			type = 'TB';
		} else {
			// fxos mobile
			type = 'SP';
		}
	} else if (dev.meego()) {
		// meego mobile
		type = 'SP';
	} else {
		// desktop
		type = 'PC';
	}

	// IE バージョン判定
	var ie = 10000;
	if (ua.indexOf('msie 6') >= 0) {
		ie = 6;
	} else if (ua.indexOf('msie 7') >= 0) {
		ie = 7;
	} else if (ua.indexOf('msie 8') >= 0) {
		ie = 8;
	} else if (ua.indexOf('msie 9') >= 0) {
		ie = 9;
	} else if (ua.indexOf('msie') >= 0) {
		ie = 10;
	}

	// ベンダープレフィックス判定
	var venderPrefix = (/webkit/i).test(navigator.appVersion) ? '-webkit-' :
		(/firefox/i).test(navigator.userAgent) ? '-moz-' :
		(/trident/i).test(navigator.userAgent) ? '-ms-' :
		'opera' in window ? '-O-' : '';

	Device.type = type;
	Device.ie = ie;
	Device.venderPrefix = venderPrefix;

})();
