/*
  Warnings:

  - A unique constraint covering the columns `[creativeHrId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creativeHrId` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "creativeHrId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_creativeHrId_key" ON "Employee"("creativeHrId");
