export function fillTemplate(template, formData) {
  return template
    .replace("{{name}}", formData.personal_info.name || "")
    .replace("{{email}}", formData.personal_info.email || "")
    .replace("{{summary}}", formData.professional_summary || "")
    .replace(
      "{{skills}}",
      Object.entries(formData.skills)
        .map(([category, skills]) =>
          skills.length > 0
            ? `<p><strong>${category}:</strong> ${skills.join(", ")}</p>`
            : ""
        )
        .join("")
    )
    .replace(
      "{{experience}}",
      formData.work_experience
        .map(
          (exp) =>
            `<li><strong>${exp.role}</strong> at ${exp.company} (${exp.years})</li>`
        )
        .join("")
    )
    .replace(
      "{{education}}",
      formData.education
        .map((ed) => `<li>${ed.degree} - ${ed.school} (${ed.year})</li>`)
        .join("")
    );
}
