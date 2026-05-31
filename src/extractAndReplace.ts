import * as fs from 'fs';

const appFile = 'src/App.tsx';
let content = fs.readFileSync(appFile, 'utf8');

function extractComponent(startMarker, endMarker, componentName, fileName) {
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    console.log(`Could not find start for ${componentName}`);
    return;
  }
  const endIndex = content.indexOf(endMarker, startIndex);
  if (endIndex === -1) {
    console.log(`Could not find end for ${componentName}`);
    return;
  }
  
  // Extract just the JSX that is returned. Look for the start of <motion.div> up to the end of it. 
  // It's wrapped in: {activeScreen === "home" && ( ... )}
  // Let's just capture the whole ternary or logical AND.
  let originalCode = content.substring(startIndex, endIndex);
  
  // For safety, just wrap the whole thing. It evaluates to either false or the JSX.
  let newContent = `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Mail, Lock, Moon, Sun, Smartphone, Download, Check, Sparkles, BookOpen, AlertCircle, Heart, Share2, Compass, Bell, Settings as SettingsIcon, LogOut, Code, FileText, CheckCircle2, ChevronRight, RefreshCw, Layers,
  Volume2, VolumeX, Play, Pause, Activity, Dumbbell, Smile, Brain, Droplet, Plus, Calendar, Trophy, ChevronLeft, Star, Home
} from "lucide-react";
import { 
  MOCK_MEDITATIONS, CODE_FILES,
  YOGA_GUIDE, PILATES_GUIDE, EXERCISE_GUIDE, CELEB_SLEEP_STORIES, BEDTIME_SOUNDS, SOOTHING_SOUNDSCAPES
} from "./data";

export const ${componentName} = (props: any) => {
  const {
    activeScreen, setActiveScreen, currentUser, setCurrentUser,
    signupUser, setSignupUser, signupEmail, setSignupEmail, signupPassword, setSignupPassword,
    loginEmail, setLoginEmail, loginPassword, setLoginPassword,
    phoneTab, setPhoneTab, activeDetailsId, setActiveDetailsId, favorites, setFavorites,
    isDarkMode, setIsDarkMode, isNotificationEnabled, setIsNotificationEnabled,
    activeDetailsTab, setActiveDetailsTab, randomQuote, setRandomQuote, isQuoteLoading, setIsQuoteLoading,
    simulatedAlert, setSimulatedAlert, simulatedRemindersTriggered, setSimulatedRemindersTriggered,
    activeSoundPlaying, setActiveSoundPlaying, soundVolume, setSoundVolume,
    activeStoryPlaying, setActiveStoryPlaying, storyProgress, setStoryProgress, isStoryPaused, setIsStoryPaused,
    activeBreathMode, setActiveBreathMode, breathPhase, setBreathPhase, breathTimer, setBreathTimer, isBreathingActive, setIsBreathingActive,
    sleepLog, setSleepLog, inputBed, setInputBed, inputWake, setInputWake, inputSleepRating, setInputSleepRating,
    meditationMinutes, setMeditationMinutes, meditationStreak, setMeditationStreak, inputMedMins, setInputMedMins,
    workoutMinutes, setWorkoutMinutes, exerciseStreak, setExerciseStreak, exerciseLog, setExerciseLog,
    inputWorkoutType, setInputWorkoutType, inputWorkoutMins, setInputWorkoutMins, inputWorkoutIntensity, setInputWorkoutIntensity,
    waterCups, setWaterCups, stepsCounter, setStepsCounter, moodMood, setMoodMood, dailyStreakCounter, setDailyStreakCounter,
    selectedYogaItem, setSelectedYogaItem, selectedPilatesItem, setSelectedPilatesItem, selectedExerciseItem, setSelectedExerciseItem,
    aiFocus, setAiFocus, aiStressLevel, setAiStressLevel, aiEnergyLevel, setAiEnergyLevel, aiCustomResults, setAiCustomResults, isAiGenerating, setIsAiGenerating,
    selectedBodyScanNode, setSelectedBodyScanNode, scanPulseActive, setScanPulseActive,
    selectedDocsTab, setSelectedDocsTab, activeCodeFile, setActiveCodeFile, selectedScreenshotName, setSelectedScreenshotName,
    handleSignup, handleLogin, handleRegister, triggerAlert, fetchRandomQuote, toggleFavorite, toggleTheme, toggleNotifications, handleAiSubmit, handleLogout
  } = props;
  
  return (
    <>
      ${originalCode}
    </>
  );
};
`;

  fs.writeFileSync(fileName, newContent);
  console.log(`Wrote ${fileName}`);
}

// Home Screen
extractComponent(
  '{activeScreen === "home" && (',
  '{/* detail screen */}',
  'HomeScreen', 'src/HomeScreen.tsx'
);

// Details Screen
extractComponent(
  '{activeScreen === "details" && (',
  '{/* settings screen */}',
  'DetailScreen', 'src/DetailScreen.tsx'
);

// Settings Screen
extractComponent(
  '{activeScreen === "settings-menu" && (',
  '{/* api integration screen */}',
  'SettingsScreen', 'src/SettingsScreen.tsx'
);

console.log('Extraction complete');
