import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

// ✅ Direct imports
import resume1 from "../assets/images/resume/resume1.png";
import resume2 from "../assets/images/resume/resume2.jpg";
import resume3 from "../assets/images/resume/resume3.jpg";

const ResumeOptions = ({nextStep, prevStep,updateSelectedTemplate}) => {
  const resumeTemplates = [resume1, resume2, resume3];
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const handleTemplateSelect = (index) => {
    setSelectedTemplate(index);
    updateSelectedTemplate(index);
  }

  console.log("Selected Template in ResumeOptions:", resumeTemplates);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Resume Options</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 10,
          marginTop: 10,
        }}
      >
        {resumeTemplates.map((template, index) => (
            <TouchableOpacity
                key={index}
                style={[styles.resumeImage,selectedTemplate === index && styles.selectedImage]}
                onPress={() => handleTemplateSelect(index)}
                activeOpacity={0.8}
                
                
                >

          <Image
            source={template} // ✅ no need to require again
            style={{ width: 300, height: 400, borderRadius: 12 }}
            resizeMode="contain"
            />
            </TouchableOpacity>
        ))}
      </ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
              <Button title="Back" onPress={prevStep} />
              <Button title="Next" onPress={nextStep} />
            </View>
    </View>
  );
};

export default ResumeOptions;

const styles = StyleSheet.create({
  resumeImage: {
    width: 300,
    height: 400,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent", // default
  },
  selectedImage: {
    borderColor: "#d0d0d0ff", // highlight border
    borderWidth: 2,
    // padding: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
