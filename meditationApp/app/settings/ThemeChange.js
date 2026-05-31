// Written by Brian McCarthy
import { Text, SafeAreaView, Switch, View, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const ThemeChange = () => {
  console.log("hello from themechange");
  const { theme, toggleTheme } = useTheme();
  console.log('theme', theme);
  const isDarkMode = theme === "dark";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite,
      }}
    >
      <ScreenHeaderBtn />
      <View
        style={{
          justifyContent: "space-between",
          padding: SIZES.medium,
          borderRadius: SIZES.small,
          backgroundColor: isDarkMode ? COLORS.lightWhite : COLORS.darkBackground,
          ...SHADOWS.medium,
          shadowColor: COLORS.white,
          marginVertical: SIZES.medium,
          marginHorizontal: SIZES.medium,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: isDarkMode ? COLORS.lightText : COLORS.darkText,
              fontSize: SIZES.medium,
              fontFamily: "DMBold",
              marginHorizontal: SIZES.medium,
              marginVertical: SIZES.small,
            }}
          >
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: "#767577", true: "#FE7654" }}
            thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThemeChange;
