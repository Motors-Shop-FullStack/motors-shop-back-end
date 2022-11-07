import { createUserService } from "../../services/users/createUser.service";
import { Type } from "@prisma/client";
import { prisma } from "../../app";

describe("CRUD User service", () => {
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
  beforeAll(async () => {
    const deleteUsers = prisma.user.deleteMany();
    await prisma.$transaction([deleteUsers]);
    await prisma.$disconnect();
  });

  afterAll(async () => {
    const deleteUsers = prisma.user.deleteMany();
    await prisma.$transaction([deleteUsers]);
    await prisma.$disconnect();
  });

  it("should be able to create new user", async () => {
    const user = await createUserService(userData);

    expect(user).toHaveProperty("id");
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });

  it("should not be able to create new user with same email", async () => {
    try {
      await createUserService(userData);
    } catch (error) {
      expect(error).toHaveProperty("message", "Email already exists");
    }
  });

  it("should be able to list an user", async () => {
    const user = await prisma.user.findMany();

    expect(user.length).toEqual(1);
  });
});
