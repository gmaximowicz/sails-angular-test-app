APP_URL = 'http://localhost:1337';//url for sails in dev mode

var sails = require('sails');
before(function(done){
  this.timeout(5000);
  sails.lift({
    // turn down the log level so we can view the test results
    log: {
        level: 'error'
    },
    // send test database connections
    models: {
     connection: 'testConnection',
     migrate: 'drop'
    },
    //custom DB configuration
    connections: {
     testConnection: {
       adapter: 'sails-mongo',
       host: 'mongo',
       port: 27017,
       database: 'test_data'
     }
    }
  },function(err,server){
    if(err)return done(err);
    done(err,server);
  });
});

after(function(done){
  sails.lower(done);
});
