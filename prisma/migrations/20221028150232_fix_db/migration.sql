/*
  Warnings:

  - The `type` column on the `sales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `published` column on the `sales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `address` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SELLER', 'BUYER');

-- CreateEnum
CREATE TYPE "Published" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL DEFAULT 'BUYER',
DROP COLUMN "published",
ADD COLUMN     "published" "Published" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "birthdate" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "description" SET DATA TYPE TEXT,
ALTER COLUMN "address" SET NOT NULL;
