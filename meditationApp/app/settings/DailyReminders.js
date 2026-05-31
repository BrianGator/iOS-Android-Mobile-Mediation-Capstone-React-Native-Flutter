// Written by Brian McCarthy
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Switch, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const DailyReminders = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const triggerTestNotification = () => {
    Alert.alert(
      "Test Notification Successfully Triggered!",
      "Time for your daily meditation. Keep up your streak!",
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenHeaderBtn />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Notification Settings</Text>
          
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Daily Meditations Alert</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#FE7654" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <Text style={styles.helperText}>
            Enabling this sets a push reminder to notify you daily to breathe and space out for 10 minutes.
          </Text>

          <TouchableOpacity 
            style={styles.testBtn} 
            onPress={triggerTestNotification}
          >
            <Text style={styles.testBtnText}>Confirm and Trigger Test Notify</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginBottom: SIZES.medium,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginTop: SIZES.small,
  },
  settingLabel: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
  helperText: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    marginVertical: SIZES.medium,
    lineHeight: 18,
  },
  testBtn: {
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    alignItems: "center",
  },
  testBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
});

export default DailyReminders;
