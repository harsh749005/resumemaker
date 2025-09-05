import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // or react-native-linear-gradient
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const handleSignUp = () => {
    // Navigate to sign up screen
    // console.log('Sign Up pressed');
    router.push("/(auth)/sign-up")
  };

  const handleSignIn = () => {
    // Navigate to sign in screen
    // console.log('Sign In pressed');
    router.push("/(auth)/sign-in")
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <LinearGradient
        colors={[
          '#FF6B6B', // Red-orange at top
          '#FF8E8E', // Light red
          '#FFB3BA', // Pink
          '#DDA0DD', // Plum
          '#C8A2C8', // Light purple
          '#B19CD9', // Purple
          '#A8C8FF', // Light blue
          '#E6F3FF', // Very light blue at bottom
        ]}
        locations={[0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1]}
        style={styles.gradient}
      >
        {/* Status bar area */}
        {/* <View style={styles.statusBarArea}>
          <Text style={styles.timeText}>4:20</Text>
          <View style={styles.statusIcons}>
            <View style={styles.signalBars}>
              <View style={[styles.bar, styles.bar1]} />
              <View style={[styles.bar, styles.bar2]} />
              <View style={[styles.bar, styles.bar3]} />
              <View style={[styles.bar, styles.bar4]} />
            </View>
            <View style={styles.batteryIcon}>
              <View style={styles.batteryBody} />
              <View style={styles.batteryTip} />
            </View>
          </View>
        </View> */}

        {/* Main content */}
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Create Your Perfect Resume</Text>
            <Text style={styles.subtitle}>
              Build professional resumes with our easy-to-use templates and land your dream job
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Get Started</Text>
            </TouchableOpacity>
            
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleSignIn}>
                <Text style={styles.signInLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statusBarArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  timeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 8,
  },
  bar: {
    width: 3,
    backgroundColor: 'white',
    marginHorizontal: 1,
    borderRadius: 1,
  },
  bar1: { height: 4 },
  bar2: { height: 6 },
  bar3: { height: 8 },
  bar4: { height: 10 },
  batteryIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryBody: {
    width: 22,
    height: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  batteryTip: {
    width: 2,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 1,
    marginLeft: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  signUpButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
  signInLink: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OnboardingScreen;