var request = require('supertest')(APP_URL);

describe("user controller", function(){
  var created_user;
  it("insert new user into the DB",function(done){
    var req = request.post("/user");

    req.send({
      first_name: 'Maxi',
      last_name: 'Dev',
      username: 'maxi_dev',
      password: 'maxi_dev_password_test_123',
      email: 'maxi@test.com'
    }).
    end(function(err,res){
      if(err){
        throw err;
      }
      created_user = res.body;
      console.log(res.body);
      done();
    });
  });

  it("update user in the DB",function(done){
    var req = request.post("/user/"+created_user.id);
    req.send({
      first_name: 'Maxxx',
      last_name: 'Power'
    }).
    end(function(err,res){
      if(err){
        throw err;
      }
      console.log(res.body);
      done();
    });
  });

  it("delete user in the DB",function(done){
    request
    .delete("/user/"+created_user.id)
    .end(function(err,res){
      if(err){
        throw err;
      }
      console.log(res.body);
      done();
    });
  });
});
