import React, { useState } from "react";
import { View, Text, TextInput, Button, Switch } from "react-native";
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
  const [showPicker, setShowPicker] = useState({ visible: false, field: null, index: null });
  const formattedMonthYear = (currentDate) => {
    return currentDate.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const onChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShowPicker({ visible: false, field: null, index: null });
      return;
    }

    const currentDate = selectedDate || date;
    setDate(currentDate);

    // save directly into workExperience
    updateExperience(
      showPicker.index,
      showPicker.field,
      formattedMonthYear(currentDate)
    );

    setShowPicker({ visible: false, field: null, index: null });
  };

 


  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Step 2: Work Experience</Text>

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
            style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 8, marginTop: 6 }}
            placeholder="Company"
            value={exp.company || ""}
            onChangeText={(val) => updateExperience(index, "company", val)}
          />

          <TextInput
            style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 8, marginTop: 6 }}
            placeholder="Role"
            value={exp.role || ""}
            onChangeText={(val) => updateExperience(index, "role", val)}
          />
                    <TextInput
            style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 8, marginTop: 6 }}
            placeholder="Year of experience"
            value={exp.year || ""}
            onChangeText={(val) => updateExperience(index, "year", val)}
          />

          {/* Start Date */}
          <View style={{ marginTop: 10 }}>
            <Text>Start: {exp.start || "Not selected"}</Text>
            <Button
              title="Pick Start Date"
              onPress={() => setShowPicker({ visible: true, field: "start", index })}
            />
          </View>

          {/* End Date */}
          <View style={{ marginTop: 10 }}>
            <Text>End: {exp.end || "Not selected"}</Text>
            <Button
              title="Pick End Date"
              onPress={() => setShowPicker({ visible: true, field: "end", index })}
              disabled={exp.end === "Present"}
            />
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
              <Switch
                value={exp.end === "Present"}
                onValueChange={(val) =>
                  updateExperience(index, "end", val ? "Present" : "")
                }
              />
              <Text style={{ marginLeft: 8 }}>Currently working here</Text>
            </View>
          </View>

        </View>
      ))}

      {showPicker.visible && (
        <DateTimePicker value={date} mode="date" display="spinner" onChange={onChange} />
      )}

      <Button
        title="➕ Add Work Experience"
        onPress={() => addExperience({ company: "", role: "", start: "", end: "" })}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Button title="Back" onPress={prevStep} />
        <Button title="Next" onPress={nextStep} />
      </View>
    </View>
  );
};

export default WorkExperienceStep;
