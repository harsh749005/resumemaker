import CertificationsStep from "@/components/CertificationsStep";
import EducationStep from "@/components/EducationStep";
import LanguagesStep from "@/components/LanguagesStep";
import PersonalInfoStep from "@/components/PersonalInfoStep";
import ResumeOptions from "@/components/ResumeOptions";
import ReviewStep from "@/components/ReviewStep";
import SkillsStep from "@/components/SkillStep";
import SummaryStep from "@/components/SummaryStep";
import WorkExperienceStep from "@/components/WorkExperience";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal_info: {},
    professional_summary: "",
    work_experience: [],
    education: [],
    skills: [],
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

  // 🔹 Add Languages
  const addLanguage = (lang) => {
    setFormData((prev) => ({
      ...prev,
      languages: [...prev.languages, lang],
    }));
  };
 
  // 🔹 Update Languages
  const updateLanguage = (index, value) => {
    const updated = formData.languages.map((lang, i) =>
      i === index ? value : lang
    );
    setFormData({ ...formData, languages: updated });
  };
  // 🔹 Add Skills
  const addSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  // 🔹 Update Skills
  const updateSkill = (index, value) => {
    const updated = formData.skills.map((skill, i) =>
      i === index ? value : skill
    );
    setFormData({ ...formData, skills: updated });
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
       <View style={{ flex: 1, padding: 20 }}>
        {/* Progress Bar */}
<View style={styles.progressContainer}>
  <View style={[styles.progressFill, { flex: step, backgroundColor: "#4caf50" }]} />
  <View style={{ flex: totalSteps - step, backgroundColor: "#eee" }} />
</View>
<Text style={styles.header}>Step {step} / {totalSteps}</Text>
      {/* Step Counter */}
      {/* <Text style={{ fontSize: 18, marginBottom: 10 }}>Step {step}/9</Text> */}

      {step === 1 && (
        <PersonalInfoStep
          data={formData.personal_info}
          updatePersonalInfo={updatePersonalInfo}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <WorkExperienceStep
          data={formData}
          addExperience={addWorkExperience}
          updateExperience={updateWorkExperience}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

                  {step === 3 && (
        <EducationStep
          data={formData}
          addEducation={addEducation}
          updateEducation={updateEducation}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
                  {step === 4 && (
        <LanguagesStep
          data={formData}
          addLanguage={addLanguage}
          updateLanguage={updateLanguage}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
                  {step === 5 && (
        <SkillsStep
          data={formData}
          addSkill={addSkill}
          updateSkill={updateSkill}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
            {step === 6 && (
        <CertificationsStep
          data={formData}
          addCertification={addCertification}
          updateCertification={updateCertification}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      
      {step === 7 && (
        <SummaryStep
          summary={formData.professional_summary}
          updateSummary={updateSummary}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 8 && (
        <ResumeOptions
          nextStep={nextStep}
          prevStep={prevStep}
          updateSelectedTemplate={updateSelectedTemplate}
        />
      )}
      {step === 9 && (
        <ReviewStep data={formData} prevStep={prevStep} />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  progressContainer: {
  flexDirection: "row",
  height: 12,
  borderRadius: 6,
  overflow: "hidden",
  marginBottom: 15,
},
progressFill: {
  borderRadius: 6,
},

})