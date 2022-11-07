import { createUserService } from "../../services/users/createUser.service";
import { Type } from "@prisma/client";
import { prisma } from "../../app";

describe("CRUD User service", () => {
  const user = {
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
    const deleteUsers = prisma.user.deleteMany();

    await prisma.$transaction([deleteUsers]);

    await prisma.$disconnect();
  });

  test("should create new user", async () => {
    const newUser = await createUserService(user);

    expect(newUser).toHaveProperty("id");
  });
});
