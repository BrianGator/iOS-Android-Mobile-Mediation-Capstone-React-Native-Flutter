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

export const DetailScreen = (props: any) => {
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
    handleLogin, handleRegister, triggerAlert, fetchRandomQuote, toggleFavorite, handleLogout, handleGenerateAiRecommendation
  } = props;

  const activeMeditation = MOCK_MEDITATIONS.find(m => m.id === activeDetailsId) || MOCK_MEDITATIONS[0];
  
  return (
    <>
      {activeScreen === "details" && (
                  <motion.div 
                    key="details"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col gap-3 mt-2 h-full pb-14"
                  >
                    {/* Header Nav bar */}
                    <div className="flex justify-between items-center">
                      <button onClick={() => setActiveScreen("home")} className="text-xs text-blue-600 font-bold flex items-center gap-1.5 p-1 -ml-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                        <Home className="w-3.5 h-3.5" /> Back Feed
                      </button>
                      <button 
                        onClick={() => triggerAlert("Shared", `Invitation sent successfully to your device for: ${activeMeditation.title}`, "success")}
                        className="p-1.5 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Image Banner */}
                    <div className="relative">
                      <img src={activeMeditation.image} alt={activeMeditation.title} className="w-full aspect-[4/3] rounded-xl object-cover" referrerPolicy="no-referrer" />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                        {activeMeditation.target}
                      </span>
                    </div>

                    {/* Metadata text titles */}
                    <div className="text-center py-2 border-b border-slate-100 dark:border-slate-800">
                      <h4 className="font-bold text-base text-slate-900 dark:text-white leading-tight">{activeMeditation.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">⌛ Duration Required: {activeMeditation.duration}</p>
                    </div>

                    {/* Tab Navigation Menu selectors (Task 6) */}
                    <div className="flex gap-2">
                      {["About", "Instructions"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveDetailsTab(tab as any)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition ${activeDetailsTab === tab ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-900 text-slate-400"}`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab Viewport Contents */}
                    <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800/60 max-h-56 overflow-y-auto">
                      {activeDetailsTab === "About" ? (
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                          {activeMeditation.description}
                        </p>
                      ) : (
                        <div className="flex flex-col gap-2">
                          {activeMeditation.instructions.map((inst, index) => (
                            <div key={index} className="flex gap-2 items-start text-xs text-slate-600 dark:text-slate-300">
                              <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 border border-blue-200 dark:border-blue-900 flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <p className="flex-1 text-slate-700 dark:text-slate-300">{inst}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Interactive Body Area Scanning component, displayed exclusively for Deep Sleep Body Scan (ID 2) to fix raw graphic problem */}
                    {activeMeditation.id === 2 && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-left flex flex-col items-center gap-2 mt-1"
                      >
                        <div className="text-center w-full">
                          <span className="text-[8px] uppercase font-mono px-2 py-0.5 rounded bg-blue-950 border border-blue-900/40 text-blue-400 font-bold tracking-wider">
                            Interactive Body Scan Map Indicator
                          </span>
                          <p className="text-[10px] text-slate-400 mt-0.5">Tap a structural node to emit progressive somatic waves</p>
                        </div>

                        {/* Silhouette and Radar sweep visualizer */}
                        <div className="relative w-full max-w-[190px] h-48 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-2 shadow-inner">
                          {/* Radial sweep glow line */}
                          <motion.div 
                            animate={{ y: [0, 180, 0] }}
                            transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-x-0 h-0.5 bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] z-20 pointer-events-none"
                          />
                          
                          {/* Modern SVG silhouette with exact responsive layout container representation */}
                          <div id="body-scan-graphic-wrapper" className="relative w-24 h-40 flex items-center justify-center">
                            <svg viewBox="0 0 100 200" className="w-full h-full text-blue-500/80 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(37,99,235,0.4)] relative z-10">
                              {/* Glowing Outline Silhouette */}
                              <g fill="rgba(37, 99, 235, 0.08)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                {/* Head */}
                                <circle cx="50" cy="25" r="9" />
                                {/* Neck */}
                                <rect x="47.5" y="34" width="5" height="6" rx="1.5" />
                                {/* Torso & Shoulders */}
                                <path d="M35,44 C35,44 42,40 50,40 C58,40 65,44 65,44 C67.5,45 68,47 68,49.5 L65.5,94 C65.5,96.5 62.5,98.5 59.5,98.5 L40.5,98.5 C37.5,98.5 34.5,96.5 34.5,94 L32,49.5 C32,47 32.5,45 35,44 Z" />
                                {/* Arms */}
                                <path d="M32,47 L21,79 C20,82 23,84 25,82 L33.5,54" />
                                <path d="M68,47 L79,79 C80,82 77,84 75,82 L66.5,54" />
                                {/* Legs */}
                                <path d="M39.5,100 L34,158 C33,162 37,164 39,164 L43,164 L44.5,106" />
                                <path d="M60.5,100 L66,158 C67,162 63,164 61,164 L57,164 L55.5,106" />
                              </g>

                              {/* Energy Meridian Central Axis (Spine Channel) */}
                              <line x1="50" y1="34" x2="50" y2="100" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3,3" opacity="0.75" />
                              
                              {/* Thoracic Breathing Coordinate Rib Lines */}
                              <line x1="41" y1="54" x2="59" y2="54" stroke="#3b82f6" strokeWidth="0.75" opacity="0.45" />
                              <line x1="39" y1="64" x2="61" y2="64" stroke="#3b82f6" strokeWidth="0.75" opacity="0.45" />
                              <line x1="38" y1="74" x2="62" y2="74" stroke="#3b82f6" strokeWidth="0.75" opacity="0.45" />
                              <line x1="40" y1="84" x2="60" y2="84" stroke="#3b82f6" strokeWidth="0.75" opacity="0.45" />
                              
                              {/* Joint Node Anchors for Sensory Visuals */}
                              <circle cx="50" cy="54" r="1.5" fill="#3b82f6" opacity="0.6" />
                              <circle cx="50" cy="74" r="1.5" fill="#3b82f6" opacity="0.6" />
                              <circle cx="50" cy="88" r="1.5" fill="#3b82f6" opacity="0.6" />
                            </svg>

                            {/* Absolute clickable nodes precisely mapping standard anatomies */}
                            <button 
                              id="body-node-head"
                              onClick={() => setSelectedBodyScanNode("Head")}
                              className={`absolute top-[12.5%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center cursor-pointer ${selectedBodyScanNode === "Head" ? "bg-cyan-400 border-white scale-125 shadow-[0_0_10px_#22d3ee]" : "bg-slate-900 border-cyan-500 hover:scale-125"}`}
                            >
                              <span className="w-1.5 h-1.5 bg-white rounded-full" />
                              {selectedBodyScanNode === "Head" && (
                                <span className="absolute -inset-3.5 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
                              )}
                            </button>

                            <button 
                              id="body-node-shoulders"
                              onClick={() => setSelectedBodyScanNode("Shoulders")}
                              className={`absolute top-[22.5%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center cursor-pointer ${selectedBodyScanNode === "Shoulders" ? "bg-cyan-400 border-white scale-125 shadow-[0_0_10px_#22d3ee]" : "bg-slate-900 border-cyan-500 hover:scale-125"}`}
                            >
                              <span className="w-1.5 h-1.5 bg-white rounded-full" />
                              {selectedBodyScanNode === "Shoulders" && (
                                <span className="absolute -inset-3.5 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
                              )}
                            </button>

                            <button 
                              id="body-node-spine"
                              onClick={() => setSelectedBodyScanNode("Spine")}
                              className={`absolute top-[36.25%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center cursor-pointer ${selectedBodyScanNode === "Spine" ? "bg-cyan-400 border-white scale-125 shadow-[0_0_10px_#22d3ee]" : "bg-slate-900 border-cyan-500 hover:scale-125"}`}
                            >
                              <span className="w-1.5 h-1.5 bg-white rounded-full" />
                              {selectedBodyScanNode === "Spine" && (
                                <span className="absolute -inset-3.5 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
                              )}
                            </button>

                            <button 
                              id="body-node-abdomen"
                              onClick={() => setSelectedBodyScanNode("Abdomen")}
                              className={`absolute top-[47.5%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center cursor-pointer ${selectedBodyScanNode === "Abdomen" ? "bg-cyan-400 border-white scale-125 shadow-[0_0_10px_#22d3ee]" : "bg-slate-900 border-cyan-500 hover:scale-125"}`}
                            >
                              <span className="w-1.5 h-1.5 bg-white rounded-full" />
                              {selectedBodyScanNode === "Abdomen" && (
                                <span className="absolute -inset-3.5 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
                              )}
                            </button>

                            <button 
                              id="body-node-legs"
                              onClick={() => setSelectedBodyScanNode("Legs")}
                              className={`absolute top-[67.5%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center cursor-pointer ${selectedBodyScanNode === "Legs" ? "bg-cyan-400 border-white scale-125 shadow-[0_0_10px_#22d3ee]" : "bg-slate-900 border-cyan-500 hover:scale-125"}`}
                            >
                              <span className="w-1.5 h-1.5 bg-white rounded-full" />
                              {selectedBodyScanNode === "Legs" && (
                                <span className="absolute -inset-3.5 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Detailed sensory guideline */}
                        <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center w-full">
                          <span className="text-[9px] font-bold text-blue-400 block uppercase tracking-wider">{selectedBodyScanNode} biofeedback</span>
                          <p className="text-[10px] text-slate-350 italic leading-snug mt-1 text-center">
                            {selectedBodyScanNode === "Head" && '"Relax optical orbits. Soften teeth pressure, release the tongue, let ocular tissues slip deep."'}
                            {selectedBodyScanNode === "Shoulders" && '"Inhale to brace shoulder blades, exhale while allowing gravity to sink them fully."'}
                            {selectedBodyScanNode === "Spine" && '"Feel structural tension drain downwards through spinal columns with progressive elongation."'}
                            {selectedBodyScanNode === "Abdomen" && '"Allow belly muscles to relax with effortless gaseous rhythm. Relinquish rigid solar gut tension."'}
                            {selectedBodyScanNode === "Legs" && '"Unclench major quad and calf muscles. Let toes lay relaxed and release ankle strength completely."'}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* persistent bottom Favorite toggler (Task 5) */}
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 flex gap-2 items-center justify-between">
                      <button 
                        onClick={() => toggleFavorite(activeMeditation)}
                        className={`p-2.5 rounded-xl border transition ${favorites.includes(activeMeditation.id) ? "border-rose-300 bg-rose-50 text-rose-500" : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-400"}`}
                      >
                        <Heart className="w-5 h-5 shrink-0" fill={favorites.includes(activeMeditation.id) ? "currentColor" : "none"} />
                      </button>
                      <button 
                        onClick={() => toggleFavorite(activeMeditation)}
                        className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 flex justify-center items-center font-bold text-xs text-white rounded-xl shadow transition"
                      >
                        {favorites.includes(activeMeditation.id) ? "Remove from Favourites" : "Add to Favourites"}
                      </button>
                    </div>
                  </motion.div>
                )}

                
    </>
  );
};
