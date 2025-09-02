export function fillTemplate(template, formData) {
  return template
    .replace("{{name}}", formData.personal_info.name || "")
    .replace("{{email}}", formData.personal_info.email || "")
    .replace("{{summary}}", formData.professional_summary || "")
    .replace("{{skills}}", formData.skills.join(", "))
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