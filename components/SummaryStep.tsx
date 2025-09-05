import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { callGeminiAPI } from "@/api/gemini";

const SummaryStep = ({ data, summary, updateSummary, nextStep, prevStep }) => {
  const { personal_info, work_experience, education, skills } = data;
  console.log(skills);

  const [isGenerating, setIsGenerating] = useState(false);
  console.log("hi")
  const generateSummary = async () => {
    // if (!personal_info?.name || !work_experience?.length) {
      //   return;
      // }
      setIsGenerating(true);
      console.log("function ke undar")
      try {
        if (summary.length === 0) {
          const prompt = `Write a professional resume summary for ${
            personal_info.full_name
        }. 
          Here's their work experience: ${JSON.stringify(work_experience.year)}
          Here's their education: ${JSON.stringify(education.degree)}
          Here are their skills: ${JSON.stringify(skills)}
          Create a compelling 2-3 sentence professional summary that highlights their key strengths and experience. Make it specific and impactful.`;
        const result = await callGeminiAPI(prompt);
        console.log("Here is the prompt", prompt);
        console.log("and Gemini", result);
        updateSummary(result);
      } else if (summary.length > 5 ) {
        console.log("ha bhai")
const prompt = `Polish the following resume summary by fixing only grammar, punctuation, and readability issues. 
Do not shorten, expand, or provide multiple versions. 
Return exactly one improved summary:

"${summary}"`;        const result = await callGeminiAPI(prompt);
        console.log("Here is the prompt", prompt);
        console.log("and Gemini", result);
        updateSummary(result);
      }
    } catch (error) {
      console.error("Error generating summary:", error);
    }
    finally{

      setIsGenerating(false);
    }
  };
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

      <TouchableOpacity
        onPress={
          generateSummary
        }
        style={{
          borderWidth: 1,
          width: 100,
          paddingVertical: 10,
          paddingHorizontal: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Text>{isGenerating ? "Generating ..." : "Generate"}</Text>
      </TouchableOpacity>
      {/* Navigation */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={nextStep} />
      </View>
    </View>
  );
};

export default SummaryStep;
