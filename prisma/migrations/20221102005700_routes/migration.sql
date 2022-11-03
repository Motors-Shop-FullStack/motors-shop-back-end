/*
  Warnings:

  - You are about to drop the column `type` on the `sales` table. All the data in the column will be lost.
  - The `account_type` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "sales" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "account_type",
ADD COLUMN     "account_type" "Type" NOT NULL DEFAULT 'BUYER';
