import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendVerificationEmail = async (email, token) => {
  const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

  const msg = {
    to: email,
    from: {
      name : 'initDSA',
      // email : 'tvisha.edu@gmail.com'
      email : process.env.EMAIL_FROM
    },
    subject: 'Verify your email for initDSA',
    html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; background-color: #f9fafb; color: #111827;">
        <div style="max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #111827; padding: 20px;">
            <h1 style="color: #ffffff; font-size: 24px; margin: 0;">🚀 Welcome to <span style="color: #3b82f6;">initDSA</span>!</h1>
        </div>
        <div style="padding: 20px;">
            <p style="font-size: 16px;">Hi there 👋,</p>
            <p style="font-size: 16px;">
            Thanks for signing up! To start solving problems and tracking your progress,
            please verify your email by clicking the button below.
            </p>
            <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationLink}" style="background-color: #3b82f6; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: 600; border-radius: 6px; display: inline-block;">
                ✅ Verify Email
            </a>
            </div>
            <p style="font-size: 14px; color: #6b7280;">
            If the button above doesn't work, you can also copy and paste this link into your browser:
            </p>
            <p style="font-size: 14px; color: #3b82f6; word-break: break-all;">
            ${verificationLink}
            </p>
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 12px; color: #9ca3af; text-align: center;">
            This link will expire in 24 hours. If you didn’t request this, you can safely ignore this email.
            </p>
        </div>
        </div>
    </div>
    `

  };

  await sgMail.send(msg).then(() => {
    console.log("📧 Using from email:", process.env.EMAIL_FROM);
    console.log("✅ Email sent to", email);
  }).catch((error) => {
    console.log("📧 Using from email:", process.env.EMAIL_FROM);
    console.error("❌ SendGrid error:", error.response?.body || error);
  });
};

