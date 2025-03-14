import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Your password must be at least 6 characters."),
});

export const registerSchema = z.object({
  email: z.string().email("Geçerli bir email giriniz"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
});

export const forgetPasswordSchema = z.object({
  email: z.string().email("Geçerli bir email giriniz"),
});

export const newPasswordSchema = z.object({
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
  token: z.string(),
});

export const generateTwoFactorSchema = z.object({
  userId: z.string(),
});

export const verifyTwoFactorSchema = z.object({
  token: z.string().length(6, "Doğrulama kodu 6 karakter olmalıdır"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type ForgetPasswordSchemaType = z.infer<typeof forgetPasswordSchema>;
export type NewPasswordSchemaType = z.infer<typeof newPasswordSchema>;
export type GenerateTwoFactorSchemaType = z.infer<
  typeof generateTwoFactorSchema
>;
export type VerifyTwoFactorSchemaType = z.infer<typeof verifyTwoFactorSchema>;
