"use server";

export async function submitIssue(formData: FormData) {
  const area = formData.get("area");
  const securityLevel = formData.get("security-level");
  const subject = formData.get("subject");
  const description = formData.get("description");

  console.log({ area, securityLevel, subject, description });
}
