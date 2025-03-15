//hooks/useEmployees

import {
  createEmployee,
  deleteEmployee,
  getEmployees,
  getEmployeesByCreativeHrId,
  getEmployeesById,
  updateEmployee,
} from "@/actions/employee";
import { IEmployee } from "../validations/Employee.validation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

//Create a Employee Hook
export function useCreateEmployee() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: IEmployee) => createEmployee(data),
    onSuccess: () => {
      toast.success("Employee created successfully!");

      router.refresh();
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
        return { message: error.message };
      }
      toast.error("An unknown error occurred.");
      return { message: "An unknown error occurred." };
    },
  });
}

//Update Employee Hook
export function useUpdateEmployee() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: IEmployee) => updateEmployee(data),
    onSuccess: () => {
      toast.success("Employee updated successfully!");

      router.refresh();
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
        return { message: error.message };
      }
      toast.error("An unknown error occurred.");
      return { message: "An unknown error occurred." };
    },
  });
}

//Delete Employee Hook
export function useDeleteEmployee() {
  const router = useRouter();
  return useMutation({
    mutationFn: (id: number) => deleteEmployee(id),
    onSuccess: () => {
      toast.success("Employee deleted successfully!");

      router.refresh();
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
        return { message: error.message };
      }
      toast.error("An unknown error occurred.");
      return { message: "An unknown error occurred." };
    },
  });
}

//Get Employee Hook
export function useGetEmployee() {
  return useMutation({
    mutationFn: () => getEmployees(),
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
        return { message: error.message };
      }
      toast.error("An unknown error occurred.");
      return { message: "An unknown error occurred." };
    },
  });
}

//Get Employees Hook BY CreativeHrId
export function useGetEmployeesByCreativeHrId() {
  return useMutation({
    mutationFn: () => getEmployeesByCreativeHrId(),
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
        return { message: error.message };
      }
      toast.error("An unknown error occurred.");
      return { message: "An unknown error occurred." };
    },
  });
}

//Get Employee By ID Hook
export function useGetEmployeeById() {
  return useMutation({
    mutationFn: (id: number) => getEmployeesById(id),
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
        return { message: error.message };
      }
      toast.error("An unknown error occurred.");
      return { message: "An unknown error occurred." };
    },
  });
}
