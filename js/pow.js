function pow(num, deg) {

	var res = 1;

	if (deg < 0) {
		num = 1 / num;
		deg *= -1;
	}

	for (var i = 0; i < deg; i++) {

		res = res * num;
	}

	return res;
};

try {
	module.exports = pow;
} catch(e) {

}