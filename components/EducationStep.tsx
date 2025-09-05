import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const EducationStep = ({ data, addEducation, updateEducation, nextStep, prevStep }) => {
  const education = data.education || [];

  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Step: Education</Text>

      {education.map((edu, index) => (
        <View
          key={index}
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            marginBottom: 12,
          }}
        >
          <TextInput
            style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 8, marginTop: 6 }}
            placeholder="School/University"
            value={edu.institution || ""}
            onChangeText={(val) => updateEducation(index, "institution", val)}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 8, marginTop: 6 }}
            placeholder="Degree"
            value={edu.field || ""}
            onChangeText={(val) => updateEducation(index, "field", val)}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 8, marginTop: 6 }}
            placeholder="cgpa/10 or percentage"
            value={edu.cgpa || ""}
            onChangeText={(val) => updateEducation(index, "cgpa", val)}
          />
        </View>
      ))}

      <Button
        title="➕ Add Education"
        onPress={() => addEducation({ school: "", degree: "", year: "" })}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={nextStep} />
      </View>
    </View>
  );
};

export default EducationStep;
