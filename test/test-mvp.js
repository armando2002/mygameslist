const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
var expect = chai.expect;

chai.use(chaiHttp);

describe('GET test', function() {
    it('should return HTTP 200', function() {
        return chai.request(app)
            .get('/')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});