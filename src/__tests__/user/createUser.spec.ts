import { prismaMock } from "../../../prisma/singleton";
import { v4 as uuidv4 } from "uuid";
import { createUserService } from "../../services/users/createUser.service";
import { Type } from "@prisma/client";
import { createUser, usersMemory } from "../../../prisma/InMemoryRepo";

describe("Create user service", () => {
  const user = {
    // id: uuidv4(),
    name: "Test",
    email: "test@test.com",
    // phone: 999999999,
    // birthdate: new Date(),
    // created_at: new Date(),
    // updated_at: new Date(),
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
  test("should create new user", async () => {
    const newUser = createUser(user);

    await expect(usersMemory.length).toEqual(1);
  });
  //   test("should create new user", async () => {
  //     const { password, cpf, ...rest } = user;

  //     prismaMock.user.create.mockResolvedValue(user);

  //     await expect(createUserService(user)).resolves.toEqual(rest);
  //   });
});
