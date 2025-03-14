import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Corrected the SMTP host
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.NEXTAUTH_URL}/new-password/${token}`;

  await transporter.sendMail({
    to: email,
    subject: "Reset your Password",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h1 style="color: #4A90E2; text-align: center;">Password Reset Request</h1>
        <p style="font-size: 16px; line-height: 1.6;">You have requested to reset your password. Please click the button below to proceed with the password reset process.</p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="${confirmLink}" style="background-color: #4A90E2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-size: 16px;">Reset Password</a>
        </div>
        <p style="font-size: 14px; color: #777; text-align: center;">If you did not request a password reset, please ignore this email or contact support.</p>
        <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #999;">
          <p>This link will expire in 1 hour for security reasons.</p>
        </div>
      </div>
    `,
  });
};

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await transporter.sendMail({
    from: "nextauthv5@resend.dev",
    to: email,
    subject: "Your 2FA Verification Code",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; text-align: center;">
        <h1 style="color: #4A90E2; margin-bottom: 20px;">Two-Factor Authentication</h1>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Your verification code is below. Enter it in the required field to complete your login.
        </p>
        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px; display: inline-block; margin-bottom: 20px;">
          <h2 style="color: #333; font-size: 28px; margin: 0; letter-spacing: 5px;">${token}</h2>
        </div>
        <p style="font-size: 14px; color: #777; margin-bottom: 20px;">
          This code will expire in 10 minutes. Please do not share it with anyone.
        </p>
        <p style="font-size: 14px; color: #777;">
          If you did not request this code, please ignore this email or contact support.
        </p>
      </div>
    `,
  });
};
