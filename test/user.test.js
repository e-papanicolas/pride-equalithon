import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server.js";

chai.should();
chai.use(chaiHttp);

describe("User Unit Tests", () => {
  describe("Test GET route /user", () => {
    it("should return a list of all users ", async () => {
      (await chai.request(app).get("/user/")).send().end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
    });
    it("should throw an error if the user is not added to the database", async () => {});
  });
});
