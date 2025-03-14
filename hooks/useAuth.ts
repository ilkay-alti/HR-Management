// hooks/useAuth.ts
"use client";

import {
  forgetPassword,
  getUser,
  login,
  logout,
  newPassword,
  register,
  tokenGeneration2FA,
  verifyToken2FA,
} from "@/actions/auth";
import {
  ForgetPasswordSchemaType,
  LoginSchemaType,
  NewPasswordSchemaType,
  RegisterSchemaType,
  GenerateTwoFactorSchemaType,
  VerifyTwoFactorSchemaType,
} from "@/validations/Auth.validations";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function useLogin() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: LoginSchemaType) => login(data.email, data.password),
    onSuccess: () => {
      toast.success("Logged in successfully!");
      router.push("/dashboard");
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

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterSchemaType) =>
      register(data.email, data.password, data.name),
    onSuccess: () => {
      toast.success("Account created successfully!");
      router.push("/dashboard");
      router.refresh();
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(errorMessage);
      return { message: errorMessage };
    },
  });
}

export function useLogout() {
  const router = useRouter();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logged out successfully!");
      router.push("/dashboard");
      router.refresh();
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(errorMessage);
      return { message: errorMessage };
    },
  });
}

//forget password

export function useForgetPassword() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: ForgetPasswordSchemaType) => forgetPassword(data.email),
    onSuccess: () => {
      toast.success("Password reset link sent to your email!");
      router.push("/");
      router.refresh();
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(errorMessage);
      if (error.message === "Email not found pls register") {
        router.push("/register");
      }
      return { message: errorMessage };
    },
  });
}
//new password
export function useNewPassword() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: NewPasswordSchemaType) =>
      newPassword(data.token, data.password),
    onSuccess: () => {
      toast.success("Password reset successfully!");
      router.push("/login");
      router.refresh();
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(errorMessage);
      if (error.message === "Invalid token") {
        router.push("/");
      }
      return { message: errorMessage };
    },
  });
}

// generated 2FA code

export function useGenerate2FA() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: GenerateTwoFactorSchemaType) =>
      tokenGeneration2FA(data.userId),
    onSuccess: () => {
      toast.success("2FA code sent to your email!");
      router.push("/otp");
      router.refresh();
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(errorMessage);
      return { message: errorMessage };
    },
  });
}

// verify 2FA code
export function useVerify2FA() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: VerifyTwoFactorSchemaType) => verifyToken2FA(data.token),
    onSuccess: () => {
      toast.success("2FA code verified successfully!");
      router.push("/dashboard");
      router.refresh();
    },

    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(errorMessage);
      return { message: errorMessage };
    },
  });
}

// user hook
export function useUser() {
  const router = useRouter();

  return useMutation({
    mutationFn: () => getUser(),
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      toast.error(errorMessage);
      if (error.message === "User not found") {
        router.push("/login");
      }
      return { message: errorMessage };
    },
  });
}
