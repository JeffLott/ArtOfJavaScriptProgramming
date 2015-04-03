export function gcd(x, y){
	if(typeof x !== 'number' || typeof y !== 'number' || x === 0 || y === 0){
		throw new Error('invalid input argument');
	}

	if(y > x){
		return gcd(y,x);
	}

	while(y > 1){
		let remainder = x % y;

		if(remainder === 0){
			return y;
		}

		x = y;
		y = remainder;
	}

	return 1;
}