import nodemailer from 'nodemailer';

export const sendPasswordResetEmail = async ({ to, resetUrl, name }) => {
  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  // Check if SMTP is configured
  if (host && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: Number(port) || 587,
        secure: Number(port) === 465,
        auth: { user, pass }
      });

      const message = {
        from: `"${process.env.EMAIL_FROM_NAME || 'Yatra India Security'}" <${process.env.EMAIL_FROM_ADDRESS || user}>`,
        to,
        subject: 'Password Reset Request - Yatra India',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0b132b; color: #f8fafc; border-radius: 16px;">
            <h2 style="color: #ff9933; margin-top: 0;">YATRA INDIA</h2>
            <p>Hello ${name || 'Traveler'},</p>
            <p>You requested a password reset for your Yatra India account. Click the button below to set a new password:</p>
            <div style="margin: 30px 0;">
              <a href="${resetUrl}" style="background: linear-gradient(135deg, #ff9933, #e65c00); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Reset Password</a>
            </div>
            <p style="font-size: 13px; color: #94a3b8;">This link will expire in 1 hour. If you did not request this, please ignore this email.</p>
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0;" />
            <p style="font-size: 11px; color: #64748b;">Yatra India Travel & Tourism Platform</p>
          </div>
        `
      };

      await transporter.sendMail(message);
      console.log(`[EmailService] Password reset email successfully sent to: ${to}`);
      return { sent: true };
    } catch (err) {
      console.error(`[EmailService] SMTP error sending to ${to}:`, err.message);
    }
  }

  // Graceful fallback for development / local testing
  console.log('\n=============================================================');
  console.log('📬 [EMAIL SERVICE] Password Reset Link Generated:');
  console.log(`👤 Recipient: ${to}`);
  console.log(`🔗 Reset URL: ${resetUrl}`);
  console.log('(To send real emails, configure EMAIL_HOST, EMAIL_USER, EMAIL_PASSWORD in .env)');
  console.log('=============================================================\n');

  return { sent: false, simulated: true, resetUrl };
};

export default { sendPasswordResetEmail };
