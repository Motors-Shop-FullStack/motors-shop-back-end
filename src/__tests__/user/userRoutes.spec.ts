import { Type } from "@prisma/client";
import request from "supertest";
import app, { prisma } from "../../app";

describe("POST /users/register", () => {
  const userBuyer = {
    name: "Buyer",
    email: "buyer@test.com",
    password: "123456",
    cpf: 123456789123,
    account_type: Type.BUYER,
    description: "I'am a Buyer",
    address: {
      cep: "Buyer CEP",
      state: "Buyer STATE",
      city: "Buyer CITY",
      street: "Buyer STREET",
      number: "Buyer NUMBER",
      complement: "Buyer COMPLEMENT",
    },
  };

  const userSeller = {
    name: "Seller",
    email: "seller@test.com",
    password: "123456",
    cpf: 98765432198,
    account_type: Type.SELLER,
    description: "I'am a Seller",
    address: {
      cep: "Seller CEP",
      state: "Seller STATE",
      city: "Seller CITY",
      street: "Seller STREET",
      number: "Seller NUMBER",
      complement: "Seller COMPLEMENT",
    },
  };

  let buyer_id: string;
  let seller_id: string;

  afterAll(async () => {
    await prisma.user.deleteMany();
  });

  it("should be able to create new buyer", async () => {
    const response = await request(app)
      .post("/users/register/")
      .send(userBuyer);

    buyer_id = response.body.id;

    expect(response.status).toEqual(201);
  });

  it("should not be able to create new buyer with same email", async () => {
    const response = await request(app)
      .post("/users/register/")
      .send(userBuyer);

    expect(response.status).toEqual(400);
  });

  it("should be able to create new seller", async () => {
    const response = await request(app)
      .post("/users/register/")
      .send(userSeller);

    seller_id = response.body.id;

    expect(response.body).toHaveProperty("id");
    expect(response.status).toEqual(201);
  });

  it("should not be able to create new seller with same email", async () => {
    const response = await request(app)
      .post("/users/register/")
      .send(userSeller);

    expect(response.status).toEqual(400);
  });

  it("should be able to list an user by id", async () => {
    const response = await request(app).get(`/users/${buyer_id}`);

    expect(response.body.id).toEqual(buyer_id);
    expect(response.status).toEqual(200);
  });

  it("should be able to list users", async () => {
    const response = await request(app).get("/users");

    expect(response.body.length).toEqual(2);
    expect(response.status).toEqual(200);
  });

  it("should be able to update a buyer", async () => {
    const response = await request(app).patch(`/users/${buyer_id}`).send({
      name: "Buyer PATCHED",
    });

    expect(response.body.name).toEqual("Buyer PATCHED");
    expect(response.status).toEqual(200);
  });

  it("should be able to update a buyer address", async () => {
    const response = await request(app)
      .patch(`/users/address/${buyer_id}`)
      .send({
        cep: "Buyer CEP PATCHED",
      });

    expect(response.body.cep).toEqual("Buyer CEP PATCHED");
    expect(response.status).toEqual(200);
  });

  it("shoud be able to delete an buyer", async () => {
    const response = await request(app).delete(`/users/${buyer_id}`);

    expect(response.status).toEqual(204);
  });
});
