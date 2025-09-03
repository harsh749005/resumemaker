import React, { useState } from "react";
import { View, Text, TextInput, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const WorkExperienceStep = ({
  data,
  addExperience,
  updateExperience,
  nextStep,
  prevStep,
}) => {
  const workExperience = data.work_experience || [];
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios"); // Keep picker open on iOS if no date selected yet
    setDate(currentDate);
    const data1 = currentDate.toString();
    // split string by spaces
    const parts = data1.split(" ");

    // extract year (index 3)
    const year = parts[3];
    const month = parts[1];

    console.log("Extracted year:", year);
    // const month = monthsArr.find(mon => data1.includes(mon));
    console.log("Selected month : ", month);
  };
  const showDatepicker = () => {
    setShowPicker(true);
  };

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
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Selected Date: {date.toLocaleDateString()}</Text>
            <Button onPress={showDatepicker} title="Show Date Picker" />
            {showPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date" // Can be 'date', 'time', or 'datetime'
                display="spinner" // Can be 'default', 'spinner', 'calendar', 'clock'
                onChange={onChange}
              />
            )}
          </View>
        </View>
      ))}

      {/* Add new experience */}
      <Button
        title="➕ Add Work Experience"
        onPress={() => addExperience({ company: "", role: "", years: "" })}
      />

      {/* Navigation buttons */}
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

export default WorkExperienceStep;
