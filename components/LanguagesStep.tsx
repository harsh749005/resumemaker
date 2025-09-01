import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const LanguagesStep = ({ data, addLanguage, updateLanguage, nextStep, prevStep }) => {
  const languages = data.languages || [];

  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Step: Languages</Text>

      {languages.map((lang, index) => (
        <TextInput
          key={index}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 8,
            marginBottom: 8,
          }}
          placeholder={`Language ${index + 1}`}
          value={lang}
          onChangeText={(val) => updateLanguage(index, val)}
        />
      ))}

      <Button title="➕ Add Language" onPress={() => addLanguage("")} />

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={nextStep} />
      </View>
    </View>
  );
};

export default LanguagesStep;
