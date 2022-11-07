import { prisma } from "../../app";
import { iAddressUpdate } from "../../interfaces/users.interface";

export const updateAddressUserService = async (
  userId: string,
  data: iAddressUpdate
): Promise<iAddressUpdate> => {
  const address = await prisma.address.update({
    where: {
      user_id: userId,
    },
    data: {
      ...data,
    },
  });

  return address;
};
