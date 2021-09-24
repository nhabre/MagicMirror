const helpers = require("./global-setup");
let app = null;

describe("Display of modules", function () {
	beforeAll(function (done) {
		app = helpers.startApplication("tests/configs/modules/display.js", null, done);
	});
	afterAll(function () {
		helpers.stopApplication(app);
	});

	it("should show the test header", function () {
		elem = document.querySelector("#module_0_helloworld .module-header");
		expect(elem).not.toBe(null);
		// textContent gibt hier lowercase zurück, das uppercase wird durch css realisiert, was daher nicht in textContent landet
		expect(elem.textContent).toBe("test_header");
	});

	it("should show no header if no header text is specified", function () {
		elem = document.querySelector("#module_1_helloworld .module-header");
		expect(elem).not.toBe(null);
		expect(elem.textContent).toBe("undefined");
	});
});
