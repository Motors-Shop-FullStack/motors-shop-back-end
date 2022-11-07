import { Type } from "@prisma/client";
import request from "supertest";
import app, { prisma } from "../../app";

describe("POST /users/register", () => {
  const userData = {
    name: "Test",
    email: "test@test.com",
    password: "123456",
    cpf: 123456789123,
    account_type: Type.BUYER,
    description: "Hello World!",
    address: {
      cep: "Test",
      state: "Test",
      city: "Test",
      street: "Test",
      number: "Test",
      complement: "Test",
    },
  };

  afterAll(async () => {
    await prisma.user.deleteMany();
  });

  it("should be able to create new user", async () => {
    const response = await request(app).post("/users/register/").send(userData);

    expect(response.status).toEqual(201);
  });

  it("should not be able to create new user with same email", async () => {
    const response = await request(app).post("/users/register/").send(userData);

    expect(response.status).toEqual(400);
  });
});
