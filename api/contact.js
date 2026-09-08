const allowedEnquiryTypes = new Set([
  "Fresh Quail Eggs",
  "Fertile Eggs",
  "Bulk Order",
  "Business Supply",
  "General Enquiry",
]);

function clean(value, maxLength = 1000) {
  return String(value ?? "")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return clean(value, 5000)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const {
    fullName,
    phone,
    email,
    enquiryType,
    quantity,
    message,
    consent,
    website,
  } = req.body || {};

  // Honeypot: silently accept obvious bot submissions without sending email.
  if (clean(website, 200)) {
    return res.status(200).json({ ok: true });
  }

  const safeName = clean(fullName, 120);
  const safePhone = clean(phone, 60);
  const safeEmail = clean(email, 180);
  const safeType = clean(enquiryType, 80);
  const safeQuantity = clean(quantity, 120);
  const safeMessage = clean(message, 4000);

  if (!safeName || !safePhone || !safeMessage || !consent) {
    return res.status(400).json({
      error: "Please complete all required fields and accept the contact consent.",
    });
  }

  if (!isValidEmail(safeEmail)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  if (!allowedEnquiryTypes.has(safeType)) {
    return res.status(400).json({ error: "Please choose a valid enquiry type." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "sales@mybiglittlefarm.co.za";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "My Big Little Farm Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return res.status(500).json({
      error: "Email delivery is not configured yet. Please use WhatsApp in the meantime.",
    });
  }

  const subject = `Website enquiry: ${safeType} — ${safeName}`;

  const text = [
    "New My Big Little Farm website enquiry",
    "",
    `Name: ${safeName}`,
    `Phone: ${safePhone}`,
    safeEmail ? `Email: ${safeEmail}` : "Email: Not provided",
    `Enquiry type: ${safeType}`,
    safeQuantity ? `Quantity required: ${safeQuantity}` : "Quantity required: Not provided",
    "",
    "Message:",
    safeMessage,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#20281d;max-width:680px;margin:0 auto;">
      <div style="background:#123600;color:#fff;padding:22px 26px;border-radius:16px 16px 0 0;">
        <h1 style="font-size:24px;margin:0;">New website enquiry</h1>
      </div>
      <div style="border:1px solid #e5e8e2;border-top:0;padding:26px;border-radius:0 0 16px 16px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:7px 0;font-weight:700;width:150px;">Name</td><td>${escapeHtml(safeName)}</td></tr>
          <tr><td style="padding:7px 0;font-weight:700;">Phone</td><td>${escapeHtml(safePhone)}</td></tr>
          <tr><td style="padding:7px 0;font-weight:700;">Email</td><td>${safeEmail ? escapeHtml(safeEmail) : "Not provided"}</td></tr>
          <tr><td style="padding:7px 0;font-weight:700;">Enquiry type</td><td>${escapeHtml(safeType)}</td></tr>
          <tr><td style="padding:7px 0;font-weight:700;">Quantity</td><td>${safeQuantity ? escapeHtml(safeQuantity) : "Not provided"}</td></tr>
        </table>
        <div style="margin-top:22px;padding-top:20px;border-top:1px solid #e5e8e2;">
          <strong>Message</strong>
          <p style="white-space:pre-wrap;margin-bottom:0;">${escapeHtml(safeMessage)}</p>
        </div>
      </div>
    </div>
  `;

  try {
    const payload = {
      from: fromEmail,
      to: [toEmail],
      subject,
      text,
      html,
    };

    if (safeEmail) {
      payload.reply_to = safeEmail;
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const emailResult = await emailResponse.json().catch(() => ({}));

    if (!emailResponse.ok) {
      console.error("Resend email error:", emailResult);
      return res.status(502).json({
        error: "We could not send your enquiry right now. Please try again or use WhatsApp.",
      });
    }

    return res.status(200).json({ ok: true, id: emailResult.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      error: "We could not send your enquiry right now. Please try again or use WhatsApp.",
    });
  }
}
