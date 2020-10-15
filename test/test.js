let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;

let port = 8080;
let uri = `http://localhost:${port}`;
let response = "GET";

chai.use(chaiHttp);

describe('Testing Basic API\'S', function() {
  it('/route GET Request', (done) => {
    return chai.request(uri)
      .get('/route')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.route).to.equals("GET");
        done();
      })
  })
  it('/route POST Request', (done) => {
    return chai.request(uri)
      .post('/route')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.route).to.equals("POST");
        done();
      })
  })
  it('/route PUT Request', (done) => {
    return chai.request(uri)
      .put('/route')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.route).to.equals("PUT");
        done();
      })
  })
  it('/route DELETE Request', (done) => {
    return chai.request(uri)
      .delete('/route')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.route).to.equals("DELETE");
        done();
      })
  })
});

