import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";

interface PersonalInfoStepProps {
  data: any;
  updatePersonalInfo: any;
  nextStep: () => void;
  prevStep: () => void;
}
const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  data,
  updatePersonalInfo,
  nextStep,
  prevStep,
}) => {
  const { user } = useUser();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          {/* Progress Indicator */}
          {/* <View style={styles.stepIndicator}>
            <Text style={styles.stepText}>Step 3 of 4</Text>
          </View> */}
          <Text style={styles.title}>Personal Info</Text>
          <Text style={styles.subtitle}>Provide your details</Text>
        </View>

        {/* Name Field */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={data.name || ""}
          onChangeText={(val) => updatePersonalInfo("name", val)}
          onEndEditing={() => {
            if (!data.name && user?.username) {
              updatePersonalInfo("name", user.username);
            }
          }}
        />

        {/* Email Field */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={data.email || ""}
          onChangeText={(val) => updatePersonalInfo("email", val)}
          onEndEditing={() => {
            if (!data.name && user?.emailAddresses[0].emailAddress) {
              updatePersonalInfo("name", user?.emailAddresses[0].emailAddress);
            }
          }}
        />

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={prevStep}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
            <Text style={styles.nextButtonText}>Next →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
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

  stepIndicator: {
    backgroundColor: "#f0f8ff",
    paddingHorizontal: 16,
    paddingVertical: 6,
    // borderRadius: 20,
    marginBottom: 16,
  },
  stepText: {
    fontSize: 12,
    fontFamily: "WorkSansMedium",
    color: "#007AFF",
    textTransform: "uppercase",
    letterSpacing: 0.5,
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
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
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

  multilineInput: {
    minHeight: 80,
  },

  polishButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },

  polishButtonLoading: {
    backgroundColor: "#5eb3ff",
  },

  polishContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  loadingContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  polishIcon: {
    fontSize: 16,
    marginRight: 6,
  },

  polishButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "WorkSansMedium",
    textAlign: "center",
  },

  polishButtonTextLoading: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "WorkSansRegular",
    textAlign: "center",
    marginLeft: 8,
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
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    minWidth: 100,
  },

  nextButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "WorkSansMedium",
  },
});
export default PersonalInfoStep;
