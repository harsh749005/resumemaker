import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  // Case: user is already signed in → skip auth flow
  if (isSignedIn) {
    return <Redirect href="/" />;
  }

  // Case: user not signed in → show stack with onboarding, sign-in, sign-up
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoardingScreen" options={{ title: "OnBoardingScreen" }} />
      <Stack.Screen name="sign-in" options={{ title: "Sign In" }} />
      <Stack.Screen name="sign-up" options={{ title: "Sign Up" }} />
    </Stack>
  );
}
