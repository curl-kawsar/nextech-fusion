"use server";

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  console.log("[Contact Form Submission]", {
    name,
    email,
    company: formData.get("company")?.toString().trim() || "",
    message,
    submittedAt: new Date().toISOString(),
  });

  return {
    success: true,
    message:
      "Thanks for reaching out! We'll get back to you within 24 hours.",
  };
}
