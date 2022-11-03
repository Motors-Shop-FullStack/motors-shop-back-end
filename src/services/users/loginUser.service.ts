import { compare } from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/users.interface";

export const loginUserService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    {
      id: user!.id,
      account_type: user!.account_type,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};
