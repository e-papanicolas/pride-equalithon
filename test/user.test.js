import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../server.js";

chai.should();
chai.use(chaiHttp);

describe("User Unit Tests", () => {
  describe("Test GET route /user", () => {
    it("should return a 200 status code", async () => {
      chai
        .request(app)
        .get("/user")
        .send()
        .then((res) => {
          expect(res).to.have.status(200);
        })
        .catch((err) => {
          throw err;
        });
    });
    it("should throw an error if the user is not added to the database", async () => {});
  });
});
