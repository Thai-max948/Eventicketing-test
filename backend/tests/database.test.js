require("dotenv").config({ quiet: true });

const pool = require("../src/config/database");

describe("Database connection", () => {
  test("should connect to PostgreSQL successfully", async () => {
    const result = await pool.query("SELECT 1 AS value");

    expect(result.rows[0].value).toBe(1);
  });

  afterAll(async () => {
    await pool.end();
  });
});