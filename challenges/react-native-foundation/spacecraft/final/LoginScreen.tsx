import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Button, Colors, Headline } from 'react-native-paper';
import { FormInput } from './FromInput';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    // navigation.navigate(AppRoute.TIMELINE_SCREEN);
  }

  function handleTerms() {
    // navigation.navigate(AppRoute.TERMS_SCREEN);
  }

  return (
    <View>
      <View style={styles.header}>
        <Headline>SpaceCraft</Headline>
      </View>
      <View style={styles.content}>
        <FormInput
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <FormInput
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
        <Button
          onPress={handleLogin}
          style={styles.submitButton}
          mode="contained"
        >
          Login
        </Button>
        <TouchableOpacity onPress={handleTerms}>
          <Text style={styles.tocText}>
            by login you accept the Terms and Conditions.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    height: 140,
    backgroundColor: Colors.purple500,
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 8,
    backgroundColor: Colors.purple500,
  },
  tocText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.grey500,
  },
});
