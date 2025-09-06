import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SignOutButton } from "./SignOutButton";
import { useUser } from "@clerk/clerk-expo";

const PersonalInfoStep = ({ data, updatePersonalInfo, nextStep }) => {
    const { user } = useUser();
  console.log(user?.emailAddresses[0].emailAddress);
  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Step 1: Personal Info
      </Text>

      {/* Name Field */}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
        }}
        placeholder="Full Name"
        value={data.name || ""}
        onChangeText={(val) => updatePersonalInfo("name", val)}
      />

      {/* Email Field */}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
        }}
        placeholder="Email"
        value={data.email || ""}
        onChangeText={(val) => updatePersonalInfo("email", val)}
        keyboardType="email-address"
      />

      <Button title="Next" onPress={nextStep} />
      <SignOutButton/>
    </View>
  );
};

export default PersonalInfoStep;
