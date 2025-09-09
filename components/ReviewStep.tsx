import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { generatePDF } from "./GeneratePDF";
const ReviewStep = ({ data, prevStep }) => {
  const handleSubmit = async () => {
    try {
      console.log("Final Form Data:", data);
      alert("Form Submitted Successfully!");
      const pdfPath = await generatePDF(data);
      alert(`PDF saved at: ${pdfPath}`);
      // Here you can also open/share the PDF if you want
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("Something went wrong while generating the PDF.");
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
        Step 4: Review Your Information
      </Text>

      <Text style={{ fontWeight: "bold" }}>Personal Info</Text>
      <Text>Name: {data.personal_info.name}</Text>
      <Text>Email: {data.personal_info.email}</Text>

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>Work Experience</Text>
      {data.work_experience.map((exp, i) => (
        <View key={i} style={{ marginBottom: 6 }}>
          <Text>Company: {exp.company}</Text>
          <Text>Role: {exp.role}</Text>
          <Text>Start: {exp.start}</Text>
          <Text>End: {exp.end}</Text>
        </View>
      ))}

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>Education</Text>
      {data.education.map((edu, i) => (
        <View key={i} style={{ marginBottom: 6 }}>
          <Text>Degree: {edu.degree}</Text>
          <Text>Field of Study: {edu.field}</Text>
          <Text>Institution: {edu.institution}</Text>
          <Text>cgpa: {edu.cgpa}</Text>
        </View>
      ))}
      <Text style={{ fontWeight: "bold", marginTop: 10 }}>Skills</Text>
      {Object.entries(data.skills).map(([category, skills], i) => (
        <View key={i} style={{ marginTop: 5 }}>
          <Text style={{ fontWeight: "600" }}>{category}</Text>
          {skills.map((skill, j) => (
            <Text key={j}>• {skill}</Text>
          ))}
        </View>
      ))}

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>Certifications</Text>
      {data.certifications.map((cert, i) => (
        <Text key={i}>{cert}</Text>
      ))}
      {/* languages */}
      <Text style={{ fontWeight: "bold", marginTop: 10 }}>Languages</Text>
      {data.languages.map((lang, i) => (
        <Text key={i}>{lang}</Text>
      ))}
      <Text style={{ fontWeight: "bold", marginTop: 10 }}>
        Professional Summary
      </Text>
      <Text>{data.professional_summary}</Text>
      {/* Selected Template */}
      <Text style={{ fontWeight: "bold", marginTop: 10 }}>
        Selected Template
      </Text>
      <Text>{data.selected_template}</Text>

      {/* Navigation */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Button title="Back" onPress={prevStep} />
        <Button title="Submit & Generate PDF" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default ReviewStep;
