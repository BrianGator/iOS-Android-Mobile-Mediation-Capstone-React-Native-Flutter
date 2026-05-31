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

export const HomeScreen = (props: any) => {
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
      {activeScreen === "home" && (
                  <motion.div 
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 mt-2 pb-16"
                  >
                    {/* Navigation / Header Bar */}
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-900 pb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                        <span className="bg-blue-600/10 text-blue-600 dark:bg-blue-950 dark:text-blue-300 text-[10px] font-extrabold px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                          MindfulSpace Mobile v2.5
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded">
                          Streak: {dailyStreakCounter} Days 🔥
                        </span>
                        <button 
                          onClick={() => setActiveScreen("settings-menu")} 
                          className="bg-slate-200 dark:bg-slate-800 p-1.5 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition"
                          title="Settings Menu"
                        >
                          <SettingsIcon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                        </button>
                      </div>
                    </div>

                    {/* ==================== TAB 1: MIND & MEDITATION HUB ==================== */}
                    {phoneTab === "meditate" && (
                      <div className="flex flex-col gap-4">
                        {/* Welcome banner */}
                        <div>
                          <p className="text-[11px] font-bold text-slate-400">Written by Brian McCarthy</p>
                          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white leading-tight">Quiet Your Inner World</h3>
                        </div>

                        {/* Dynamic Quote API */}
                        <div className="p-3 bg-blue-50/50 dark:bg-slate-900/60 rounded-xl border border-blue-105 dark:border-slate-800/80 shadow-sm relative">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[8px] uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">Daily Mindful Insight (REST REST API)</span>
                            <button onClick={fetchRandomQuote} disabled={isQuoteLoading} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-100 transition-all">
                              <RefreshCw className={`w-3 h-3 ${isQuoteLoading ? "animate-spin" : ""}`} />
                            </button>
                          </div>
                          <p className="text-slate-700 dark:text-slate-200 text-xs italic leading-relaxed font-mono">
                            {isQuoteLoading ? "Listening to whispers..." : `"${randomQuote}"`}
                          </p>
                        </div>

                        {/* SUBMODULE A: INTERACTIVE CHEST-BREATHING BUBBLE GUIDANCE */}
                        <button 
                          onClick={() => {
                            setActiveDetailsId(1);
                            setActiveScreen("details");
                          }}
                          className="w-full bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-4 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden text-left hover:scale-[1.02] transition-transform flex justify-between items-center"
                        >
                          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest inline-block mb-1">Featured Exercise</span>
                            <h4 className="font-extrabold text-sm mb-0.5">Focus Breathing Cycle</h4>
                            <p className="text-[10px] text-slate-400 line-clamp-1 pr-6">Box breathing to center the mind and relax body tensions.</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-500 shrink-0 relative z-10" />
                        </button>

                        {/* SUBMODULE B: BEDTIME PEACEFUL SOUNDSCAPE RECREATIONAL CONTROLS */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <div>
                              <span className="text-[8px] uppercase font-bold text-slate-400">Bedtime Peaceful ambient soundboards</span>
                              <h4 className="font-extrabold text-xs text-slate-850 dark:text-white">Sleeping Nature Soundscapes</h4>
                            </div>
                            {activeSoundPlaying && (
                              <div className="flex gap-0.5 items-end justify-center h-4 w-12 bg-blue-50 dark:bg-blue-950 p-1.5 rounded">
                                <span className="w-1 bg-blue-600 rounded animate-[pulse_0.9s_infinite]" style={{ height: "100%" }} />
                                <span className="w-1 bg-blue-600 rounded animate-[pulse_1.3s_infinite_0.1s]" style={{ height: "60%" }} />
                                <span className="w-1 bg-blue-600 rounded animate-[pulse_0.7s_infinite_0.3s]" style={{ height: "80%" }} />
                              </div>
                            )}
                          </div>

                          {/* Sounds Grid */}
                          <div className="grid grid-cols-2 gap-2">
                            {BEDTIME_SOUNDS.map((sound) => (
                              <button
                                key={sound.id}
                                onClick={() => {
                                  if (activeSoundPlaying === sound.id) {
                                    setActiveSoundPlaying(null);
                                    triggerAlert("Muted Sound", `Stopped ${sound.name}.`, "info");
                                  } else {
                                    setActiveSoundPlaying(sound.id);
                                    triggerAlert("Audio Playing", `Soothing ${sound.name} loop started.`, "success");
                                  }
                                }}
                                className={`p-2.5 rounded-xl border text-left transition-all ${activeSoundPlaying === sound.id ? "bg-blue-600 text-white border-blue-500 shadow-md scale-102" : "bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-300 border-slate-100 dark:border-slate-850"}`}
                              >
                                <div className="flex items-center gap-1.5 mb-1">
                                  <span className="text-xs">
                                    {sound.name}
                                  </span>
                                </div>
                                <p className="text-[9px] opacity-75 line-clamp-2 leading-tight">
                                  {sound.description}
                                </p>
                              </button>
                            ))}
                          </div>

                          {/* Sound volume slider, if any sound is active */}
                          {activeSoundPlaying && (
                            <div className="mt-3 bg-slate-50 dark:bg-slate-950 p-2 rounded-lg flex items-center gap-3 border border-slate-150 dark:border-slate-900 transition-all">
                              <Volume2 className="w-4 h-4 text-blue-500 shrink-0" />
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={soundVolume}
                                onChange={(e) => setSoundVolume(Number(e.target.value))}
                                className="w-full h-1 bg-blue-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                              />
                              <span className="text-[10px] font-bold font-mono text-slate-400 w-8">{soundVolume}%</span>
                            </div>
                          )}
                        </div>

                        {/* SUBMODULE C: SLEEP STORIES NARRATED BY CELEBRITIES */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-xs font-bold text-slate-450 uppercase tracking-wide">Celebrity Sleep Stories</h4>
                            <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 px-2 py-0.5 rounded">Special Casting</span>
                          </div>

                          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                            {CELEB_SLEEP_STORIES.map((story) => (
                              <div
                                key={story.id}
                                onClick={() => {
                                  setActiveStoryPlaying(story.id);
                                  setStoryProgress(0);
                                  setIsStoryPaused(false);
                                  triggerAlert("Story Initiated", `Playing story by ${story.narrator}`, "success");
                                }}
                                className="min-w-[155px] max-w-[155px] p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-blue-500/50 transition-all shrink-0 relative group shadow-sm"
                              >
                                <img src={story.image} alt={story.title} className="w-full aspect-[4/3] rounded-xl object-cover mb-2" referrerPolicy="no-referrer" />
                                <h5 className="font-bold text-xs truncate group-hover:text-blue-500 text-slate-900 dark:text-white leading-tight">{story.title}</h5>
                                <span className="text-[10px] text-blue-500 dark:text-blue-400 font-bold block mt-0.5">{story.narrator}</span>
                                <span className="text-[9px] text-slate-400 font-mono inline-block mt-1">🕒 {story.duration}</span>

                                {activeStoryPlaying === story.id && (
                                  <div className="absolute inset-0 bg-slate-950/80 rounded-2xl flex flex-col justify-center items-center p-2 z-20">
                                    <div className="flex gap-1 mb-2">
                                      <span className="w-1.5 h-3.5 bg-rose-500 rounded animate-[pulse_0.8s_infinite]" />
                                      <span className="w-1.5 h-3.5 bg-rose-500 rounded animate-[pulse_1s_infinite_0.1s]" />
                                      <span className="w-1.5 h-3.5 bg-rose-500 rounded animate-[pulse_0.9s_infinite_0.3s]" />
                                    </div>
                                    <p className="text-[9px] text-center font-bold text-white truncate w-full">Now reading...</p>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveStoryPlaying(null);
                                      }}
                                      className="mt-2 text-[8px] bg-rose-600 hover:bg-rose-700 font-bold text-white px-2 py-0.5 rounded uppercase"
                                    >
                                      Stop Audio
                                    </button>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* SUBMODULE D: AMBIENT NATURE SOUNDSCAPES */}
                        <div>
                          <h4 className="text-xs font-bold text-slate-450 uppercase tracking-wide mb-2">Soothing Multi-channel Soundscapes</h4>
                          <div className="flex flex-col gap-2">
                            {SOOTHING_SOUNDSCAPES.map((sc) => (
                              <div
                                key={sc.id}
                                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2.5 rounded-xl flex items-center gap-3"
                              >
                                <img src={sc.image} alt={sc.title} className="w-12 h-12 rounded-lg object-cover shrink-0" referrerPolicy="no-referrer" />
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-bold text-xs truncate text-slate-800 dark:text-white">{sc.title}</h5>
                                  <span className="text-[9px] text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950 px-1.5 py-0.5 rounded">{sc.category}</span>
                                  <p className="text-[9px] text-slate-400 mt-1 lines-clamp-1">{sc.description}</p>
                                </div>
                                <button
                                  onClick={() => {
                                    triggerAlert("Atmosphere Synced", `Now broadcasting ${sc.title} in back channels.`, "success");
                                  }}
                                  className="p-1.5 bg-slate-100 hover:bg-blue-650 dark:bg-slate-800 text-slate-500 dark:text-slate-350 rounded-lg hover:text-blue-500 transition shrink-0"
                                >
                                  <Play className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Original MOCK_MEDITATIONS Popular List and Daily guides */}
                        <div>
                          <h4 className="text-xs font-bold text-slate-450 uppercase tracking-wide mb-2">Original Guided Meditations</h4>
                          <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
                            {MOCK_MEDITATIONS.map((med) => (
                              <div 
                                key={med.id}
                                onClick={() => {
                                  setActiveDetailsId(med.id);
                                  setActiveScreen("details");
                                }}
                                className={`min-w-[130px] max-w-[130px] p-2.5 rounded-xl border cursor-pointer transition-all shrink-0 ${activeDetailsId === med.id ? "bg-blue-600 text-white border-blue-500" : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-150 dark:border-slate-850"}`}
                              >
                                <img src={med.image} alt={med.title} className="w-full aspect-video rounded-lg object-cover mb-2" referrerPolicy="no-referrer" />
                                <h5 className="font-bold text-[11px] truncate">{med.title}</h5>
                                <span className="text-[8px] opacity-75">{med.target} • {med.duration}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}



                    {/* ==================== TAB 2: YOGA & FITNESS GUIDES ==================== */}
                    {phoneTab === "fitness" && (
                      <div className="flex flex-col gap-4">
                        <div>
                          <p className="text-[11px] font-bold text-slate-400">Written by Brian McCarthy</p>
                          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white leading-tight">Body Alignment & Movement</h3>
                        </div>

                        {/* SUB-SECTION 1: YOGA STRETCHES */}
                        <div>
                          <div className="flex justify-between items-center mb-2 border-l-4 border-blue-500 pl-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Yoga Stretches Guide</span>
                            <span className="text-[9px] bg-blue-105 border border-blue-200 text-blue-600 dark:bg-blue-950 dark:text-blue-300 font-mono px-2 py-0.5 rounded">Option B Suite</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {YOGA_GUIDE.map((pose) => (
                              <div
                                key={pose.id}
                                onClick={() => {
                                  setSelectedYogaItem(selectedYogaItem === pose.id ? null : pose.id);
                                }}
                                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-xl p-2.5 cursor-pointer hover:border-blue-550 transition relative group shadow-sm flex flex-col"
                              >
                                <img src={pose.image} alt={pose.name} className="w-full aspect-[4/3] rounded-lg object-cover mb-1.5" referrerPolicy="no-referrer" />
                                <h5 className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">{pose.name}</h5>
                                <span className="text-[9px] text-blue-500 block mt-0.5 font-bold">{pose.target}</span>

                                {selectedYogaItem === pose.id && (
                                  <div className="mt-2 bg-slate-50 dark:bg-slate-950 p-2 rounded-lg border border-slate-150 dark:border-slate-850 cursor-default text-[10px] text-slate-650 dark:text-slate-300 leading-normal" onClick={e => e.stopPropagation()}>
                                    <p className="font-bold text-[9px] uppercase tracking-wide text-blue-600 mb-1">Stretching sequence:</p>
                                    <ul className="list-disc pl-3 space-y-1">
                                      {pose.instructions.slice(0,3).map((item, id) => (
                                        <li key={id}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* SUB-SECTION 2: PILATES CORE POSES */}
                        <div>
                          <div className="flex justify-between items-center mb-2 border-l-4 border-cyan-500 pl-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilates Core poses</span>
                            <span className="text-[9px] bg-cyan-100 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-300 font-mono px-2 py-0.5 rounded">Stabile</span>
                          </div>

                          <div className="flex flex-col gap-2">
                            {PILATES_GUIDE.map((pose) => (
                              <div
                                key={pose.id}
                                onClick={() => setSelectedPilatesItem(selectedPilatesItem === pose.id ? null : pose.id)}
                                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-3 cursor-pointer hover:border-cyan-500/50 transition shadow-sm"
                              >
                                <div className="flex items-center gap-3">
                                  <img src={pose.image} alt={pose.name} className="w-12 h-12 rounded-lg object-cover shrink-0" referrerPolicy="no-referrer" />
                                  <div className="flex-1 min-w-0">
                                    <h5 className="font-bold text-xs truncate text-slate-900 dark:text-white">{pose.name}</h5>
                                    <p className="text-[9px] text-slate-405 text-cyan-500 font-bold">{pose.target}</p>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-slate-400" />
                                </div>

                                {selectedPilatesItem === pose.id && (
                                  <div className="mt-2 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-100 dark:border-slate-850 text-[10px] text-slate-650 dark:text-slate-350 leading-relaxed space-y-1" onClick={e => e.stopPropagation()}>
                                    <p className="font-bold text-[9px] text-cyan-600">Pilates Instructions:</p>
                                    <ol className="list-decimal pl-4.5 space-y-1">
                                      {pose.instructions.slice(0,3).map((item, id) => (
                                        <li key={id}>{item}</li>
                                      ))}
                                    </ol>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* SUB-SECTION 3: FITNESS REGISTER EXERCISES */}
                        <div>
                          <div className="flex justify-between items-center mb-2 border-l-4 border-yellow-500 pl-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Gym Exercise Guide</span>
                            <span className="text-[9px] bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300 font-mono px-2 py-0.5 rounded">Vigor</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {EXERCISE_GUIDE.map((pose) => (
                              <div
                                key={pose.id}
                                onClick={() => setSelectedExerciseItem(selectedExerciseItem === pose.id ? null : pose.id)}
                                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-xl p-2.5 cursor-pointer hover:border-yellow-500 transition relative group shadow-sm flex flex-col"
                              >
                                <img src={pose.image} alt={pose.name} className="w-full aspect-[4/3] rounded-lg object-cover mb-1.5" referrerPolicy="no-referrer" />
                                <h5 className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">{pose.name}</h5>
                                <span className="text-[9px] text-yellow-650 dark:text-amber-400 block mt-0.5 font-bold">{pose.target}</span>

                                {selectedExerciseItem === pose.id && (
                                  <div className="mt-2 bg-slate-50 dark:bg-slate-950 p-2 rounded-lg border border-slate-150 dark:border-slate-850 cursor-default text-[10px] text-slate-650 dark:text-slate-300 leading-normal" onClick={e => e.stopPropagation()}>
                                    <p className="font-bold text-[9px] uppercase tracking-wide text-yellow-600 mb-1">Execution instructions:</p>
                                    <ul className="list-disc pl-3 space-y-1">
                                      {pose.instructions.slice(0,3).map((item, id) => (
                                        <li key={id}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}



                    {/* ==================== TAB 3: HEALTH LOG TRACKERS HUB ==================== */}
                    {phoneTab === "trackers" && (
                      <div className="flex flex-col gap-4">
                        <div>
                          <p className="text-[11px] font-bold text-slate-400">Written by Brian McCarthy</p>
                          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white leading-tight">Live Progress Trackers</h3>
                        </div>

                        {/* WIDGET 1: SLEEP METRIC RECORDER */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4.5 rounded-2xl shadow-sm">
                          <h4 className="font-bold text-xs text-slate-800 dark:text-white flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-2">
                            <Moon className="w-4 h-4 text-indigo-500" />
                            Sleep Quality Tracker
                          </h4>

                          {/* Interactive logging form */}
                          <div className="grid grid-cols-2 gap-2 mb-3 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-100 dark:border-slate-850">
                            <div>
                              <label className="text-[8px] font-bold uppercase text-slate-400 block">Bed hour</label>
                              <input 
                                type="text"
                                value={inputBed}
                                onChange={(e) => setInputBed(e.target.value)}
                                className="w-full text-xs p-1 rounded border border-slate-200 dark:bg-slate-900 text-slate-800 dark:text-white"
                                placeholder="eg 23:15"
                              />
                            </div>
                            <div>
                              <label className="text-[8px] font-bold uppercase text-slate-400 block">Wake hour</label>
                              <input 
                                type="text"
                                value={inputWake}
                                onChange={(e) => setInputWake(e.target.value)}
                                className="w-full text-xs p-1 rounded border border-slate-200 dark:bg-slate-900 text-slate-800 dark:text-white"
                                placeholder="eg 07:00"
                              />
                            </div>
                            <div className="col-span-2 mt-1">
                              <label className="text-[8px] font-bold uppercase text-slate-400 block">Sleep depth rating</label>
                              <select
                                value={inputSleepRating}
                                onChange={(e) => setInputSleepRating(e.target.value)}
                                className="w-full text-[10px] p-1 rounded border border-slate-200 dark:bg-slate-900 text-slate-850 dark:text-white"
                              >
                                <option value="Deep & Restorative">Deep & Restorative</option>
                                <option value="Good, calm dreams">Good, calm dreams</option>
                                <option value="Light / Incomplete">Light / Incomplete</option>
                                <option value="Fragmented sleep pattern">Fragmented sleep pattern</option>
                              </select>
                            </div>

                            <button
                              onClick={() => {
                                setSleepLog([
                                  {
                                    id: Date.now(),
                                    date: "Today",
                                    bed: inputBed,
                                    wake: inputWake,
                                    rating: inputSleepRating,
                                    hours: 7.5
                                  },
                                  ...sleepLog
                                ]);
                                setDailyStreakCounter(prev => prev + 1);
                                triggerAlert("Sleep log added", "Sync complete with local storage caches.", "success");
                              }}
                              className="w-full col-span-2 mt-2 py-1.5 bg-indigo-600 text-white rounded text-[10px] font-bold"
                            >
                              Log Sleep Record
                            </button>
                          </div>

                          {/* Historical records lists */}
                          <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                            {sleepLog.map((log) => (
                              <div key={log.id} className="text-[10px] flex justify-between p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850">
                                <div>
                                  <span className="font-bold text-slate-800 dark:text-slate-100">{log.date}</span>
                                  <span className="text-[9px] text-slate-400 ml-1.5">({log.bed} - {log.wake})</span>
                                  <p className="text-[9px] text-indigo-500 font-bold block">{log.rating}</p>
                                </div>
                                <span className="font-mono text-slate-400 shrink-0 font-bold">{log.hours} hrs ⌛</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* WIDGET 2: MEDITATION PRACTICE COUNTER */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
                          <h4 className="font-bold text-xs text-slate-800 dark:text-white flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-2.5">
                            <Compass className="w-4 h-4 text-emerald-500" />
                            Mindfulness Tracker
                          </h4>

                          <div className="flex gap-4 mb-3">
                            <div className="flex-1 bg-emerald-50/50 dark:bg-slate-950 p-2 rounded-xl text-center border border-emerald-100">
                              <span className="text-[8px] uppercase font-bold text-emerald-600 block">Total mins</span>
                              <span className="text-lg font-black text-slate-800 dark:text-white font-mono">{meditationMinutes}</span>
                            </div>
                            <div className="flex-1 bg-amber-50/50 dark:bg-slate-950 p-2 rounded-xl text-center border border-amber-100">
                              <span className="text-[8px] uppercase font-bold text-amber-600 block">Active streak</span>
                              <span className="text-lg font-black text-slate-800 dark:text-white font-mono">{meditationStreak} Days</span>
                            </div>
                          </div>

                          <div className="flex gap-2 bg-slate-50 dark:bg-slate-950 p-2 rounded-xl">
                            <input 
                              type="number"
                              value={inputMedMins}
                              onChange={(e) => setInputMedMins(e.target.value)}
                              className="w-16 text-center text-xs p-1 rounded border text-slate-800 dark:text-white bg-white dark:bg-slate-900"
                            />
                            <button
                              onClick={() => {
                                const add = Number(inputMedMins) || 10;
                                setMeditationMinutes(prev => prev + add);
                                setMeditationStreak(prev => prev + 1);
                                setDailyStreakCounter(prev => prev + 1);
                                triggerAlert("Meditation added", `Logged ${add} minutes. streak reinforced!`, "success");
                              }}
                              className="flex-1 py-1.5 bg-emerald-600 active:bg-emerald-700 text-white font-bold rounded-lg text-[10px]"
                            >
                              Add Minutes Meditated
                            </button>
                          </div>
                        </div>

                        {/* WIDGET 3: EXERCISE WORKOUT TRACKER */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4.5 rounded-2xl shadow-sm">
                          <h4 className="font-bold text-xs text-slate-800 dark:text-white flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-2">
                            <Dumbbell className="w-4 h-4 text-orange-500" />
                            Exercise Fitness Tracker
                          </h4>

                          <div className="grid grid-cols-2 gap-2 mb-3 bg-slate-50 dark:bg-slate-950 p-2.5 border border-slate-100 dark:border-slate-850 rounded-xl text-left">
                            <div>
                              <span className="text-[8px] uppercase font-bold text-slate-400 block font-sans">Exercise title</span>
                              <input 
                                type="text"
                                value={inputWorkoutType}
                                onChange={(e) => setInputWorkoutType(e.target.value)}
                                className="w-full text-xs p-1 rounded border dark:bg-slate-900 text-slate-800 dark:text-white"
                                placeholder="eg PushUps"
                              />
                            </div>
                            <div>
                              <span className="text-[8px] uppercase font-bold text-slate-400 block">Length mins</span>
                              <input 
                                type="number"
                                value={inputWorkoutMins}
                                onChange={(e) => setInputWorkoutMins(e.target.value)}
                                className="w-full text-xs p-1 rounded border dark:bg-slate-900 text-slate-800 dark:text-white"
                              />
                            </div>
                            <div className="col-span-2">
                              <span className="text-[8px] uppercase font-bold text-slate-400 block">Intensity Select</span>
                              <select
                                value={inputWorkoutIntensity}
                                onChange={(e) => setInputWorkoutIntensity(e.target.value)}
                                className="w-full text-[10px] p-1 rounded border dark:bg-slate-900 text-slate-900 dark:text-white"
                              >
                                <option value="Restorative">Restorative (stretches)</option>
                                <option value="Moderate">Moderate (aerobics)</option>
                                <option value="High">High Workout (HIIT/Weights)</option>
                              </select>
                            </div>
                            <button
                              onClick={() => {
                                const minVal = Number(inputWorkoutMins) || 15;
                                setExerciseLog([
                                  {
                                    id: Date.now(),
                                    date: "Today",
                                    type: inputWorkoutType,
                                    mins: minVal,
                                    intensity: inputWorkoutIntensity
                                  },
                                  ...exerciseLog
                                ]);
                                setWorkoutMinutes(prev => prev + minVal);
                                setExerciseStreak(prev => prev + 1);
                                setDailyStreakCounter(prev => prev + 1);
                                triggerAlert("Workout registered", `${inputWorkoutType} logged.`, "success");
                              }}
                              className="col-span-2 mt-2 py-1.5 bg-orange-650 hover:bg-orange-700 bg-orange-500 font-bold text-white text-[10px] rounded"
                            >
                              Log workout
                            </button>
                          </div>

                          <div className="space-y-1.5 max-h-36 overflow-y-auto">
                            {exerciseLog.map(ex => (
                              <div key={ex.id} className="text-[10px] flex justify-between p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850">
                                <div>
                                  <span className="font-bold text-slate-850 dark:text-white">{ex.type}</span>
                                  <span className="text-[9px] text-amber-500 font-bold block">Intensity: {ex.intensity}</span>
                                </div>
                                <span className="font-mono text-slate-400 shrink-0 font-bold">{ex.mins} mins 💪</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* WIDGET 4: DAILY QUICK WELLNESS STATS */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4.5 rounded-2xl shadow-sm space-y-3">
                          <h4 className="font-bold text-xs text-slate-850 dark:text-white flex items-center gap-1.5 pb-1 border-b">
                            <Activity className="w-3.5 h-3.5 text-blue-500" />
                            General Wellness Counters
                          </h4>

                          {/* Water intake cups log */}
                          <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl text-left border">
                            <div>
                              <span className="font-bold text-xs block text-slate-800 dark:text-white">Hydration Tracker</span>
                              <span className="text-[9px] font-mono text-slate-400">Total volume logged: {waterCups} cups ({(waterCups * 0.25).toFixed(2)}L)</span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <button 
                                onClick={() => {
                                  if (waterCups > 0) setWaterCups(prev => prev - 1);
                                }}
                                className="w-6 h-6 bg-slate-200 dark:bg-slate-800 text-xs font-bold rounded flex items-center justify-center font-mono hover:bg-slate-300 dark:hover:bg-slate-700 transition"
                              >
                                -
                              </button>
                              <button 
                                onClick={() => {
                                  setWaterCups(prev => prev + 1);
                                  triggerAlert("Water Tracked", "+1 cup registered.", "success");
                                }}
                                className="px-2.5 h-6 bg-blue-105 border border-blue-200 hover:bg-blue-200 text-blue-600 dark:bg-blue-950 dark:text-blue-300 font-bold rounded text-xs flex items-center gap-1"
                              >
                                <Droplet className="w-3 h-3 shrink-0 text-blue-500" />
                                Add Unit
                              </button>
                            </div>
                          </div>

                          {/* Step counters */}
                          <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl text-left border">
                            <div>
                              <span className="font-bold text-xs block text-slate-800 dark:text-white">Pedometer Steps</span>
                              <span className="text-[9px] font-mono text-slate-400">Today: {stepsCounter} / 10,000 steps</span>
                            </div>
                            <button
                              onClick={() => {
                                setStepsCounter(prev => prev + 1500);
                                triggerAlert("Steps Added", "+1500 steps logged.", "success");
                              }}
                              className="px-2.5 py-1 text-[10px] bg-slate-850 hover:bg-slate-850 text-white dark:bg-slate-800 rounded font-bold transition flex items-center gap-1 shrink-0"
                            >
                              <span>+1.5K Steps</span>
                            </button>
                          </div>

                          {/* Quick mood selector log */}
                          <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-900 text-center">
                            <span className="font-bold text-xs block text-slate-800 dark:text-white uppercase text-[9px] mb-2">Track Today's Wellness Mood</span>
                            <div className="flex justify-around items-center">
                              {[
                                { face: "😌", id: "Calm" },
                                { face: "😀", id: "Vibrant" },
                                { face: "😴", id: "Exhausted" },
                                { face: "🤯", id: "Stretched" }
                              ].map(m => (
                                <button
                                  key={m.id}
                                  onClick={() => {
                                    setMoodMood(m.id);
                                    triggerAlert("Mood recorded", `Logged today's emotional state as ${m.id}`, "success");
                                  }}
                                  className={`p-2.5 rounded-lg border text-lg transition-all ${moodMood === m.id ? "bg-blue-600 border-blue-500 scale-120 shadow" : "bg-slate-102 hover:scale-110"}`}
                                >
                                  {m.face}
                                </button>
                              ))}
                            </div>
                            <span className="text-[9px] mt-2 block font-mono text-slate-400 font-bold">Current Log: {moodMood} mood</span>
                          </div>
                        </div>

                      </div>
                    )}



                    {/* ==================== TAB 4: AI WELLNESS COACH ==================== */}
                    {phoneTab === "ai-coach" && (
                      <div className="flex flex-col gap-4">
                        <div>
                          <p className="text-[11px] font-bold text-slate-400">Written by Brian McCarthy</p>
                          <h3 className="font-extrabold text-lg text-slate-905 dark:text-white leading-tight">AI-Assisted Co-Pilot</h3>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-900 to-slate-905 text-white p-4.5 rounded-2xl shadow-md border border-slate-800 relative overflow-hidden text-left bg-gradient-to-br from-slate-900 to-blue-950">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
                          
                          <div className="flex gap-1.5 items-center mb-2">
                            <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                            <h4 className="font-bold text-xs text-slate-100">AI-assisted wellness recommendations</h4>
                          </div>
                          
                          <p className="text-[10px] text-slate-350 leading-relaxed mb-4">
                            Option B includes intelligent algorithmic co-pilot guidance. Input today's focus and bio-stats below, and compute custom routine programs.
                          </p>

                          {/* Inputs */}
                          <div className="space-y-3 bg-black/40 p-3 rounded-xl border border-white/5 text-xs">
                            <div>
                              <span className="text-[9px] text-slate-400 block font-bold mb-1">PROGRAM FITNESS FOCUS</span>
                              <select
                                value={aiFocus}
                                onChange={(e) => setAiFocus(e.target.value)}
                                className="w-full text-xs p-1.5 rounded dark:bg-slate-900 text-slate-200"
                              >
                                <option value="Insomnia & Deep Sleep">Insomnia & Deep Sleep</option>
                                <option value="Anxiety reduction & Somatic Calm">Anxiety reduction & Somatic Calm</option>
                                <option value="Peak Energy & Muscle Ignition">Peak Energy & Muscle Ignition</option>
                              </select>
                            </div>

                            {/* Sliders */}
                            <div>
                              <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold mb-0.5">
                                <span>COGNITIVE STRESS INDEX</span>
                                <span className="font-mono text-amber-400">{aiStressLevel} / 10</span>
                              </div>
                              <input 
                                type="range"
                                min="1"
                                max="10"
                                value={aiStressLevel}
                                onChange={(e) => setAiStressLevel(Number(e.target.value))}
                                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                              />
                            </div>

                            <div>
                              <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold mb-0.5">
                                <span>BASELINE PHYSICAL ENERGY</span>
                                <span className="font-mono text-cyan-400">{aiEnergyLevel} / 10</span>
                              </div>
                              <input 
                                type="range"
                                min="1"
                                max="10"
                                value={aiEnergyLevel}
                                onChange={(e) => setAiEnergyLevel(Number(e.target.value))}
                                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                              />
                            </div>

                            {/* Button */}
                            <button
                              onClick={handleGenerateAiRecommendation}
                              disabled={isAiGenerating}
                              className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-550 hover:to-indigo-550 text-white font-bold rounded-lg text-[10px] transition shadow flex items-center justify-center gap-1 outline-none uppercase"
                            >
                              {isAiGenerating ? (
                                <>
                                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-white shrink-0" />
                                  <span>Synergizing Models...</span>
                                </>
                              ) : (
                                "Formulate Custom AI Protocol"
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Recommended outputs */}
                        <AnimatePresence mode="wait">
                          {isAiGenerating ? (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="bg-white dark:bg-slate-900 border border-dashed border-blue-500/50 p-6 rounded-2xl text-center flex flex-col items-center justify-center min-h-[140px]"
                            >
                              <div className="w-8 h-8 rounded-full border-4 border-t-blue-600 border-r-transparent animate-spin mb-2" />
                              <span className="text-xs text-blue-500 font-bold">Synthesizing personalized routines...</span>
                              <span className="text-[9px] text-slate-400 font-mono mt-1">Applying heuristic guidelines to {aiFocus} Focus...</span>
                            </motion.div>
                          ) : aiCustomResults ? (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4.5 rounded-2xl shadow-sm text-left spacing-y-3"
                            >
                              <div className="flex items-center gap-1 border-b pb-1.5 mb-2">
                                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                                <h4 className="font-extrabold text-xs text-slate-905 dark:text-white">{aiCustomResults.routineTitle}</h4>
                              </div>
                              
                              <p className="text-[10px] text-slate-500 dark:text-slate-300 leading-normal leading-relaxed text-justify">
                                {aiCustomResults.description}
                              </p>

                              {/* Daily Hour Schedule */}
                              <div className="space-y-1.5 mt-3">
                                <span className="text-[8px] font-bold text-slate-400 block uppercase">Personalized Schedule:</span>
                                {aiCustomResults.schedule.map((sch, i) => (
                                  <div key={i} className="bg-slate-50 dark:bg-slate-950 p-2 rounded-xl text-left border border-slate-100 dark:border-slate-900 text-[10px]">
                                    <div className="flex justify-between items-center mb-0.5">
                                      <span className="font-bold text-blue-600">{sch.time}</span>
                                      <span className="text-[8px] uppercase font-mono text-slate-400 font-bold">{sch.purpose.split(" ")[0]} Area</span>
                                    </div>
                                    <h5 className="font-bold text-slate-800 dark:text-slate-100 text-[10px]">{sch.activity}</h5>
                                    <p className="text-[9px] text-slate-400 italic font-mono leading-tight">{sch.purpose}</p>
                                  </div>
                                ))}
                              </div>

                              <div className="bg-amber-100/50 dark:bg-amber-950/20 border border-amber-200/50 p-2.5 rounded-xl text-[10px] mt-2.5">
                                <span className="font-bold text-[9px] text-amber-600 dark:text-amber-400 block uppercase">Pro Biohack Tip:</span>
                                <p className="text-slate-650 dark:text-slate-300 mt-0.5 leading-normal italic">
                                  {aiCustomResults.tip}
                                </p>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="border border-dashed border-slate-205 dark:border-slate-800 p-6 rounded-2xl text-center text-xs text-slate-400 font-mono">
                              Configure the sliders and click formulate above to synthesize specialized programs.
                            </div>
                          )}
                        </AnimatePresence>

                      </div>
                    )}



                    {/* ==================== TAB 5: SYSTEM SETTINGS TABS ==================== */}
                    {phoneTab === "settings" && (
                      <div className="flex flex-col gap-4 text-left">
                        {/* Reuse original activeScreen block settings overlays right inside the tab dynamically */}
                        <div className="flex justify-between items-center border-b pb-2">
                          <h4 className="text-sm font-bold">MindfulSpace Option B Setup</h4>
                          <span className="text-[10px] text-slate-400">Written by Brian McCarthy</span>
                        </div>

                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3.5 rounded-2xl shadow-sm text-left">
                          <h5 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-1.5">User profile data</h5>
                          <span className="font-bold text-sm block text-slate-800 dark:text-white leading-tight">Brian McCarthy</span>
                          <span className="text-[10px] text-slate-405 font-mono select-all block mt-0.5 text-blue-500 font-bold">briansmc@gmail.com</span>
                          <span className="text-[9px] text-slate-400 block mt-1">Persistent token: sample-cookie-token</span>
                        </div>

                        {/* Settings Options list */}
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
                              <span className="text-xs font-bold">My Favourites bookmarked</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </button>

                          <button 
                            onClick={() => setActiveScreen("settings-reminders")}
                            className="flex justify-between items-center bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <Bell className="w-4 h-4 text-blue-600" />
                              <span className="text-xs font-bold">Daily Reminders Trigger</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </button>
                        </div>

                        <button 
                          onClick={handleLogout}
                          className="w-full mt-4 py-2 bg-rose-100 dark:bg-rose-950 hover:bg-rose-250 dark:hover:bg-rose-900 text-rose-600 dark:text-rose-300 text-xs font-bold flex justify-center items-center gap-2 rounded-lg transition"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout Profile Account
                        </button>
                      </div>
                    )}

                  </motion.div>
                )}

                
    </>
  );
};
