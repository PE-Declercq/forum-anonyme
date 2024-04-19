const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Message Tests', function() {
  it('GET /messages should return all messages', function(done) {
    chai.request(app)
      .get('/messages')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('POST /messages should create a message', function(done) {
    chai.request(app)
      .post('/messages')
      .send({ text: 'Test message', pseudonym: 'Tester' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Message created');
        done();
      });
  });
});
