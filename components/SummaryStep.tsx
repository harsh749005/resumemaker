import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const SummaryStep = ({ summary, updateSummary, nextStep, prevStep }) => {
  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Step 3: Professional Summary
      </Text>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          height: 120,
          textAlignVertical: "top",
        }}
        placeholder="Write a short professional summary..."
        value={summary}
        onChangeText={updateSummary}
        multiline
      />

      {/* Navigation */}
      <View
        style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}
      >
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={nextStep} />
      </View>
    </View>
  );
};

export default SummaryStep;
