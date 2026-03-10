interface ContactNotificationEmailProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export function ContactNotificationEmail({ name, email, phone, company, message }: ContactNotificationEmailProps) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%); padding: 32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <img 
                      src="https://threemates.tech/assets/describedLogo.png" 
                      alt="Threemates" 
                      width="160" 
                      style="display:block;max-width:160px;height:auto;" 
                    />
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;background:rgba(255,255,255,0.2);color:#ffffff;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;padding:6px 14px;border-radius:50px;">
                      New Inquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#0f172a;">
                📬 New Contact Form Submission
              </h1>
              <p style="margin:0 0 28px;font-size:14px;color:#64748b;line-height:1.5;">
                Someone just filled out the contact form on threemates.tech
              </p>

              <!-- Contact Details -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;">Name</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#0f172a;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;">Email</p>
                    <p style="margin:0;font-size:16px;color:#0f172a;">
                      <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;font-weight:500;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;">Phone</p>
                    <p style="margin:0;font-size:16px;color:#0f172a;">
                      <a href="tel:${phone}" style="color:#2563eb;text-decoration:none;font-weight:500;">${phone || "Not provided"}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;">Company</p>
                    <p style="margin:0;font-size:16px;color:#0f172a;">${company || "Not provided"}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;">Message</p>
                    <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <div style="margin-top:28px;text-align:center;">
                <a href="mailto:${email}?subject=Re: Your inquiry to Threemates&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out to us.%0D%0A%0D%0A" style="display:inline-block;background-color:#2563eb;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 32px;border-radius:50px;box-shadow:0 4px 12px rgba(37,99,235,0.3);">
                  Reply to ${name}
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;font-size:11px;color:#cbd5e1;text-align:center;">
                This email was sent from the contact form at threemates.tech<br />
                ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} at ${new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
