/*
  Warnings:

  - The `published` column on the `sales` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "sales" DROP COLUMN "published",
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT true;

-- DropEnum
DROP TYPE "Published";
