import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe('index.html', () => {

	// async test because evaluation is in a callback
	it('should say hello', (done) => {
		const index = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(index, function(err, window) {
			// callback test, needs async to work

			const h1 = window.document.getElementsByTagName('h1')[0]; // first h1 on the page
			expect(h1.innerHTML).to.equal('Hello World!');
			done();
			window.close();
		}); // can pass JavaScript files to load into jsdom in second param
	});
});
