var utils  = require('course-utilities');
var Greet = utils.load('./hello.js', 'Greet');

describe('Greet', () => {
	test('Greeting message', () => {
		expect(Greet('Josephine')).toBe('Hello, Josephine');
	});

	test('Null case for name', () => {
		expect(Greet(null)).toBe('Hello there!');
	});

	test('Shouting', () => {
		expect(Greet('ROBERT')).toBe('HELLO ROBERT!');
		}
	);

	test('Two names as input', () => {
		expect(Greet(['Jupiter', 'George'])).toBe('Hello, Jupiter, George');
	});

	test('Arbitrary number of names', () => {
		expect(Greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
	})
});
