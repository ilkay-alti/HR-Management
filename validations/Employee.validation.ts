import { z } from "zod";

export const EmployeeSchema = z.object({
  id: z.number().int().positive(), // id Int @id @default(autoincrement())

  // Personal Information
  firstName: z.string().min(1, "First name is required"), // firstName String
  lastName: z.string().min(1, "Last name is required"), // lastName String
  phone: z.string().min(1, "Phone is required"), // phone String
  personalEmail: z.string().email("Invalid email format"), // personalEmail String @unique
  birthDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"), // birthDate DateTime
  maritalStatus: z.string().min(1, "Marital status is required"), // maritalStatus String
  gender: z.string().min(1, "Gender is required"), // gender String
  nationality: z.string().min(1, "Nationality is required"), // nationality String
  address: z.string().min(1, "Address is required"), // address String

  // Employment Details
  employeeId: z.string().uuid(), // employeeId String @unique
  username: z.string().min(1, "Username is required"), // username String @unique
  employeeType: z.string().min(1, "Employee type is required"), // employeeType String
  department: z.string().min(1, "Department is required"), // department String
  workingDays: z.string().min(1, "Working days are required"), // workingDays String
  officeLocation: z.string().min(1, "Office location is required"), // officeLocation String
});

export const EmployeeUpdateSchema = z.object({
  id: z.number().int().positive(), // id Int @id @default(autoincrement())
  data: z.object({
    id: z.number().int().positive(), // id Int @id @default(autoincrement())

    // Personal Information
    firstName: z.string().min(1, "First name is required"), // firstName String
    lastName: z.string().min(1, "Last name is required"), // lastName String
    phone: z.string().min(1, "Phone is required"), // phone String
    personalEmail: z.string().email("Invalid email format"), // personalEmail String @unique
    birthDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"), // birthDate DateTime
    maritalStatus: z.string().min(1, "Marital status is required"), // maritalStatus String
    gender: z.string().min(1, "Gender is required"), // gender String
    nationality: z.string().min(1, "Nationality is required"), // nationality String
    address: z.string().min(1, "Address is required"), // address String

    // Employment Details
    employeeId: z.string().uuid(), // employeeId String @unique
    username: z.string().min(1, "Username is required"), // username String @unique
    employeeType: z.string().min(1, "Employee type is required"), // employeeType String
    department: z.string().min(1, "Department is required"), // department String
    workingDays: z.string().min(1, "Working days are required"), // workingDays String
    officeLocation: z.string().min(1, "Office location is required"), // officeLocation String
  }),
});
export type IEmployee = z.infer<typeof EmployeeSchema>;
export type IEmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;
