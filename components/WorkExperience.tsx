import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const WorkExperienceStep = ({
  data,
  addExperience,
  updateExperience,
  removeExperience,
  nextStep,
  prevStep,
}) => {
  const workExperience = data.work_experience || [];
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState({
    visible: false,
    field: null,
    index: null,
  });

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

    // Save directly into workExperience
    updateExperience(
      showPicker.index,
      showPicker.field,
      formattedMonthYear(currentDate)
    );

    setShowPicker({ visible: false, field: null, index: null });
  };

  const handleNext = () => {
    if (workExperience.length === 0) {
      Alert.alert(
        "Add Work Experience",
        "Please add at least one work experience to continue",
        [{ text: "OK" }]
      );
      return;
    }

    // Validate required fields
    const incompleteExperiences = workExperience.some(
      (exp) => !exp.company || !exp.role
    );

    if (incompleteExperiences) {
      Alert.alert(
        "Complete Required Fields",
        "Please fill in Company and Role for all experiences",
        [{ text: "OK" }]
      );
      return;
    }

    nextStep();
  };

  const handleAddExperience = () => {
    addExperience({
      company: "",
      role: "",
      year: "",
      start: "",
      end: "",
    });
  };

  const handleRemoveExperience = (index) => {
    if (workExperience.length === 1) {
      Alert.alert(
        "Cannot Remove",
        "You need at least one work experience entry",
        [{ text: "OK" }]
      );
      return;
    }

    Alert.alert(
      "Remove Experience",
      "Are you sure you want to remove this work experience?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => removeExperience(index),
        },
      ]
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Work Experience</Text>
          <Text style={styles.subtitle}>
            Tell us about your professional background
          </Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {workExperience.map((exp, index) => (
            <View key={index} style={styles.experienceCard}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceTitle}>
                  Experience {index + 1}
                </Text>
                {workExperience.length > 1 && (
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleRemoveExperience(index)}
                  >
                    <Text style={styles.deleteButtonText}>✕</Text>
                  </TouchableOpacity>
                )}
              </View>

              <TextInput
                style={styles.input}
                placeholder="Company *"
                placeholderTextColor="#a9a9a9"
                value={exp.company || ""}
                onChangeText={(val) => updateExperience(index, "company", val)}
              />

              <TextInput
                style={styles.input}
                placeholder="Role *"
                placeholderTextColor="#a9a9a9"
                value={exp.role || ""}
                onChangeText={(val) => updateExperience(index, "role", val)}
              />

              <TextInput
                style={styles.input}
                placeholder="Years of experience (e.g., 2 years)"
                placeholderTextColor="#a9a9a9"
                value={exp.year || ""}
                onChangeText={(val) => updateExperience(index, "year", val)}
              />

              {/* Start Date */}
              <View style={styles.dateSection}>
                <Text style={styles.dateLabel}>
                  Start Date: {exp.start || "Not selected"}
                </Text>
                <TouchableOpacity
                  style={styles.dateButton}
                  onPress={() =>
                    setShowPicker({ visible: true, field: "start", index })
                  }
                >
                  <Text style={styles.dateButtonText}>PICK START DATE</Text>
                </TouchableOpacity>
              </View>

              {/* End Date */}
              <View style={styles.dateSection}>
                <Text style={styles.dateLabel}>
                  End Date: {exp.end || "Not selected"}
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dateButton,
                    exp.end === "Present" && styles.dateButtonDisabled,
                  ]}
                  onPress={() =>
                    setShowPicker({ visible: true, field: "end", index })
                  }
                  disabled={exp.end === "Present"}
                >
                  <Text
                    style={[
                      styles.dateButtonText,
                      exp.end === "Present" && styles.dateButtonTextDisabled,
                    ]}
                  >
                    PICK END DATE
                  </Text>
                </TouchableOpacity>

                <View style={styles.switchContainer}>
                  <Switch
                    value={exp.end === "Present"}
                    onValueChange={(val) =>
                      updateExperience(index, "end", val ? "Present" : "")
                    }
                    trackColor={{ false: "#d0d0d0", true: "#007AFF" }}
                    thumbColor={exp.end === "Present" ? "#ffffff" : "#f4f3f4"}
                  />
                  <Text style={styles.switchLabel}>Currently working here</Text>
                </View>
              </View>
              
            </View>
          ))}

          {/* Add Experience Button */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddExperience}
          >
            <Text style={styles.addButtonIcon}>+</Text>
            <Text style={styles.addButtonText}>ADD WORK EXPERIENCE</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Date Picker */}
        {showPicker.visible && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onChange}
          />
        )}

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={prevStep}>
            <Text style={styles.backButtonText}>BACK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Step 3 of 4</Text>
        </View>
      </View>
    </>
  );
};

export default WorkExperienceStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#ffffff",
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontFamily: "PlayfairDisplayRegular",
    fontSize: 28,
    color: "#333333",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#a9a9a9",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
    fontFamily: "WorkSansRegular",
  },

  scrollView: {
    flex: 1,
  },

  experienceCard: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    // borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 2,
  },

  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  experienceTitle: {
    fontSize: 18,
    color: "#666",
    fontFamily: "WorkSansMedium",
  },

  deleteButton: {
    width: 30,
    height: 30,
    // borderRadius: 15,
    // backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  deleteButtonText: {
    color: "#ff4444",
    fontSize: 12,
    fontFamily: "WorkSansMedium",
  },

  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#d0d0d0",
    fontFamily: "WorkSansRegular",
    fontSize: 16,
    paddingVertical: 12,
    marginBottom: 16,
    color: "#333",
  },

  dateSection: {
    marginBottom: 16,
  },

  dateLabel: {
    fontSize: 16,
    color: "#333",
    fontFamily: "WorkSansRegular",
    marginBottom: 8,
  },

  dateButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    // borderRadius: 8,
    marginBottom: 8,
  },

  dateButtonDisabled: {
    backgroundColor: "#cccccc",
  },

  dateButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "WorkSansMedium",
    fontSize: 16,
  },

  dateButtonTextDisabled: {
    color: "#666666",
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  switchLabel: {
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
    fontFamily: "WorkSansRegular",
  },

  addButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    // borderRadius: 8,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  addButtonIcon: {
    color: "white",
    fontSize: 20,
    fontFamily: "WorkSansMedium",
    marginRight: 8,
  },

  addButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "WorkSansMedium",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
  },

  backButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 30,
    // borderRadius: 8,
    minWidth: 100,
  },

  backButtonText: {
    color: "#333",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "WorkSansMedium",
  },

  nextButton: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    // borderRadius: 8,
    minWidth: 100,
  },

  nextButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "WorkSansMedium",
  },

  progressContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  progressText: {
    fontSize: 14,
    color: "#999999",
    fontFamily: "WorkSansRegular",
  },
});
