var request = require('superagent');
var expect = require('expect.js');
var app = require('../server/server.js');

describe('REST API', function(){
  var server;
  before(function (done) {
    server = app.listen(done);
  });

  after(function (done) {
    server.close(done);
  });

 it ('Checks for the existence of the page', function(done){
   request.get('localhost:3000').end(function(err, res){
    expect(res).to.exist;
    done();
   });
  });

  it ('Checks for status 200', function(done){
    request.get('localhost:3000').end(function(err, res){
      expect(res.status).to.equal(200);
      done();
    });
  });

  it ('Adds or updates test message', function(done){
    request
    .put('localhost:3000/api/Messages')
    .send({ message: 'Red rum, sir, is murder.', id: 'test' })
    .set('Accept', 'application/json')
    .end(function(err, res){
      expect(res.status).to.equal(200);
      done();
    });
  });

});
