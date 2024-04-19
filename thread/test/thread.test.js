const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const threadUrl = 'http://localhost:80';

describe('Thread View Tests', function() {
  it('should load the homepage', function(done) {
    chai.request(threadUrl)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Forum Anonyme');
        done();
      });
  });
});