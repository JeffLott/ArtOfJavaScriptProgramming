import {gcd} from '../../src/math/helpers'

var assert = require('assert');

describe('gcd', () => {
	it('of 4 and 6 should be 2', () => {
		assert.equal(gcd(4, 6), 2);
	});

	it('of 15 and 5 should be 5', () => {
		assert.equal(gcd(15, 5), 5);
		assert.equal(gcd(5,15), 5);
	});

	it('should validate input y is not 0', () => {
		var testFunction = () => {
			gcd(5,0);
		};

		assert.throws(testFunction, Error);
	});

	it('should validate input y is a number', () => {
		var testFunction = () => {
			gcd(5,'Hello World');
		};

		assert.throws(testFunction, Error);
	});

	it('should validate input y is not nothing', () => {
		var testFunction = () => {
			gcd(5, undefined);
		};

		assert.throws(testFunction, Error);
	});

	it('should validate input x is not 0', () => {
		var testFunction = () => {
			gcd(0, 5);
		};

		assert.throws(testFunction, Error);
	});

	it('should validate input x is a number', () => {
		var testFunction = () => {
			gcd('Hello World', 5);
		};

		assert.throws(testFunction, Error);
	});

	it('should validate input y is not nothing', () => {
		var testFunction = () => {
			gcd(undefined, 5);
		};

		assert.throws(testFunction, Error);
	});
});