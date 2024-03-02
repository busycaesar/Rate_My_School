const request = require("supertest");
const app = require("../../src/app");

describe("GET /", () => {
  test("request returns correct status", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toBe("Hello from Backend!");
  });
});
