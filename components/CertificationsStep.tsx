import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const CertificationsStep = ({
  data,
  addCertification,
  updateCertification,
  nextStep,
  prevStep,
}) => {
  const certifications = data.certifications || [];

  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Step: Certifications</Text>

      {certifications.map((cert, index) => (
        <TextInput
          key={index}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 8,
            marginBottom: 8,
          }}
          placeholder={`Certification ${index + 1}`}
          value={cert}
          onChangeText={(val) => updateCertification(index, val)}
        />
      ))}

      <Button title="➕ Add Certification" onPress={() => addCertification("")} />

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={nextStep} />
      </View>
    </View>
  );
};

export default CertificationsStep;
