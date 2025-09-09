export function fillTemplate(template, formData) {
  const formatSkills = () => {
    const skillsArray = [];
    
    // Programming Languages
    if (formData.skills?.languages?.length > 0) {
      skillsArray.push(`<strong>Programming Languages:</strong> ${formData.skills.languages.join(', ')}`);
    }
    
    // Web Development (combine frameworks and tools)
    const webDevSkills = [
      ...(formData.skills?.frameworks || []),
      ...(formData.skills?.tools || [])
    ];
    if (webDevSkills.length > 0) {
      skillsArray.push(`<strong>Web Development:</strong> ${webDevSkills.join(', ')}`);
    }
    
    // DevOps & Tools (if you want to separate some tools)
    if (formData.skills?.databases?.length > 0) {
      skillsArray.push(`<strong>Database:</strong> ${formData.skills.databases.join(', ')}`);
    }
    
    return skillsArray.join('<br>');
  };

  const formatExperience = () => {
    return formData.work_experience
      ?.map(exp => {
        const duration = exp.start && exp.end 
          ? `${exp.start} - ${exp.end}` 
          : (exp.year || '');
        
        return `
          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <strong>${exp.company || ''}</strong>
              <em>${duration}</em>
            </div>
            <div style="font-style: italic; margin-bottom: 8px;">
              ${exp.role || ''}
            </div>
            ${exp.experience ? `<div>${exp.experience}</div>` : ''}
          </div>
        `;
      })
      .join('') || '';
  };

  const formatEducation = () => {
    return formData.education
      ?.map(ed => {
        const duration = ed.start && ed.end 
          ? `${ed.start} - ${ed.end}` 
          : (ed.year || '');
        
        return `
          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
              <strong>${ed.degree || ''}</strong>
              <em>${duration}</em>
            </div>
            <div>${ed.school || ''}</div>
            ${ed.grade ? `<div><strong>Major GPA:</strong> ${ed.grade}</div>` : ''}
          </div>
        `;
      })
      .join('') || '';
  };

  const formatProjects = () => {
    return formData.projects
      ?.map(project => {
        return `
          <div style="margin-bottom: 15px;">
            <div style="margin-bottom: 5px;">
              <strong>${project.name || ''}</strong> - 
              <em>${project.technologies || ''}</em>
            </div>
            ${project.description ? `<div>${project.description}</div>` : ''}
            ${project.liveUrl ? `<div><strong>Live demo:</strong> <a href="${project.liveUrl}">${project.liveUrl}</a></div>` : ''}
          </div>
        `;
      })
      .join('') || '';
  };
console.log("name",formData.personal_info);
  // Professional resume template
  const professionalTemplate = `
    <div style="font-family: 'Times New Roman', serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6;">
      
      <!-- Header -->
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
          ${formData.personal_info?.name || ''}
        </h1>
        <div style="margin-top: 8px; font-size: 12px;">
          ${formData.personal_info?.title || 'Full Stack Developer'} | 
          ${formData.personal_info?.location || ''} | 
          ${formData.personal_info?.phone || ''}
        </div>
        <div style="margin-top: 5px; font-size: 12px;">
          📧 ${formData.personal_info?.email || ''} | 
          🔗 ${formData.personal_info?.linkedin || ''} | 
          💼 ${formData.personal_info?.portfolio || ''}
        </div>
      </div>

      <!-- Summary -->
      ${formData.professional_summary ? `
      <div style="margin-bottom: 25px;">
        <h2 style="font-size: 16px; margin-bottom: 10px; border-bottom: 1px solid #000; padding-bottom: 3px;">
          Summary of qualification
        </h2>
        <div style="font-size: 14px;">
          ${formData.professional_summary}
        </div>
      </div>
      ` : ''}

      <!-- Experience -->
      ${formData.work_experience?.length > 0 ? `
      <div style="margin-bottom: 25px;">
        <h2 style="font-size: 16px; margin-bottom: 15px; border-bottom: 1px solid #000; padding-bottom: 3px;">
          Experience
        </h2>
        <div style="font-size: 14px;">
          ${formatExperience()}
        </div>
      </div>
      ` : ''}

      <!-- Projects -->
      ${formData.projects?.length > 0 ? `
      <div style="margin-bottom: 25px;">
        <h2 style="font-size: 16px; margin-bottom: 15px; border-bottom: 1px solid #000; padding-bottom: 3px;">
          Projects
        </h2>
        <div style="font-size: 14px;">
          ${formatProjects()}
        </div>
      </div>
      ` : ''}

      <!-- Skills -->
      ${Object.keys(formData.skills || {}).length > 0 ? `
      <div style="margin-bottom: 25px;">
        <h2 style="font-size: 16px; margin-bottom: 10px; border-bottom: 1px solid #000; padding-bottom: 3px;">
          Skills
        </h2>
        <div style="font-size: 14px;">
          ${formatSkills()}
        </div>
      </div>
      ` : ''}

      <!-- Education -->
      ${formData.education?.length > 0 ? `
      <div style="margin-bottom: 25px;">
        <h2 style="font-size: 16px; margin-bottom: 15px; border-bottom: 1px solid #000; padding-bottom: 3px;">
          Education
        </h2>
        <div style="font-size: 14px;">
          ${formatEducation()}
        </div>
      </div>
      ` : ''}

    </div>
  `;

  // If a custom template is provided, use the replacement logic
  if (template && template !== '') {
    return template
      .replace("{{name}}", formData.personal_info?.name || "")
      .replace("{{email}}", formData.personal_info?.email || "")
      .replace("{{summary}}", formData.professional_summary || "")
      .replace("{{skills}}", formatSkills())
      .replace("{{experience}}", formatExperience())
      .replace("{{education}}", formatEducation())
      .replace("{{projects}}", formatProjects());
  }

  // Return the professional template by default
  return professionalTemplate;
}