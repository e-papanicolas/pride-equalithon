import { expect } from "chai";
import userActions from "../app/controllers/user.controller.js";

test("a status code of 200 is returned from GET /user", async () => {
  const res = await userActions.getAll();
  expect(res.statusCode).toBe(200);
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await userActions.getAll();
  } catch (err) {
    expect(err).toMatch("error");
  }
});
