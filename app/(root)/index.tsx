import CertificationsStep from "@/components/CertificationsStep";
import EducationStep from "@/components/EducationStep";
import LanguagesStep from "@/components/LanguagesStep";
import ResumeOptions from "@/components/ResumeOptions";
import ReviewStep from "@/components/ReviewStep";
import SkillsStep from "@/components/SkillStep";
import SummaryStep from "@/components/SummaryStep";
import WorkExperienceStep from "@/components/WorkExperience";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SafeScreen from "@/components/appcomp/SafeScreen";
import Projects from "@/components/Projects";

export default function Index() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal_info: {},
    professional_summary: "",
    work_experience: [],
    projects:[],
    education: [],
      skills: {
    languages: [],
    frameworks: [],
    tools: [],
    databases: []
  },
    certifications: [],
    languages: [],
    selected_template: "",
  });
  // 🔹 Update Personal Info (nested object)
  const updatePersonalInfo = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personal_info: { ...prev.personal_info, [field]: value },
    }));
  };

  // 🔹 Add Work Experience
  const addWorkExperience = (exp) => {
    setFormData((prev) => ({
      ...prev,
      work_experience: [...prev.work_experience, exp],
    }));
  };

  // 🔹 Update Work Experience
  const updateWorkExperience = (index, field, value) => {
    const updated = formData.work_experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setFormData({ ...formData, work_experience: updated });
  };
  // Remove Exprerienc
  const removeExperience = (index) => {
    const updated = formData.work_experience.filter((_, i) => i !== index);
    setFormData({ ...formData, work_experience: updated });
  };
  // add projects
  const addProjects = (pro) => {
    setFormData((prev)=>({
      ...prev,
      projects:[...prev.projects,pro],
    }))
  }
  // update project
  const updateProjects = (index,field,value) =>{
    const updated = formData.projects.map((pro,i)=>
      i === index ? {...pro, [field] : value } : pro
    )
    setFormData({ ...formData, projects: updated });
  }
    // Remove Exprerienc
  const removeProjects = (index) => {
    const updated = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: updated });
  };

  // 🔹 Update Summary
  const updateSummary = (value) => {
    setFormData((prev) => ({ ...prev, professional_summary: value }));
  };

  // add Certification
  const addCertification = (cert) => {
    setFormData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, cert],
    }));
  };

  // 🔹 Update Certifications
  const updateCertification = (index, value) => {
    const updated = formData.certifications.map((cert, i) =>
      i === index ? value : cert
    );
    setFormData({ ...formData, certifications: updated });
  };

  // add Education
  const addEducation = (edu) => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, edu],
    }));
  };

  // 🔹 Update Education
  const updateEducation = (index, field, value) => {
    const updated = formData.education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setFormData({ ...formData, education: updated });
  };
  const handleRemoveEducationExperience = (index) => {
    const updated = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: updated });
  };

  // 🔹 Add & Remove Languages
  const handleLanguage = (lang) => {
    setFormData((prev) => {
      const alreadySelected = prev.languages.includes(lang);

      return {
        ...prev,
        languages: alreadySelected
          ? prev.languages.filter((item) => item !== lang) // remove if already selected
          : [...prev.languages, lang], // add if not selected
      };
    });
  };

  // 🔹 Update Languages
  const updateLanguage = (index, value) => {
    const updated = formData.languages.map((lang, i) =>
      i === index ? value : lang
    );
    setFormData({ ...formData, languages: updated });
  };

// Your updateSkill function:
const updateSkill = (category, skill) => {
  setFormData((prev) => {
    const currentSkills = prev.skills[category] || [];
    const alreadySelected = currentSkills.includes(skill);
    
    return {
      ...prev,
      skills: {
        ...prev.skills,
        [category]: alreadySelected
          ? currentSkills.filter((item) => item !== skill)
          : [...currentSkills, skill],
      }
    };
  });
};

  // 🔹 Update Selected Template
  const updateSelectedTemplate = (value) => {
    console.log("Selected Template in Index:", value);
    setFormData((prev) => ({ ...prev, selected_template: value }));
  };

  // 🔹 Navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const totalSteps = 9;
  const progress = step / totalSteps;
  return (
    <SafeScreen>
      <View style={{ flex: 1, padding: 20 }}>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressFill,
              { flex: step, backgroundColor: "#000" },
            ]}
          />
          <View style={{ flex: totalSteps - step, backgroundColor: "#eee" }} />
        </View>
        {/* <Text style={styles.header}>Step {step} / {totalSteps}</Text> */}
        {/* Step Counter */}
        {/* <Text style={{ fontSize: 18, marginBottom: 10 }}>Step {step}/9</Text> */}

        {step === 1 && (
          // <PersonalInfoStep
          //   data={formData.personal_info}
          //   updatePersonalInfo={updatePersonalInfo}
          //   nextStep={nextStep}
          // />
          // <ResumeOptions
          //   nextStep={nextStep}
          //   prevStep={prevStep}
          //   updateSelectedTemplate={updateSelectedTemplate}
          // />
          <Projects
          data={formData}
          addProjects={addProjects}
          updateProjects={updateProjects}
          removeProjects={removeProjects}
          nextStep={nextStep}
          prevStep={prevStep}
          />

        )}

        {step === 2 && (
          <WorkExperienceStep
            data={formData}
            addExperience={addWorkExperience}
            updateExperience={updateWorkExperience}
            removeExperience={removeExperience}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <EducationStep
            data={formData}
            addEducation={addEducation}
            updateEducation={updateEducation}
            removeEducationExperience={handleRemoveEducationExperience}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {/* {step === 4 && (
          <LanguagesStep
            data={formData}
            handleLanguage={handleLanguage}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )} */}
        {step === 4 && (
          <SkillsStep
            data={formData}
            updateSkill={updateSkill}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {/* {step === 6 && (
          <CertificationsStep
            data={formData}
            addCertification={addCertification}
            updateCertification={updateCertification}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )} */}

        {step === 5 && (
          
          <SummaryStep
            data={formData}
            summary={formData.professional_summary}
            updateSummary={updateSummary}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {/* {step === 6 && (
          <ResumeOptions
            nextStep={nextStep}
            prevStep={prevStep}
            updateSelectedTemplate={updateSelectedTemplate}
          />
        )} */}
        {step === 6 && <ReviewStep data={formData} prevStep={prevStep} />}
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: "row",
    height: 2,
    // borderRadius: 6,
    overflow: "hidden",
    marginBottom: 15,
  },
  progressFill: {
    // borderRadius: 6,
  },
});
