import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server.js";

chai.should();
chai.use(chaiHttp);

describe("User Integration Tests", () => {
  describe("/GET users", () => {
    it("It should GET all users", (done) => {
      chai
        .request(app)
        .get("/user")
        .send()
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
});
