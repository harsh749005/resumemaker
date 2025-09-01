import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const WorkExperienceStep = ({
  data,
  addExperience,
  updateExperience,
  nextStep,
  prevStep,
}) => {
  const workExperience = data.work_experience || [];

  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Step 2: Work Experience
      </Text>

      {workExperience.map((exp, index) => (
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
          <Text style={{ fontWeight: "bold" }}>Experience {index + 1}</Text>

          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
              padding: 8,
              marginTop: 6,
            }}
            placeholder="Company"
            value={exp.company || ""}
            onChangeText={(val) => updateExperience(index, "company", val)}
          />

          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
              padding: 8,
              marginTop: 6,
            }}
            placeholder="Role"
            value={exp.role || ""}
            onChangeText={(val) => updateExperience(index, "role", val)}
          />

          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
              padding: 8,
              marginTop: 6,
            }}
            placeholder="Years"
            value={exp.years || ""}
            onChangeText={(val) => updateExperience(index, "years", val)}
            keyboardType="numeric"
          />
        </View>
      ))}

      {/* Add new experience */}
      <Button
        title="➕ Add Work Experience"
        onPress={() => addExperience({ company: "", role: "", years: "" })}
      />

      {/* Navigation buttons */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={nextStep} />
      </View>
    </View>
  );
};

export default WorkExperienceStep;
