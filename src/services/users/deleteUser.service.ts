import { prisma } from "../../app";

export const deleteUserService = async (userId: string): Promise<void> => {
  const user = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return;
};
