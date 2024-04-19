const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const senderUrl = 'http://localhost:8080';

describe('Sender Form Tests', function() {
  it('should load the send message page', function(done) {
    chai.request(senderUrl)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Envoyer un message anonyme');
        done();
      });
  });
});