-- CreateEnum
CREATE TYPE "Vehicle_type" AS ENUM ('Car', 'Motorcycle');

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "type" "Vehicle_type" NOT NULL DEFAULT 'Car';
