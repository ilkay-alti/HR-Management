//actions/employess

import { getSession } from "@/utils/auth-session";
import prisma from "@/utils/prisma";
import { IEmployee } from "@/validations/Employee.validation";

//New Create Employee

export async function createEmployee(data: IEmployee) {
  const session = await getSession();
  if (!session.userId) {
    throw new Error("You are not logged in");
  }
  const employee = await prisma.employee.create({
    data: {
      ...data,
      creativeHrId: session.userId,
    },
  });

  if (!employee) {
    throw new Error("Error in creating employee");
  }

  return { success: true };
}

//Update Employee

export async function updateEmployee(data: IEmployee) {
  const session = await getSession();

  if (!session.userId) {
    throw new Error("You are not logged in");
  }

  const employee = await prisma.employee.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      creativeHrId: session.userId,
    },
  });

  if (!employee) {
    throw new Error("Error in updating employee");
  }
  return { success: true };
}

//Delete Employee

export async function deleteEmployee(id: number) {
  const employee = await prisma.employee.delete({
    where: {
      id,
    },
  });

  if (!employee) {
    throw new Error("Error in deleting employee");
  }
  return { success: true };
}

//Get Employee

export async function getEmployees() {
  const employees = await prisma.employee.findMany();

  if (!employees) {
    throw new Error("Error in fetching employees");
  }
  return employees;
}

//Get Employee by ID

export async function getEmployeesById(id: number) {
  const employee = await prisma.employee.findUnique({
    where: {
      id,
    },
  });

  if (!employee) {
    throw new Error("Error in fetching employee");
  }
  return employee;
}
//Get Employee by Creative HR ID

export async function getEmployeesByCreativeHrId() {
  const session = await getSession();
  if (!session.userId) {
    throw new Error("You are not logged in");
  }
  const employees = await prisma.employee.findMany({
    where: {
      creativeHrId: session.userId,
    },
  });

  if (!employees) {
    throw new Error("Error in fetching employees");
  }
  return employees;
}
