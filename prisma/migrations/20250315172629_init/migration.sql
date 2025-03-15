/*
  Warnings:

  - You are about to drop the column `departmentId` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `designation` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `joiningDate` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `officeLocationId` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the `AccountAccess` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeesOnProjects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OfficeLocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `officeLocation` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `maritalStatus` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gender` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "AccountAccess" DROP CONSTRAINT "AccountAccess_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_officeLocationId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeesOnProjects" DROP CONSTRAINT "EmployeesOnProjects_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeesOnProjects" DROP CONSTRAINT "EmployeesOnProjects_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_employeeId_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "departmentId",
DROP COLUMN "designation",
DROP COLUMN "joiningDate",
DROP COLUMN "officeLocationId",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "officeLocation" TEXT NOT NULL,
DROP COLUMN "maritalStatus",
ADD COLUMN     "maritalStatus" TEXT NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT NOT NULL;

-- DropTable
DROP TABLE "AccountAccess";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Document";

-- DropTable
DROP TABLE "EmployeesOnProjects";

-- DropTable
DROP TABLE "OfficeLocation";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Project";

-- DropEnum
DROP TYPE "DocumentType";

-- DropEnum
DROP TYPE "Gender";

-- DropEnum
DROP TYPE "MaritalStatus";

-- DropEnum
DROP TYPE "PaymentMethod";

-- DropEnum
DROP TYPE "ProjectStatus";
