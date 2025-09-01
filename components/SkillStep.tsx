import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const SkillsStep = ({ data, addSkill, updateSkill, nextStep, prevStep }) => {
    const skills = data.skills || [];


  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Step: Skills</Text>

      {skills.map((skill, index) => (
        <TextInput
          key={index}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 8,
            marginBottom: 8,
          }}
          placeholder={`Skill ${index + 1}`}
          value={skill}
          onChangeText={(val) => updateSkill(index, val)}
        />
      ))}

      <Button title="➕ Add Skill" onPress={() => addSkill("")} />

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={nextStep} />
      </View>
    </View>
  );
};

export default SkillsStep;
