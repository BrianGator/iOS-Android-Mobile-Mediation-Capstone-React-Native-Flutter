import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Mail, Lock, Moon, Sun, Smartphone, Download, Check, Sparkles, BookOpen, AlertCircle, Heart, Share2, Compass, Bell, Settings as SettingsIcon, LogOut, Code, FileText, CheckCircle2, ChevronRight, RefreshCw, Layers,
  Volume2, VolumeX, Play, Pause, Activity, Dumbbell, Smile, Brain, Droplet, Plus, Calendar, Trophy, ChevronLeft, Star, Home
} from "lucide-react";
import { 
  MOCK_MEDITATIONS, CODE_FILES,
  YOGA_GUIDE, PILATES_GUIDE, EXERCISE_GUIDE, CELEB_SLEEP_STORIES, BEDTIME_SOUNDS, SOOTHING_SOUNDSCAPES
} from "./data";

export const SettingsScreen = (props: any) => {
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
      {activeScreen === "settings-menu" && (
                  <motion.div 
                    key="settings-menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 mt-2"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <button onClick={() => setActiveScreen("home")} className="text-xs text-blue-600 font-bold">
                        ← Home
                      </button>
                      <h4 className="text-sm font-bold">Settings Options</h4>
                    </div>

                    <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
                       <h5 className="font-bold text-xs text-slate-400">Personalized Profile</h5>
                      <p className="text-base font-bold text-slate-800 dark:text-white">Hello {currentUser?.userName || "Brian McCarthy"}!</p>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">{currentUser?.email || "brian@mccarthy.com"}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => setActiveScreen("settings-theme")}
                        className="flex justify-between items-center bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Moon className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold">Theme Switching</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </button>

                      <button 
                        onClick={() => setActiveScreen("settings-favourites")}
                        className="flex justify-between items-center bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold">My Favourites</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </button>

                      <button 
                        onClick={() => setActiveScreen("settings-reminders")}
                        className="flex justify-between items-center bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Bell className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold">Daily Reminders</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>

                    <button 
                      onClick={handleLogout}
                      className="w-full mt-4 py-2 bg-rose-100 dark:bg-rose-950 hover:bg-rose-200 dark:hover:bg-rose-900 text-rose-600 dark:text-rose-350 text-xs font-bold flex justify-center items-center gap-2 rounded-lg transition"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout Account
                    </button>
                  </motion.div>
                )}

                {/* 5A. SETTINGS - GLOBAL THEME CHANGE SWITCH (Task 2/3) */}
                {activeScreen === "settings-theme" && (
                  <motion.div 
                    key="settings-theme"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 mt-2"
                  >
                    <div className="flex justify-between items-center">
                      <button onClick={() => setActiveScreen("settings-menu")} className="text-xs text-blue-600 font-bold">
                        ← Menu
                      </button>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Settings screen Toggle</h4>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm">
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Global Color Scheme</span>
                        <span className="text-[10px] text-slate-400">{isDarkMode ? "Dark Mode Active" : "Light Mode Active"}</span>
                      </div>
                      
                      {/* Interactive Switch */}
                      <button 
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`w-11 h-6 rounded-full p-0.5 transition ${isDarkMode ? "bg-blue-600" : "bg-slate-300"}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${isDarkMode ? "translate-x-5" : ""}`} />
                      </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm">
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Accessibility Features</span>
                        <span className="text-[10px] text-slate-400">High contrast & dyslexic fonts</span>
                      </div>
                      <button 
                        className="w-11 h-6 rounded-full p-0.5 transition bg-slate-300 dark:bg-slate-700"
                        onClick={() => triggerAlert("Settings", "Accessibility options activated.", "success")}
                      >
                        <div className="w-5 h-5 bg-white rounded-full shadow transition-transform" />
                      </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm relative overflow-hidden">
                      <div className="absolute right-0 top-0 bottom-0 pr-4 flex items-center">
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Account Privacy</span>
                        <span className="text-[10px] text-slate-400">Manage data sharing preferences</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <p className="line-height-relaxed font-mono">React ThemeProvider Context triggers deep repaint stylesheet states instantaneously across all screens.</p>
                    </div>
                  </motion.div>
                )}

                {/* 5B. SETTINGS - BOOKMARKED FAVORITES LIST (Task 4) */}
                {activeScreen === "settings-favourites" && (
                  <motion.div 
                    key="settings-favourites"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 mt-2"
                  >
                    <div className="flex justify-between items-center">
                      <button onClick={() => setActiveScreen("settings-menu")} className="text-xs text-blue-600 font-bold">
                        ← Menu
                      </button>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Bookmarking persist</h4>
                    </div>

                    <h3 className="text-center text-sm font-bold text-blue-600">My Favourite Exercises</h3>

                    <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto w-full">
                      {favorites.length === 0 ? (
                        <div className="text-center py-10 text-slate-405 text-[11px] font-mono text-slate-400 text-center w-full">
                          No favorite items found in AsyncStorage mockup. Click heart counters in sessions!
                        </div>
                      ) : (
                        favorites.map(id => {
                          const med = MOCK_MEDITATIONS.find(m => m.id === id);
                          if (!med) return null;
                          return (
                            <div 
                              key={med.id}
                              onClick={() => {
                                setActiveDetailsId(med.id);
                                setActiveScreen("details");
                              }}
                              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2.5 rounded-xl flex items-center gap-3 cursor-pointer hover:border-blue-500/50 transition shrink-0"
                            >
                              <img src={med.image} alt={med.title} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                              <div className="flex-1 min-w-0">
                                <h5 className="font-bold text-xs truncate text-slate-800 dark:text-white">{med.title}</h5>
                                <p className="text-[10px] text-slate-400">{med.target} • {med.duration}</p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-400" />
                            </div>
                          );
                        })
                      )}
                    </div>
                  </motion.div>
                )}

                {/* 5C. SETTINGS - NOTIFICATIONS ALERT SCHEDULER (Task 7) */}
                {activeScreen === "settings-reminders" && (
                  <motion.div 
                    key="settings-reminders"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 mt-2"
                  >
                    <div className="flex justify-between items-center">
                      <button onClick={() => setActiveScreen("settings-menu")} className="text-xs text-blue-600 font-bold">
                        ← Menu
                      </button>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Reminders setup</h4>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm">
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Daily Meditation alerts</span>
                        <span className="text-[10px] text-slate-400">Push status toggle</span>
                      </div>
                      <button 
                        onClick={() => setIsNotificationEnabled(!isNotificationEnabled)}
                        className={`w-11 h-6 rounded-full p-0.5 transition ${isNotificationEnabled ? "bg-blue-600" : "bg-slate-300"}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${isNotificationEnabled ? "translate-x-5" : ""}`} />
                      </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm">
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Weekly Email Summaries</span>
                        <span className="text-[10px] text-slate-400">Progress and stats via email</span>
                      </div>
                      <button className="w-11 h-6 rounded-full p-0.5 transition bg-blue-600">
                        <div className="w-5 h-5 bg-white rounded-full shadow transition-transform translate-x-5" />
                      </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm">
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Community Highlights</span>
                        <span className="text-[10px] text-slate-400">Top shared sessions from users</span>
                      </div>
                      <button className="w-11 h-6 rounded-full p-0.5 transition bg-slate-300 dark:bg-slate-700">
                        <div className="w-5 h-5 bg-white rounded-full shadow transition-transform" />
                      </button>
                    </div>

                    <p className="text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-950 p-2.5 rounded border border-blue-100/10 dark:border-slate-800">
                      Configure local clocks to distribute breathing push updates. Tap button below to test immediate push!
                    </p>

                    <button 
                      onClick={handleTestNotificationTrigger}
                      className="w-full py-2 bg-blue-600 font-bold text-white text-xs hover:bg-blue-700 rounded-lg shadow transition"
                    >
                      Confirm and Trigger Test Notify
                    </button>
                  </motion.div>
                )}

                
    </>
  );
};
