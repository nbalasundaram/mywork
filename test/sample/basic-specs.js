var wd = require('wd');
require('colors');

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;



// http configuration, not needed for simple runs
wd.configureHttp( {
    timeout: 60000,
    retryDelay: 15000,
    retries: 5
});


describe('Launch a website and verify the title', function() {
    var browser;
    var allPassed = true;

    before(function(done) {
        var desired = {
            browserName : 'chrome'
        };
        browser = wd.promiseChainRemote("http://127.0.0.1:4444/wd/hub");
        browser.init(desired).nodeify(done);



    });

    afterEach(function(done) {
        done();
    });

    after(function(done) {
       done();
    });

    it("should get home page", function(done) {

        browser
            .get("http://google.com")
            .title()
            .should.become("Google")
            .nodeify(done);
    });


});
