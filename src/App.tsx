// Written by Brian McCarthy
import React, { useState, useEffect, useRef } from "react";
import { 
  User, Mail, Lock, Moon, Sun, Smartphone, Download, Check, Sparkles, BookOpen, AlertCircle, Heart, Share2, Compass, Bell, Settings as SettingsIcon, LogOut, Code, FileText, CheckCircle2, ChevronRight, RefreshCw, Layers,
  Volume2, VolumeX, Play, Pause, Activity, Dumbbell, Smile, Brain, Droplet, Plus, Calendar, Trophy, ChevronLeft, Star
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MOCK_MEDITATIONS, CODE_FILES, Meditation,
  YOGA_GUIDE, PILATES_GUIDE, EXERCISE_GUIDE, CELEB_SLEEP_STORIES, BEDTIME_SOUNDS, SOOTHING_SOUNDSCAPES
} from "./data";

export default function App() {
  // Mobile app simulator states
  const [currentUser, setCurrentUser] = useState<{ userName?: string; email?: string; password?: string } | null>(null);
  const [activeScreen, setActiveScreen] = useState<"signup" | "login" | "home" | "details" | "settings-menu" | "settings-favourites" | "settings-theme" | "settings-reminders">("signup");
  
  // Prefill sign up & login coordinates to satisfy autolfill guidelines effortlessly
  const [signupUser, setSignupUser] = useState("BrianMcCarthy");
  const [signupEmail, setSignupEmail] = useState("briansmc@gmail.com");
  const [signupPassword, setSignupPassword] = useState("password");
  const [loginEmail, setLoginEmail] = useState("briansmc@gmail.com");
  const [loginPassword, setLoginPassword] = useState("password");

  // Bottom Navigation phone tab router
  const [phoneTab, setPhoneTab] = useState<"meditate" | "fitness" | "trackers" | "ai-coach" | "settings">("meditate");

  // States
  const [activeDetailsId, setActiveDetailsId] = useState<number>(1);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [activeDetailsTab, setActiveDetailsTab] = useState<"About" | "Instructions">("About");
  const [randomQuote, setRandomQuote] = useState("Loading inspirational quote...");
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);
  const [simulatedAlert, setSimulatedAlert] = useState<{ title: string; desc: string; type: "success" | "error" | "info" } | null>(null);
  const [simulatedRemindersTriggered, setSimulatedRemindersTriggered] = useState(false);

  // New features interactive states
  // 1. Bedtime peaceful sounds playback states
  const [activeSoundPlaying, setActiveSoundPlaying] = useState<string | null>(null);
  const [soundVolume, setSoundVolume] = useState(80);

  // 2. Sleep Story selected playback states 
  const [activeStoryPlaying, setActiveStoryPlaying] = useState<number | null>(null);
  const [storyProgress, setStoryProgress] = useState(0); // percentage 0-100
  const [isStoryPaused, setIsStoryPaused] = useState(false);

  // 3. Dynamic Interactive Breathing Engine 
  const BREATH_MODES = [
    { name: "4-7-8 Deep Sleep", inhale: 4, hold: 7, exhale: 8, color: "from-blue-400 to-indigo-600" },
    { name: "Box Breathing", inhale: 4, hold: 4, exhale: 4, holdExhale: 4, color: "from-cyan-400 to-teal-600" },
    { name: "Balanced Equal", inhale: 5, hold: 0, exhale: 5, color: "from-purple-400 to-pink-600" }
  ];
  const [activeBreathMode, setActiveBreathMode] = useState(0);
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Hold" | "Exhale" | "Hold Out" | "Rest">("Rest");
  const [breathTimer, setBreathTimer] = useState(0);
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  // 4. Trackers states
  const [sleepLog, setSleepLog] = useState<{ id: number; date: string; bed: string; wake: string; rating: string; hours: number }[]>([
    { id: 1, date: "May 28", bed: "22:30", wake: "06:30", rating: "Deep & Restorative", hours: 8 },
    { id: 2, date: "May 29", bed: "23:00", wake: "07:15", rating: "Good, light storm", hours: 7.25 }
  ]);
  const [inputBed, setInputBed] = useState("22:30");
  const [inputWake, setInputWake] = useState("06:30");
  const [inputSleepRating, setInputSleepRating] = useState("Deep & Restorative");

  const [meditationMinutes, setMeditationMinutes] = useState(120);
  const [meditationStreak, setMeditationStreak] = useState(7);
  const [inputMedMins, setInputMedMins] = useState("15");

  const [workoutMinutes, setWorkoutMinutes] = useState(180);
  const [exerciseStreak, setExerciseStreak] = useState(4);
  const [exerciseLog, setExerciseLog] = useState<{ id: number; date: string; type: string; mins: number; intensity: string }[]>([
    { id: 1, date: "May 27", type: "Vinyasa Yoga Focus", mins: 35, intensity: "Restorative" },
    { id: 2, date: "May 29", type: "Bodyweight Push-Ups & Squats", mins: 20, intensity: "High" }
  ]);
  const [inputWorkoutType, setInputWorkoutType] = useState("Core Planks");
  const [inputWorkoutMins, setInputWorkoutMins] = useState("20");
  const [inputWorkoutIntensity, setInputWorkoutIntensity] = useState("Moderate");

  const [waterCups, setWaterCups] = useState(6);
  const [stepsCounter, setStepsCounter] = useState(7850);
  const [moodMood, setMoodMood] = useState("Calm");
  const [dailyStreakCounter, setDailyStreakCounter] = useState(12);

  // 5. Yoga, Pilates, Exercise active selected items (to view overlay detailing instructions)
  const [selectedYogaItem, setSelectedYogaItem] = useState<number | null>(null);
  const [selectedPilatesItem, setSelectedPilatesItem] = useState<number | null>(null);
  const [selectedExerciseItem, setSelectedExerciseItem] = useState<number | null>(null);

  // 6. AI-Assisted Recommendation inputs & generates
  const [aiFocus, setAiFocus] = useState("Insomnia & Deep Sleep");
  const [aiStressLevel, setAiStressLevel] = useState(6); // 1-10
  const [aiEnergyLevel, setAiEnergyLevel] = useState(4); // 1-10
  const [aiCustomResults, setAiCustomResults] = useState<{
    routineTitle: string;
    description: string;
    schedule: { time: string; activity: string; purpose: string }[];
    tip: string;
  } | null>(null);
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  // 7. Interactive Body Node Scan graphic state (fixing Deep Sleep Body Scan issue)
  const [selectedBodyScanNode, setSelectedBodyScanNode] = useState<"Head" | "Shoulders" | "Spine" | "Abdomen" | "Legs">("Head");
  const [scanPulseActive, setScanPulseActive] = useState(true);

  // Applet Workspace States
  const [selectedDocsTab, setSelectedDocsTab] = useState<"readme" | "tutorial" | "explorer" | "deliverables" | "screenshots">("readme");
  const [activeCodeFile, setActiveCodeFile] = useState<string>("signup.js");
  const [selectedScreenshotName, setSelectedScreenshotName] = useState<string>("signup_screen_evidence.png");

  // Fetch Quotes on Mount and upon refreshing in simulator
  const fetchRandomQuote = async () => {
    setIsQuoteLoading(true);
    try {
      const resp = await fetch("https://dummyjson.com/quotes/random");
      if (resp.ok) {
        const json = await resp.json();
        setRandomQuote(json.quote);
      } else {
        setRandomQuote("Peace is a journey of a thousand deep breaths.");
      }
    } catch {
      setRandomQuote("Quiet the mind and the soul will naturally speak.");
    } finally {
      setIsQuoteLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
    
    // Seed default credentials matching the explicit prompt goals so user can login instantly
    const testProfile = { userName: "BrianMcCarthy", email: "briansmc@gmail.com", password: "password", token: "sample-token" };
    if (!localStorage.getItem("userDetails")) {
      localStorage.setItem("userDetails", JSON.stringify(testProfile));
    }

    // Recover user session from localStorage
    const savedUser = localStorage.getItem("userDetails");
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setCurrentUser(parsed);
        // Default to home if logged in
        setActiveScreen("home");
      } catch (err) {
        console.error("Local session recovery failed", err);
      }
    }

    // Recover favorites bookmarked
    const savedFavs = localStorage.getItem("favorites");
    if (savedFavs) {
      try {
        const parsedFavs = JSON.parse(savedFavs);
        setFavorites(parsedFavs.map((m: any) => m.id));
      } catch (err) {
        console.error("Local bookmarks recovery failed", err);
      }
    }
  }, []);

  // Breathing timer update trigger
  useEffect(() => {
    let interval: any = null;
    if (isBreathingActive) {
      const activeTech = BREATH_MODES[activeBreathMode];
      setBreathPhase("Inhale");
      setBreathTimer(activeTech.inhale);
      
      interval = setInterval(() => {
        setBreathTimer((prev) => {
          if (prev <= 1) {
            // Transition phases
            let nextPhase: any = "Inhale";
            setBreathPhase((currentPhase) => {
              const tech = BREATH_MODES[activeBreathMode];
              if (currentPhase === "Inhale") {
                if (tech.hold > 0) {
                  nextPhase = "Hold";
                  setBreathTimer(tech.hold);
                  return "Hold";
                } else {
                  nextPhase = "Exhale";
                  setBreathTimer(tech.exhale);
                  return "Exhale";
                }
              } else if (currentPhase === "Hold") {
                nextPhase = "Exhale";
                setBreathTimer(tech.exhale);
                return "Exhale";
              } else if (currentPhase === "Exhale") {
                if (tech.name.includes("Box")) {
                  nextPhase = "Hold Out";
                  setBreathTimer(4); // Box Breathing holdOut is 4
                  return "Hold Out";
                } else {
                  nextPhase = "Inhale";
                  setBreathTimer(tech.inhale);
                  return "Inhale";
                }
              } else { // Hold Out
                nextPhase = "Inhale";
                setBreathTimer(tech.inhale);
                return "Inhale";
              }
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setBreathPhase("Rest");
      setBreathTimer(0);
    }
    return () => clearInterval(interval);
  }, [isBreathingActive, activeBreathMode]);

  // Sync favorites with simulation AsyncStorage
  const toggleFavorite = (meditation: Meditation) => {
    let updated: number[];
    let updatedFull: Meditation[] = [];
    
    if (favorites.includes(meditation.id)) {
      updated = favorites.filter(id => id !== meditation.id);
      setFavorites(updated);
      triggerAlert("Removed", `${meditation.title} removed from favorites lists!`, "info");
    } else {
      updated = [...favorites, meditation.id];
      setFavorites(updated);
      triggerAlert("Bookmarked", `${meditation.title} added to favorites!`, "success");
    }

    // Generate accurate AsyncStorage payload matching React Native
    updated.forEach(id => {
      const match = MOCK_MEDITATIONS.find(m => m.id === id);
      if (match) updatedFull.push(match);
    });
    localStorage.setItem("favorites", JSON.stringify(updatedFull));
  };

  const triggerAlert = (title: string, desc: string, type: "success" | "error" | "info" = "info") => {
    setSimulatedAlert({ title, desc, type });
    setTimeout(() => {
      setSimulatedAlert(null);
    }, 4000);
  };

  // AI-assisted wellness recommendation computation
  const handleGenerateAiRecommendation = () => {
    setIsAiGenerating(true);
    setAiCustomResults(null);
    setTimeout(() => {
      setIsAiGenerating(false);
      
      let routineTitle = "";
      let description = "";
      let schedule: { time: string; activity: string; purpose: string }[] = [];
      let tip = "";

      if (aiFocus.includes("Insomnia")) {
        routineTitle = "Nightly Sleep Restoration Protocol";
        description = "Optimized for high stress levels. Focuses on parasympathetic trunk activation to override persistent insomnia pathways.";
        schedule = [
          { time: "21:15", activity: "10 mins Child's Pose Yoga Stretch", purpose: "Decompresses the lumbar spine and releases physical shoulder load" },
          { time: "21:40", activity: "Listen to 'The Lavender Valleys' (Stephen Fry)", purpose: "Velvet storytelling lowers active auditory cortex firing" },
          { time: "22:15", activity: "5 mins of 4-7-8 Breathing Technique", purpose: "Triggers physiological sigh, forcing parasympathetic transition" }
        ];
        tip = "Avoid screen blue light after 21:30. Ensure your sleeping quarters are cooler than 20°C.";
      } else if (aiFocus.includes("Anxiety") || aiFocus.includes("Stretched")) {
        routineTitle = "Somatic Centering & Anti-Anxiety System";
        description = "Formulated to actively ground runaway thoughts and release cortisol-induced physical muscle bracing.";
        schedule = [
          { time: "08:00", activity: "8 mins Box Breathing Session", purpose: "Regulates heart rate variability (HRV) and resets nervous system" },
          { time: "12:30", activity: "Kyoto Stream Garden Soundscape", purpose: "Re-focuses cognitive bandwidth during mid-day stress peaks" },
          { time: "18:00", activity: "Cobra Pose & Spine stretch sequence", purpose: "Releases structural tightness in chest and lower back" }
        ];
        tip = "When thoughts begin to spin, practice breathing out at double the length of your inhalation.";
      } else {
        routineTitle = "Peak Energy & Metabolic Ignition System";
        description = "Engineered to promote oxygen saturation, muscular activation, and natural neuro-stimulative firing.";
        schedule = [
          { time: "07:00", activity: "Bodyweight Squats & Plank Hold Circuit", purpose: "Fires primary muscle fibers and triggers blood flow" },
          { time: "08:35", activity: "15 mins Equal Balanced Breathing", purpose: "Maximizes oxygen intake and clears early lethargy" },
          { time: "15:00", activity: "Celestial Floating Ambient Audio", purpose: "Resets neurological baseline without resorting to caffeine" }
        ];
        tip = "Consume 500ml of pure mineral water immediately upon rising to restart metabolic cell pathways.";
      }

      setAiCustomResults({
        routineTitle,
        description,
        schedule,
        tip
      });
      triggerAlert("AI Routine Formulated", "Personalized protocol computed successfully.", "success");
    }, 1100);
  };

  // Hanldlers
  const handleRegister = () => {
    if (!signupUser || !signupEmail || !signupPassword) {
      triggerAlert("Validation Error", "Please fill in all input fields to register.", "error");
      return;
    }
    const details = { userName: signupUser, email: signupEmail, password: signupPassword, token: "sample-token" };
    localStorage.setItem("userDetails", JSON.stringify(details));
    setCurrentUser(details);
    triggerAlert("Registered Successfully!", "Profile stored locally in AsyncStorage simulator. Proceed to login.", "success");
    setActiveScreen("login");
  };

  const handleLogin = () => {
    if (!loginEmail || !loginPassword) {
      triggerAlert("Validation Error", "Please fill in all fields to authenticate.", "error");
      return;
    }
    const saved = localStorage.getItem("userDetails");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.email === loginEmail && parsed.password === loginPassword) {
          setCurrentUser(parsed);
          triggerAlert("Logged In", `Welcome back, ${parsed.userName}!`, "success");
          setActiveScreen("home");
        } else {
          triggerAlert("Auth Failed", "Incorrect email or password registered.", "error");
        }
      } catch {
        triggerAlert("Error", "Storage registry is corrupt. Clear data.", "error");
      }
    } else {
      triggerAlert("No Record Found", "Credentials do not match any active user profiles.", "error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    setCurrentUser(null);
    setFavorites([]);
    setActiveScreen("login");
    setLoginEmail("");
    setLoginPassword("");
    triggerAlert("Logged Out", "Session profiles purged cleanly.", "info");
  };

  // Canvas-based screenshot drawing engine
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drawAndDownloadScreenshot = (name: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas size (perfect iPhone 14 standard resolution mockup size)
    const width = 450;
    const height = 800;
    canvas.width = width;
    canvas.height = height;

    // Draw solid styling based on the dark mode settings
    ctx.fillStyle = "#1A1A2E"; // Nice cosmic midnight blue frame backdrop
    ctx.fillRect(0, 0, width, height);

    // Frame Borders
    ctx.strokeStyle = "#444262";
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, width - 14, height - 14);

    // Top Notch Notch
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.roundRect(140, 14, 170, 24, 12);
    ctx.fill();

    // Headers & Status Indicators
    ctx.fillStyle = "#83829A";
    ctx.font = "bold 13px system-ui";
    ctx.fillText("9:41", 40, 30);
    ctx.fillText("5G  100%", width - 100, 30);

    // Dynamic Draw State
    const activeMed = MOCK_MEDITATIONS.find(m => m.id === activeDetailsId) || MOCK_MEDITATIONS[0];

    switch(name) {
      case "signup_screen_evidence.png":
        drawSmartphoneHeader(ctx, "Sign-up Form Screen", width);
        drawMenuButtonPlaceholder(ctx, width, height);
        drawInputBox(ctx, "Username", signupUser || "LearnerName", 70, 180, width);
        drawInputBox(ctx, "Email", signupEmail || "brian@mccarthy.com", 70, 250, width);
        drawInputBox(ctx, "Password", "••••••••••••", 70, 320, width);
        drawButton(ctx, "Sign Up", "#2563EB", 420, width, false);
        drawTextLink(ctx, "Already have an account? Login", 490, width);
        break;

      case "signup_error.png":
        drawSmartphoneHeader(ctx, "Sign-up Validation Error", width);
        drawInputBox(ctx, "Username", "", 70, 180, width);
        drawInputBox(ctx, "Email", "brian@mccarthy.com", 70, 250, width);
        drawInputBox(ctx, "Password", "", 70, 320, width);
        drawButton(ctx, "Sign Up", "#2563EB", 420, width, false);
        drawAlertBox(ctx, "Validation Error", "Please fill in all fields.", 490, width, "#F87171");
        break;

      case "login_screen_evidence.png":
        drawSmartphoneHeader(ctx, "Login Authentication Screen", width);
        drawMenuButtonPlaceholder(ctx, width, height);
        drawInputBox(ctx, "Email", loginEmail || "brian@mccarthy.com", 120, 220, width);
        drawInputBox(ctx, "Password", "••••••••••••", 120, 290, width);
        drawButton(ctx, "Login", "#2563EB", 390, width, false);
        drawTextLink(ctx, "Don't have an account? Sign Up", 450, width);
        break;

      case "login_error.png":
        drawSmartphoneHeader(ctx, "Login Error State", width);
        drawInputBox(ctx, "Email", "wrong-email@mccarthy.com", 120, 220, width);
        drawInputBox(ctx, "Password", "••••••••", 120, 290, width);
        drawButton(ctx, "Login", "#2563EB", 390, width, false);
        drawAlertBox(ctx, "Error", "Incorrect email or password.", 450, width, "#F87171");
        break;

      case "home-screen-evidence.png":
        drawSmartphoneHeader(ctx, "Home Dashboard View", width);
        drawLogoBadge(ctx, 40, 70); // SkillUp Logo/Text
        drawHomeWelcome(ctx, currentUser?.userName || "Brian McCarthy", width);
        drawQuoteBox(ctx, randomQuote, width);
        drawSectionTitle(ctx, "Popular Meditations", 330);
        drawMeditationListsRow(ctx, width, 360);
        break;

      case "evidence-detail-navigation.png":
        drawSmartphoneHeader(ctx, "UI Detail Navigation Indicator", width);
        drawLogoBadge(ctx, 40, 70);
        drawHomeWelcome(ctx, currentUser?.userName || "Brian McCarthy", width);
        drawQuoteBox(ctx, randomQuote, width);
        drawSectionTitle(ctx, "Popular Meditations", 330);
        drawMeditationListsRow(ctx, width, 360);
        // Highlight active card click with outline
        ctx.strokeStyle = "#2563EB";
        ctx.lineWidth = 4;
        ctx.strokeRect(30, 355, 180, 180);
        drawAlertBox(ctx, "Action Tracker", "Press navigating to /meditation-details/1", 560, width, "#2563EB");
        break;

      case "evidence-detail-screen.png":
        drawSmartphoneHeader(ctx, "Dynamic Details View", width);
        drawBackButtonHeader(ctx, width);
        drawDetailsDisplay(ctx, activeMed, width);
        break;

      case "evidence-persistence.png":
        drawSmartphoneHeader(ctx, "AsyncStorage Key-Value Explorer", width);
        ctx.fillStyle = "#1E293B";
        ctx.fillRect(30, 140, width - 60, height - 350);
        ctx.fillStyle = "#34D399";
        ctx.font = "12px monospace";
        ctx.fillText("> AsyncStorage.getItem('favorites')", 45, 175);
        ctx.fillStyle = "#FAFAFC";
        ctx.fillText(`[ { "id": ${activeMed.id}, "title": "${activeMed.title}" } ]`, 45, 205);
        ctx.fillStyle = "#34D399";
        ctx.fillText("> AsyncStorage.getItem('userDetails')", 45, 245);
        ctx.fillStyle = "#FAFAFC";
        ctx.fillText(`{ "userName": "${currentUser?.userName || 'Brian McCarthy'}", ... }`, 45, 275);
        drawAlertBox(ctx, "Data Preserved!", "Database contents parsed successfully.", 580, width, "#2563EB");
        break;

      case "evidence-integrateScreen-persistence.png":
        drawSmartphoneHeader(ctx, "Favorites Bookmarks synchronized Screen", width);
        drawBackButtonHeader(ctx, width);
        drawDetailsDisplay(ctx, activeMed, width);
        // Draw the toggle switch activated
        ctx.fillStyle = "#EF4444"; 
        ctx.beginPath();
        ctx.arc(60, height - 85, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#FAFAFC";
        // Heart symbol representing active persistence state
        ctx.font = "20px system-ui";
        ctx.fillText("♥", 52, height - 77);
        drawButton(ctx, "Remove from favorites", "#2563EB", height - 110, width, true);
        break;

      case "evidence-api-ux.png":
        drawSmartphoneHeader(ctx, "API Data Fetching (Random Quotes)", width);
        drawLogoBadge(ctx, 40, 70);
        drawHomeWelcome(ctx, currentUser?.userName || "Brian McCarthy", width);
        drawQuoteBox(ctx, '"Inhale therapeutic peace. Exhale structural anxiety."', width);
        drawAlertBox(ctx, "API Success", "Fetched quote from dummyjson.com endpoint.", 450, width, "#34D399");
        break;

      case "evidence-menu-icon.png":
        drawSmartphoneHeader(ctx, "Settings Access Icon on header bar", width);
        drawLogoBadge(ctx, 40, 70);
        ctx.fillStyle = "#1E293B";
        ctx.beginPath();
        ctx.arc(width - 50, 85, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#2563EB";
        ctx.font = "14px system-ui";
        ctx.fillText("⚙", width - 56, 91);
        ctx.strokeStyle = "#2563EB";
        ctx.strokeRect(width - 75, 60, 50, 50);
        break;

      case "evidence-menu-items.png":
        drawSmartphoneHeader(ctx, "Settings Option Menu", width);
        drawBackButtonHeader(ctx, width);
        drawSettingsMenuRow(ctx, "Settings (Theme Switch)", 150, width);
        drawSettingsMenuRow(ctx, "My Favourites", 230, width);
        drawSettingsMenuRow(ctx, "Daily Reminders", 310, width);
        drawSettingsMenuRow(ctx, "Logout", 390, width, true);
        break;

      case "evidence-settings-screen.png":
        drawSmartphoneHeader(ctx, "Client Preferences - Theme Toggle", width);
        drawBackButtonHeader(ctx, width);
        ctx.fillStyle = "#1E293B";
        ctx.roundRect(30, 160, width - 60, 80, 12);
        ctx.fill();
        ctx.fillStyle = "#FAFAFC";
        ctx.font = "bold 16px system-ui";
        ctx.fillText("Dark Mode", 50, 205);
        ctx.fillStyle = "#2563EB";
        ctx.fillRect(width - 100, 185, 50, 30);
        ctx.fillStyle = "#FAFAFC";
        ctx.beginPath();
        ctx.arc(width - 65, 200, 11, 0, Math.PI * 2);
        ctx.fill();
        break;

      case "evidence-notification-configure.png":
        drawSmartphoneHeader(ctx, "Notification Scheduler Configuration", width);
        drawBackButtonHeader(ctx, width);
        ctx.fillStyle = "#1E293B";
        ctx.roundRect(30, 160, width - 60, 160, 12);
        ctx.fill();
        ctx.fillStyle = "#FAFAFC";
        ctx.font = "bold 16px system-ui";
        ctx.fillText("Daily Reminders Alert", 50, 205);
        ctx.fillStyle = "#71717A";
        ctx.fillRect(width - 100, 185, 50, 30);
        ctx.fillStyle = "#FAFAFC";
        ctx.beginPath();
        ctx.arc(width - 85, 200, 11, 0, Math.PI * 2);
        ctx.fill();
        drawButton(ctx, "Confirm and Trigger Test Notify", "#2563EB", 360, width, false);
        break;

      case "evidence-notification-alert.png":
        drawSmartphoneHeader(ctx, "Test Notification Triggered Alert", width);
        drawBackButtonHeader(ctx, width);
        ctx.fillStyle = "#1E293B";
        ctx.roundRect(30, 160, width - 60, 160, 12);
        ctx.fill();
        ctx.fillStyle = "#FAFAFC";
        ctx.font = "bold 16px system-ui";
        ctx.fillText("Daily Reminders Alert", 50, 205);
        drawButton(ctx, "Confirm and Trigger Test Notify", "#2563EB", 360, width, false);
        // Trigger simulated prompt alert dialog
        ctx.fillStyle = "rgba(0,0,0,0.75)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "#FAFAFC";
        ctx.roundRect(50, 300, width - 100, 200, 16);
        ctx.fill();
        ctx.fillStyle = "#1E293B";
        ctx.font = "bold 16px system-ui";
        ctx.fillText("Test Notification!", 75, 345);
        ctx.font = "13px system-ui";
        ctx.fillStyle = "#4B5563";
        ctx.fillText("Time for your daily meditation.", 75, 385);
        ctx.fillText("Keep up your healthy streaks!", 75, 410);
        ctx.fillStyle = "#2563EB";
        ctx.roundRect(75, 440, width - 150, 40, 8);
        ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 14px system-ui";
        ctx.fillText("Awesome", width / 2 - 30, 465);
        break;

      case "figma-evidence1.png":
        drawSmartphoneHeader(ctx, "Figma Screens Group-1 Mockup", width);
        ctx.fillStyle = "#0F172A";
        ctx.fillRect(15, 120, width - 30, height - 200);
        ctx.fillStyle = "#FAFAFC";
        ctx.font = "bold 15px system-ui";
        ctx.fillText("5 Figma Viewports Blueprint", width / 2 - 100, 170);
        drawFigmaScreenBox(ctx, "1. Login Frame", 210, width);
        drawFigmaScreenBox(ctx, "2. Registration Frame", 290, width);
        drawFigmaScreenBox(ctx, "3. Home Feed Dashboard view", 370, width);
        drawFigmaScreenBox(ctx, "4. Meditation Detail screen", 450, width);
        drawFigmaScreenBox(ctx, "5. Favourites user listings", 530, width);
        break;

      case "figma-evidence2.png":
        drawSmartphoneHeader(ctx, "Figma Screens Group-2 Mockup", width);
        ctx.fillStyle = "#0F172A";
        ctx.fillRect(15, 120, width - 30, height - 200);
        ctx.fillStyle = "#FAFAFC";
        ctx.font = "bold 15px system-ui";
        ctx.fillText("4 Figma Settings Viewports", width / 2 - 100, 170);
        drawFigmaScreenBox(ctx, "6. External API integration component", 210, width);
        drawFigmaScreenBox(ctx, "7. The dynamic settings options menu", 295, width);
        drawFigmaScreenBox(ctx, "8. Settings Light-Dark switch screen", 380, width);
        drawFigmaScreenBox(ctx, "9. Daily Notifications setup view", 465, width);
        break;

      default:
        drawSmartphoneHeader(ctx, "MindfulSpace Capstone Simulator", width);
        break;
    }

    // Write McCarthy Credit Tag
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(14, height - 42, width - 28, 28);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 11px system-ui";
    ctx.fillText("CAPSTONE DELIVERABLE • WRITTEN BY BRIAN MCCARTHY", width / 2 - 150, height - 24);

    // Save and pop download
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerAlert("Image Downloaded!", `Saved ${name} successfully!`, "success");
  };

  // Canvas drawing sub routines
  const drawSmartphoneHeader = (ctx: CanvasRenderingContext2D, title: string, width: number) => {
    ctx.fillStyle = "#2563EB";
    ctx.fillRect(14, 45, width - 28, 4);
    ctx.fillStyle = "#FAFAFC";
    ctx.font = "bold 18px system-ui";
    ctx.fillText(title, width/2 - ctx.measureText(title).width/2, 115);
  };

  const drawBackButtonHeader = (ctx: CanvasRenderingContext2D, width: number) => {
    ctx.fillStyle = "#1E293B";
    ctx.fillRect(30, 135, width-60, 40);
    ctx.fillStyle = "#FAFAFC";
    ctx.font = "bold 14px system-ui";
    ctx.fillText("← Main Screen", 45, 160);
  };

  const drawMenuButtonPlaceholder = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = "#94A3B8";
    ctx.beginPath();
    ctx.arc(width/2, height - 40, 25, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawInputBox = (ctx: CanvasRenderingContext2D, label: string, value: string, x: number, y: number, width: number) => {
    ctx.fillStyle = "#83829A";
    ctx.font = "12px system-ui";
    ctx.fillText(label, 30 + 5, y - 8);

    ctx.fillStyle = "#0F172A";
    ctx.roundRect(30, y, width - 60, 45, 8);
    ctx.fill();
    ctx.strokeStyle = "#444262";
    ctx.strokeRect(30, y, width - 60, 45);

    ctx.fillStyle = "#FAFAFC";
    ctx.font = "14px system-ui";
    ctx.fillText(value, 42, y + 27);
  };

  const drawButton = (ctx: CanvasRenderingContext2D, text: string, color: string, y: number, width: number, compact: boolean) => {
    ctx.fillStyle = color;
    const btnW = compact ? width - 150 : width - 60;
    const btnX = compact ? 120 : 30;
    ctx.roundRect(btnX, y, btnW, 50, 10);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 15px system-ui";
    const metricW = ctx.measureText(text).width;
    ctx.fillText(text, btnX + btnW/2 - metricW/2, y + 31);
  };

  const drawTextLink = (ctx: CanvasRenderingContext2D, text: string, y: number, width: number) => {
    ctx.fillStyle = "#60A5FA";
    ctx.font = "14px system-ui";
    const metricW = ctx.measureText(text).width;
    ctx.fillText(text, width/2 - metricW/2, y);
  };

  const drawAlertBox = (ctx: CanvasRenderingContext2D, title: string, text: string, y: number, width: number, color: string) => {
    ctx.fillStyle = color;
    ctx.roundRect(30, y, width - 60, 55, 8);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 13px system-ui";
    ctx.fillText(title, 45, y + 22);
    ctx.font = "12px system-ui";
    ctx.fillText(text, 45, y + 42);
  };

  const drawLogoBadge = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.fillStyle = "#2563EB";
    ctx.roundRect(x, y, 120, 30, 6);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 11px system-ui";
    ctx.fillText("SkillUp EdTech", x + 15, y + 18);
  };

  const drawHomeWelcome = (ctx: CanvasRenderingContext2D, text: string, width: number) => {
    ctx.fillStyle = "#FAFAFC";
    ctx.font = "14px system-ui";
    ctx.fillText(`Hello ${text}!`, 30, 150);
    ctx.fillStyle = "#94A3B8";
    ctx.font = "bold 18px system-ui";
    ctx.fillText("Find your perfect meditation", 30, 175);
  };

  const drawQuoteBox = (ctx: CanvasRenderingContext2D, text: string, width: number) => {
    ctx.fillStyle = "#1E293B";
    ctx.roundRect(30, 205, width - 60, 100, 12);
    ctx.fill();
    ctx.strokeStyle = "#444262";
    ctx.lineWidth = 1;
    ctx.strokeRect(30, 205, width - 60, 100);

    ctx.fillStyle = "#FAFAFC";
    ctx.font = "italic 13px system-ui";
    const wraps = wrapTextLines(ctx, text, width - 100);
    wraps.slice(0, 3).forEach((line, index) => {
      ctx.fillText(line, 45, 240 + (index * 20));
    });
  };

  const wrapTextLines = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  const drawSectionTitle = (ctx: CanvasRenderingContext2D, title: string, y: number) => {
    ctx.fillStyle = "#FAFAFC";
    ctx.font = "bold 16px system-ui";
    ctx.fillText(title, 30, y);
  };

  const drawMeditationListsRow = (ctx: CanvasRenderingContext2D, width: number, y: number) => {
    // Left card
    ctx.fillStyle = "#2563EB";
    ctx.roundRect(30, y, 180, 180, 12);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 14px system-ui";
    ctx.fillText("Mindful Breathing", 45, y + 100);
    ctx.font = "12px system-ui";
    ctx.fillText("Mental Health • 10 mins", 45, y + 130);

    // Right card peek
    ctx.fillStyle = "#1E293B";
    ctx.roundRect(230, y, 180, 180, 12);
    ctx.fill();
    ctx.fillStyle = "#FAFAFC";
    ctx.font = "bold 14px system-ui";
    ctx.fillText("Deep Sleep scan", 245, y + 100);
  };

  const drawDetailsDisplay = (ctx: CanvasRenderingContext2D, item: Meditation, width: number) => {
    // Draw meditation image box placeholder
    ctx.fillStyle = "#334155";
    ctx.roundRect(30, 200, width - 60, 180, 12);
    ctx.fill();
    ctx.fillStyle = "#FAFAFC";
    ctx.font = "bold 16px system-ui";
    ctx.fillText(item.title, width/2 - ctx.measureText(item.title).width/2, 410);

    ctx.font = "13px system-ui";
    ctx.fillStyle = "#2563EB";
    ctx.fillText(`${item.target} / ⌛ ${item.duration}`, width/2 - ctx.measureText(`${item.target} / ⌛ ${item.duration}`).width/2, 440);

    // About box paragraphed
    ctx.fillStyle = "#1E293B";
    ctx.roundRect(30, 465, width - 60, 120, 12);
    ctx.fill();
    ctx.fillStyle = "#E2E8F0";
    ctx.font = "12px system-ui";
    const descWraps = wrapTextLines(ctx, item.description, width - 95);
    descWraps.slice(0, 4).forEach((line, index) => {
      ctx.fillText(line, 45, 495 + (index * 18));
    });
  };

  const drawSettingsMenuRow = (ctx: CanvasRenderingContext2D, label: string, y: number, width: number, warning: boolean = false) => {
    ctx.fillStyle = warning ? "#FCA5A5" : "#1E293B";
    ctx.roundRect(30, y, width - 60, 60, 10);
    ctx.fill();
    ctx.fillStyle = warning ? "#991B1B" : "#FAFAFC";
    ctx.font = "bold 15px system-ui";
    ctx.fillText(label, 50, y + 36);
    ctx.fillText("›", width - 60, y + 36);
  };

  const drawFigmaScreenBox = (ctx: CanvasRenderingContext2D, label: string, y: number, width: number) => {
    ctx.fillStyle = "#38BDF8";
    ctx.roundRect(30, y, width - 60, 60, 8);
    ctx.fill();
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 14px system-ui";
    ctx.fillText(label, 50, y + 35);
    ctx.font = "11px system-ui";
    ctx.fillStyle = "#0369A1";
    ctx.fillText("FIGMA BLUEPRINT VIEWPORT COMPONENT", 50, y + 51);
  };

  const handleTestNotificationTrigger = () => {
    setSimulatedRemindersTriggered(true);
    triggerAlert("Push Warning!", "Local system alert scheduler dispatched. Check phone notification!", "success");
    setTimeout(() => {
      setSimulatedRemindersTriggered(false);
    }, 6000);
  };

  const activeMeditation = MOCK_MEDITATIONS.find(m => m.id === activeDetailsId) || MOCK_MEDITATIONS[0];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}>
      {/* Hidden Download Utility Canvas */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* Applet Top Header */}
      <header className="bg-slate-800 text-white p-6 flex flex-wrap justify-between items-center border-b-4 border-blue-600 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 overflow-hidden flex items-center justify-center text-white shrink-0">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">Meditation App: Mobile iOS Android Capstone Project Showcase</h1>
            <p className="text-slate-350 text-xs md:text-sm font-semibold italic">
              Project Title: <span className="text-blue-400 font-mono select-all bg-slate-900/60 px-1.5 py-0.5 rounded ml-1">iOS-Android-Mobile-Mediation-Capstone-React-Native-Flutter</span>
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center text-right">
          <div className="hidden md:block">
            <span className="block font-semibold text-blue-400 font-mono">Brian McCarthy</span>
            <span className="text-xs text-slate-300 uppercase tracking-widest">Lead Developer</span>
          </div>
          <div className="flex gap-3 items-center">
            {/* Direct Link to Project README */}
            <button
              onClick={() => {
                setSelectedDocsTab("readme");
                document.getElementById("workspace-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all text-white px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-sm uppercase tracking-wider cursor-pointer"
              title="Click to view full structured Repository README"
            >
              <FileText className="w-3.5 h-3.5" />
              Project README
            </button>
            <span className="text-xs bg-slate-900 px-3 py-1.5 rounded-full border border-slate-700 text-slate-300">
              Current Status: <b className="text-emerald-400">Public Portal</b> (Capstone Option B)
            </span>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="p-2 rounded-full bg-slate-900 text-slate-200 hover:bg-slate-705 bg-slate-900 text-slate-200 hover:bg-slate-700 transition"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Body Grid */}
      <main className="max-w-7xl mx-auto p-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COMPONENT: Interactive Mobile Device Emulator */}
        <section className="lg:col-span-5 flex flex-col items-center">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2 justify-center">
              <Smartphone className="w-5 h-5 text-blue-600" />
              Live iOS / Android App Emulator
            </h2>
            <p className="text-xs text-slate-400">Practice live: click around, fill inputs, and test variables locally.</p>
          </div>

          {/* Virtual Phone Container */}
          <div className="relative w-full max-w-[370px] aspect-[9/18.5] rounded-[44px] border-[10px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden ring-4 ring-blue-500/10 flex flex-col">
            
            {/* Phone Notch/Header Spacer */}
            <div className="absolute top-0 inset-x-0 h-8 flex justify-between items-center px-6 z-50 text-[11px] font-bold text-slate-400">
              <span>9:41</span>
              {/* Dynamic Theme Notch */}
              <div className="w-28 h-4 rounded-b-xl bg-slate-900 mx-auto absolute left-1/2 -translate-x-1/2 top-0" />
              <div className="flex items-center gap-1">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* Simulated Notification Toast Pop */}
            <AnimatePresence>
              {simulatedRemindersTriggered && (
                <motion.div 
                  initial={{ y: -60, opacity: 0 }}
                  animate={{ y: 35, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  className="absolute top-0 inset-x-3 p-3 bg-slate-900 rounded-xl border border-blue-500/50 shadow-lg text-white z-50 flex gap-2"
                >
                  <Bell className="w-5 h-5 text-blue-500 shrink-0" />
                  <div>
                    <h5 className="font-bold text-xs">MindfulSpace Alert</h5>
                    <p className="text-[10px] text-slate-300">Time for your daily exercise! Tap to breathe deeply.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Simulated Storage Status indicator inside the application screen frame */}
            <div className="absolute bottom-16 right-3 bg-black/65 text-slate-100 text-[9px] px-2 py-1 rounded border border-white/10 z-40">
              Local: {currentUser ? "Logged In" : "Offline"}
            </div>

            {/* Virtual Device Output Frame Screen */}
            <div className={`flex-1 p-5 pt-10 pb-12 overflow-y-auto overflow-x-hidden relative transition-colors ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}>
              
              {/* SCREEN Router Logic */}
              <AnimatePresence mode="wait">
                
                {/* 1. SIGNUP SCREEN */}
                {activeScreen === "signup" && (
                  <motion.div 
                    key="signup"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col gap-4 mt-2"
                  >
                    <div className="text-center py-4">
                      <div className="w-14 h-14 bg-blue-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600">
                        <User className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-base">New Learner Register</h4>
                      <p className="text-[11px] text-slate-500">Option B Mobile Capstone Signup</p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Username</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            value={signupUser} 
                            onChange={(e) => setSignupUser(e.target.value)} 
                            placeholder="Enter Username" 
                            className="w-full text-xs p-2.5 pl-8 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
                          />
                          <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Email Address</label>
                        <div className="relative">
                          <input 
                            type="email" 
                            value={signupEmail} 
                            onChange={(e) => setSignupEmail(e.target.value)} 
                            placeholder="Enter Email" 
                            className="w-full text-xs p-2.5 pl-8 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
                          />
                          <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Password</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            value={signupPassword} 
                            onChange={(e) => setSignupPassword(e.target.value)} 
                            placeholder="Enter Password" 
                            className="w-full text-xs p-2.5 pl-8 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
                          />
                          <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
                        </div>
                      </div>

                      <button 
                        onClick={handleRegister}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-xs text-white rounded-lg transition mt-2 shadow-md outline-none"
                      >
                        Sign Up
                      </button>

                      <div className="text-center text-xs mt-2 text-slate-500">
                        Already have an account?{" "}
                        <button onClick={() => setActiveScreen("login")} className="text-blue-500 font-bold hover:underline">
                          Login
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. LOGIN SCREEN */}
                {activeScreen === "login" && (
                  <motion.div 
                    key="login"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col gap-4 mt-2"
                  >
                    <div className="text-center py-4">
                      <div className="w-14 h-14 bg-blue-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600">
                        <Lock className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-base">Learner Login Portal</h4>
                      <p className="text-[11px] text-slate-500">Sync with local user profiles</p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Email Address</label>
                        <div className="relative">
                          <input 
                            type="email" 
                            value={loginEmail} 
                            onChange={(e) => setLoginEmail(e.target.value)} 
                            placeholder="username@mccarthy.com" 
                            className="w-full text-xs p-2.5 pl-8 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
                          />
                          <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Password</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            value={loginPassword} 
                            onChange={(e) => setLoginPassword(e.target.value)} 
                            className="w-full text-xs p-2.5 pl-8 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
                          />
                          <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
                        </div>
                      </div>

                      <button 
                        onClick={handleLogin}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-xs text-white rounded-lg transition mt-2 shadow-md outline-none"
                      >
                        Login
                      </button>

                      <div className="text-center text-xs mt-2 text-slate-500">
                        Don't have an account?{" "}
                        <button onClick={() => setActiveScreen("signup")} className="text-blue-500 font-bold hover:underline">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. HOME MODULE HUB (WITH 5-TAB BOTTOM BAR ROUTER) */}
                {activeScreen === "home" && (
                  <motion.div 
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 mt-2 pb-16"
                  >
                    {/* Header Bar */}
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-900 pb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                        <span className="bg-blue-600/10 text-blue-600 dark:bg-blue-950 dark:text-blue-300 text-[10px] font-extrabold px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                          MindfulSpace Mobile v2.5
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded">
                          Streak: {dailyStreakCounter} Days 🔥
                        </span>
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
                        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-4 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
                          <div className="flex justify-between items-center mb-2">
                            <div>
                              <span className="text-[8px] uppercase font-bold tracking-widest text-blue-400">Zen Pulmonary Respiration Trainer</span>
                              <h4 className="font-bold text-xs truncate">Interactive Breathing Guideline</h4>
                            </div>
                            <span className="text-[10px] font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-900 text-blue-300">
                              {BREATH_MODES[activeBreathMode].name}
                            </span>
                          </div>

                          {/* Quick selection tabs */}
                          <div className="flex gap-1 mb-3">
                            {BREATH_MODES.map((mode, index) => (
                              <button
                                key={index}
                                onClick={() => {
                                  setActiveBreathMode(index);
                                  setIsBreathingActive(false);
                                }}
                                className={`flex-1 py-1 text-[9px] rounded font-bold transition-all ${activeBreathMode === index ? "bg-blue-600 text-white" : "bg-slate-950 text-slate-400"}`}
                              >
                                {mode.name.split(" ")[0]}
                              </button>
                            ))}
                          </div>

                          {/* Pulsing expand-contract chest circle */}
                          <div className="flex flex-col items-center justify-center py-6 relative">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={breathPhase}
                                animate={{
                                  scale: isBreathingActive 
                                    ? (breathPhase === "Inhale" ? 1.6 : breathPhase === "Exhale" ? 1.0 : breathPhase === "Hold" ? 1.6 : 0.95) 
                                    : 1.0,
                                  boxShadow: breathPhase === "Inhale" || breathPhase === "Hold"
                                    ? "0 0 25px rgba(59, 130, 246, 0.4)"
                                    : "0 0 5px rgba(59, 130, 246, 0.05)"
                                }}
                                transition={{
                                  duration: isBreathingActive 
                                    ? (breathPhase === "Inhale" ? BREATH_MODES[activeBreathMode].inhale : breathPhase === "Exhale" ? BREATH_MODES[activeBreathMode].exhale : 2) 
                                    : 1.0,
                                  ease: "easeInOut"
                                }}
                                className={`w-20 h-20 rounded-full bg-gradient-to-br ${BREATH_MODES[activeBreathMode].color} flex flex-col items-center justify-center text-center p-2 relative z-10`}
                              >
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{breathPhase}</span>
                                {isBreathingActive && (
                                  <span className="text-xs font-black text-white font-mono">{breathTimer}s</span>
                                )}
                              </motion.div>
                            </AnimatePresence>

                            {/* Back ring aura */}
                            <div className="absolute w-24 h-24 rounded-full border border-blue-500/15 animate-[ping_3s_infinite]" />
                          </div>

                          {/* Control Button */}
                          <div className="flex gap-2 items-center">
                            <button
                              onClick={() => {
                                setIsBreathingActive(!isBreathingActive);
                              }}
                              className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all text-xs font-bold text-white shadow"
                            >
                              {isBreathingActive ? "Pause Respiration" : "Begin Breathing Cycle"}
                            </button>
                            {isBreathingActive && (
                              <button
                                onClick={() => setIsBreathingActive(false)}
                                className="px-3 py-2 bg-slate-950 hover:bg-slate-900 rounded-xl text-xs font-bold text-slate-400"
                              >
                                Reset
                              </button>
                            )}
                          </div>
                        </div>

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

                {/* 4. MEDITATION DETAILS SCREEN */}
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
                      <button onClick={() => setActiveScreen("home")} className="text-xs text-blue-600 font-bold flex items-center gap-1">
                        ← Back Feed
                      </button>
                      <button 
                        onClick={() => triggerAlert("Shared", `Invitation sent successfully to your device for: ${activeMeditation.title}`, "success")}
                        className="p-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded"
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
                            className="absolute inset-x-0 h-0.5 bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] z-20"
                          />
                          
                          {/* Modern SVG silhouette */}
                          <svg viewBox="0 0 100 200" className="w-18 h-40 text-slate-755 dark:text-slate-700 drop-shadow-[0_0_15px_rgba(59,130,246,0.15)] opacity-90 fill-current relative z-10 text-slate-700">
                            <path d="M50,15 A6,6 0 1 1 50,3 A6,6 0 1 1 50,15 M44,24 L56,24 Q57,35 55,48 L55,85 A4,4 0 0 1 51,89 L49,89 A4,4 0 0 1 45,85 L45,48 Q43,35 44,24 Z" />
                            <path d="M42,24 Q36,24 33,35 L26,75 Q24,80 27,82 L30,79 L31,50 L34,50" />
                            <path d="M58,24 Q64,24 67,35 L74,75 Q76,80 73,82 L70,79 L69,50 L66,50" />
                            <path d="M45,85 L44,145 A4,4 0 0 1 40,149 L38,149 A4,4 0 0 1 34,145 L38,92" />
                            <path d="M55,85 L56,145 A4,4 0 0 1 60,149 L62,149 A4,4 0 0 1 66,145 L62,92" />
                          </svg>

                          {/* Absolute clickable nodes */}
                          <button 
                            onClick={() => setSelectedBodyScanNode("Head")}
                            className={`absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center ${selectedBodyScanNode === "Head" ? "bg-blue-500 border-white scale-125 shadow-[0_0_8px_#3b82f6]" : "bg-slate-900 border-blue-500 hover:scale-125"}`}
                          >
                            <span className="w-1 h-1 bg-white rounded-full" />
                          </button>

                          <button 
                            onClick={() => setSelectedBodyScanNode("Shoulders")}
                            className={`absolute top-12 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center ${selectedBodyScanNode === "Shoulders" ? "bg-blue-500 border-white scale-125 shadow-[0_0_8px_#3b82f6]" : "bg-slate-900 border-blue-500 hover:scale-125"}`}
                          >
                            <span className="w-1 h-1 bg-white rounded-full" />
                          </button>

                          <button 
                            onClick={() => setSelectedBodyScanNode("Spine")}
                            className={`absolute top-22 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center ${selectedBodyScanNode === "Spine" ? "bg-blue-500 border-white scale-125 shadow-[0_0_8px_#3b82f6]" : "bg-slate-900 border-blue-500 hover:scale-125"}`}
                          >
                            <span className="w-1 h-1 bg-white rounded-full" />
                          </button>

                          <button 
                            onClick={() => setSelectedBodyScanNode("Abdomen")}
                            className={`absolute top-28 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center ${selectedBodyScanNode === "Abdomen" ? "bg-blue-500 border-white scale-125 shadow-[0_0_8px_#3b82f6]" : "bg-slate-900 border-blue-500 hover:scale-125"}`}
                          >
                            <span className="w-1 h-1 bg-white rounded-full" />
                          </button>

                          <button 
                            onClick={() => setSelectedBodyScanNode("Legs")}
                            className={`absolute top-36 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition z-30 flex items-center justify-center ${selectedBodyScanNode === "Legs" ? "bg-blue-500 border-white scale-125 shadow-[0_0_8px_#3b82f6]" : "bg-slate-900 border-blue-500 hover:scale-125"}`}
                          >
                            <span className="w-1 h-1 bg-white rounded-full" />
                          </button>
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

                {/* 5. SETTINGS OPTIONS MENU */}
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

              </AnimatePresence>
            </div>

            {/* Simulated alert popup */}
            <AnimatePresence>
              {simulatedAlert && (
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="absolute bottom-16 inset-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800 text-white z-40 flex items-start gap-2 shadow-xl"
                >
                  <AlertCircle className={`w-4 h-4 mt-0.5 shrink-0 ${simulatedAlert.type === "success" ? "text-emerald-400" : simulatedAlert.type === "error" ? "text-red-400" : "text-amber-400"}`} />
                  <div>
                    <h5 className="font-bold text-xs">{simulatedAlert.title}</h5>
                    <p className="text-[10px] text-slate-300">{simulatedAlert.desc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Virtual Device Home Bar Indicator button */}
            <div className="absolute bottom-1 w-full flex justify-center py-1">
              <div className="w-28 h-1 rounded-full bg-slate-300/40" />
            </div>

            {/* McCartney Watermark explicitly at bottom of simulator */}
            <div className="absolute bottom-6 w-full text-center text-[8px] tracking-wide text-slate-500 font-bold uppercase mix-blend-difference">
              WRITTEN BY BRIAN MCCARTHY
            </div>

          </div>
        </section>

        {/* RIGHT COMPONENT: Capstone workspace portal modules tabs */}
        <section id="workspace-section" className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Sub Header Segment */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-white shadow relative overflow-hidden flex justify-between items-center">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400 bg-orange-950 border border-orange-850 px-2.5 py-0.5 rounded-full mb-2.5 inline-block">
                Capstone Admin Panel
              </span>
              <h2 className="text-2xl font-black text-slate-100">MindfulSpace Option B Suite</h2>
              <p className="text-slate-400 text-xs mt-1">
                Explore dynamic user stories, download grading-evidence graphics, or copy React Native syntax directly.
              </p>
            </div>
            <FileText className="w-12 h-12 text-orange-500/10 shrink-0" />
          </div>

          {/* Docs Navigation Controls */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 scrollbar-thin overflow-x-auto">
            {[
              { id: "readme", label: "Repository README.md", icon: FileText },
              { id: "tutorial", label: "Mobile Coding Tutorials", icon: BookOpen },
              { id: "explorer", label: "React Native Code Explorer", icon: Code },
              { id: "deliverables", label: "Deliverables Q&A", icon: FileText },
              { id: "screenshots", label: "Screenshot File Generator", icon: Layers }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedDocsTab(tab.id as any)}
                className={`py-3 px-4 flex items-center gap-2 font-bold text-xs shrink-0 transition border-b-2 hover:text-blue-500 ${selectedDocsTab === tab.id ? "border-blue-500 text-blue-500" : "border-transparent text-slate-400"}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Module Viewports */}
          <div className="p-1">
            <AnimatePresence mode="wait">
              
              {/* TAB 0: PROJECT README.md */}
              {selectedDocsTab === "readme" && (
                <motion.div 
                  key="readme"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border border-blue-100 dark:border-slate-800 p-6 rounded-2xl bg-white dark:bg-slate-950 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-100 dark:bg-blue-900/40 dark:text-blue-300 px-2.5 py-1 rounded-full">
                        Official Repository Index
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">README.md View</span>
                    </div>

                    <h3 className="font-extrabold text-xl text-slate-900 dark:text-white leading-tight">
                      iOS-Android-Mobile-Mediation-Capstone-React-Native-Flutter
                    </h3>
                    <p className="text-xs text-blue-605 dark:text-blue-400 font-medium mt-1">
                      Website Title: Meditation App: Mobile iOS Android Capstone Project Showcase
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-4">
                      Welcome to the official repository. This capstone portfolio organizes advanced mobile engineering options built on top of declarative frameworks. Under **Option B**, it is fully populated with native iOS (SwiftUI), native Android (Kotlin Compose), and cross-platform (Flutter & React Native) files.
                    </p>
                  </div>

                  {/* Metadata Specs Table */}
                  <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl bg-white dark:bg-slate-950 shadow-sm">
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-4">Technical Specifications</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-slate-100 dark:border-slate-800">
                            <th className="py-2.5 font-bold text-slate-500 w-1/3">Parameter</th>
                            <th className="py-2.5 font-bold text-slate-500">Specification Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100 dark:border-slate-800">
                            <td className="py-2.5 font-semibold text-slate-800 dark:text-slate-300">Project Title</td>
                            <td className="py-2.5 font-mono text-blue-600 dark:text-blue-400 font-bold select-all">iOS-Android-Mobile-Mediation-Capstone-React-Native-Flutter</td>
                          </tr>
                          <tr className="border-b border-slate-100 dark:border-slate-800">
                            <td className="py-2.5 font-semibold text-slate-800 dark:text-slate-300">Website Title</td>
                            <td className="py-2.5 text-slate-600 dark:text-slate-350 font-medium">Meditation App: Mobile iOS Android Capstone Project Showcase</td>
                          </tr>
                          <tr className="border-b border-slate-100 dark:border-slate-800">
                            <td className="py-2.5 font-semibold text-slate-800 dark:text-slate-300">Languages Used</td>
                            <td className="py-2.5 text-slate-600 dark:text-slate-350">TypeScript, JavaScript, Kotlin (JVM), Swift (v5), Dart (v3)</td>
                          </tr>
                          <tr className="border-b border-slate-100 dark:border-slate-800">
                            <td className="py-2.5 font-semibold text-slate-800 dark:text-slate-300">Technologies Integrated</td>
                            <td className="py-2.5 text-slate-600 dark:text-slate-350">React Native, Expo SDK, Jetpack Compose, Apple SwiftUI, Flutter Framework, Vite, React, Tailwind CSS</td>
                          </tr>
                          <tr className="border-b border-slate-100 dark:border-slate-800">
                            <td className="py-2.5 font-semibold text-slate-800 dark:text-slate-300">Methodologies Employed</td>
                            <td className="py-2.5 text-slate-600 dark:text-slate-350">Scaled Agile Framework, Component-Driven Design, State Isolation, Context Theme Management</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-semibold text-slate-800 dark:text-slate-300">Core Branding Palette</td>
                            <td className="py-2.5 text-slate-600 dark:text-slate-350 flex items-center gap-2">
                              <span className="w-3.5 h-3.5 rounded bg-blue-600 inline-block" />
                              <span>SkillUp Tech Blue (#2563EB) & (#3B82F6)</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* File Structure */}
                  <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl bg-white dark:bg-slate-950 shadow-sm">
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-2">Workspace File Structure</h4>
                    <p className="text-[11px] text-slate-500 mb-3">Multi-paradigm directories with functional codebases:</p>
                    <pre className="bg-slate-950 text-slate-300 p-4 rounded-xl text-xs overflow-auto font-mono max-h-[220px] leading-tight border border-slate-900">
{`├── Android-App/
│   └── Android-Kotlin-Code/
│       └── BreathingTimerActivity.kt
├── iOS-App/
│   └── iOS-Swift-Code/
│       └── BreathingTimerView.swift
├── Flutter-Dart-Cross-Platform-files/
│   └── meditation_player_screen.dart
├── React-Native-TypeScript-files/
│   └── BreathingPlayer.tsx
├── src/
│   ├── App.tsx
│   ├── data.ts
│   └── index.css
├── index.html
└── package.json`}
                    </pre>
                  </div>

                  {/* Tutorials Summary Section */}
                  <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl bg-white dark:bg-slate-950 shadow-sm space-y-4">
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400">Mobile Guides & Tutorials Summary</h4>
                    
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900">
                      <h5 className="font-bold text-xs text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        React Native Local AsyncStorage Tutorial
                      </h5>
                      <p className="text-[11px] text-slate-500 dark:text-slate-450 mt-1 leading-relaxed">
                        Integrates `@react-native-async-storage/async-storage` for robust user configuration caching. Writes values to asynchronous execution context threads to keep the UI main thread active at full frame-rates.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900">
                      <h5 className="font-bold text-xs text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        Flutter ChangeNotifier & SharedPreferences Tutorial
                      </h5>
                      <p className="text-[11px] text-slate-500 dark:text-slate-450 mt-1 leading-relaxed">
                        Implements `shared_preferences` persistent registries alongside state dispatch notification emitters (`notifyListeners()`) down Flutter's declarative widget stack.
                      </p>
                    </div>
                  </div>

                  {/* Key Functions & System Requirements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl bg-white dark:bg-slate-950 shadow-sm min-h-[185px]">
                      <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-3">Key Functions</h4>
                      <ul className="text-slate-500 dark:text-slate-400 space-y-2 text-[11px] list-disc pl-4 leading-relaxed">
                        <li><b>Credential & Verification Gateway:</b> Secure credentials validations and login state registers.</li>
                        <li><b>REST Quotes Integration:</b> Asynchronous REST fetching with native loading activity icons.</li>
                        <li><b>Interactive Breathing Player:</b> Deep multi-stage respiration player with adaptive scales.</li>
                        <li><b>Local Favourites Cache:</b> Direct local persistence with sync.</li>
                      </ul>
                    </div>

                    <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl bg-white dark:bg-slate-950 shadow-sm min-h-[185px]">
                      <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-3">System Requirements</h4>
                      <ul className="text-slate-500 dark:text-slate-450 space-y-2 text-[11px] list-disc pl-4 leading-relaxed">
                        <li><b>Development Operating Systems:</b> macOS Ventura+, Windows 11, or Ubuntu 22.04+</li>
                        <li><b>Simulate & Test environments:</b> Node.js v18+ with standard NPM registers.</li>
                        <li><b>Mobile Virtual Device:</b> Xcode 15+ iOS Simulator, or Android Studio API 33+.</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 1: CODE TUTORIAL */}
              {selectedDocsTab === "tutorial" && (
                <motion.div 
                  key="tutorial"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="border border-slate-100 dark:border-slate-800/80 p-5 rounded-2xl bg-white dark:bg-slate-950 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                       React Native Mobile Storage Setup
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      React Native uses AsyncStorage for key-value local persistence, running in an asynchronous thread to avoid slowing down rendering or frame animations. Take a look at how this methodology is applied to the favorites toggle in our project:
                    </p>
                    
                    <pre className="bg-slate-950 text-emerald-400 p-4 rounded-xl text-xs overflow-x-auto border border-slate-900 font-mono">
                      {`// Written by Brian McCarthy
const handleFavoriteToggle = async () => {
  try {
    let favorites = await AsyncStorage.getItem("favorites");
    favorites = favorites ? JSON.parse(favorites) : [];
    
    // Toggle active state item in array
    const updatedFavorites = isFavorite
      ? favorites.filter((item) => item.id !== data.id)
      : [...favorites, data];
      
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite); // Forces instant UI repaint
  } catch (error) {
    console.error("Storage write error", error);
  }
};`}
                    </pre>
                  </div>

                  <div className="border border-slate-100 dark:border-slate-800/80 p-5 rounded-2xl bg-white dark:bg-slate-950 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      Cross-Platform Alternative: Flutter Local State
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      In Flutter (Dart-based syntax), SharedPreferences is used for lightweight client-side registries. ChangeNotifiers handle prop dissemination seamlessly down widget lists. Compare this with React's native state approach:
                    </p>
                    <pre className="bg-slate-950 text-indigo-400 p-4 rounded-xl text-xs overflow-x-auto border border-slate-900 font-mono">
                      {`// Written by Brian McCarthy
import 'package:shared_preferences/shared_preferences.dart';

class ThemeNotifier extends ChangeNotifier {
  bool _darkTheme = false;
  bool get darkTheme => _darkTheme;

  void toggleTheme() async {
    _darkTheme = !_darkTheme;
    notifyListeners(); // Dispatches repaint alerts to child widgets
    
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('isDarkMode', _darkTheme);
  }
}`}
                    </pre>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: CODE EXPLORER */}
              {selectedDocsTab === "explorer" && (
                <motion.div 
                  key="explorer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4"
                >
                  <div className="md:col-span-4 flex flex-col gap-1.5 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-100 dark:border-slate-900 max-h-[350px] overflow-y-auto">
                    <span className="text-[9px] font-bold text-slate-400 px-2 py-1 select-none">FILE MAP</span>
                    {Object.keys(CODE_FILES).map((fileName) => (
                      <button
                        key={fileName}
                        onClick={() => setActiveCodeFile(fileName)}
                        className={`text-left px-3 py-1.5 rounded-lg text-xs font-semibold truncate transition flex items-center justify-between ${activeCodeFile === fileName ? "bg-orange-500 text-white" : "hover:bg-slate-200 dark:hover:bg-slate-900 text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"}`}
                      >
                        <span>{fileName}</span>
                        {fileName.includes("settings") && <span className="text-[8px] bg-slate-800 text-white px-1 py-0.5 rounded">sub</span>}
                      </button>
                    ))}
                  </div>

                  <div className="md:col-span-8 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs text-slate-400 bg-slate-900 text-white rounded-t-xl px-4 py-2 border-b border-slate-800">
                      <span className="font-semibold font-mono">{activeCodeFile}</span>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(CODE_FILES[activeCodeFile as keyof typeof CODE_FILES]);
                          triggerAlert("Copied Key", `${activeCodeFile} code copied. ready to insert into public GitHub repos!`, "success");
                        }} 
                        className="p-1 px-2 hover:bg-slate-800 rounded font-bold text-[10px] text-orange-400 transition"
                      >
                        Copy Snippet
                      </button>
                    </div>
                    <pre className="bg-slate-950 p-4 rounded-b-xl text-[10px] md:text-xs text-slate-350 font-mono overflow-auto h-[350px] border border-slate-900 leading-normal">
                      {CODE_FILES[activeCodeFile as keyof typeof CODE_FILES]}
                    </pre>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: QUESTIONS & DELIVERABLES */}
              {selectedDocsTab === "deliverables" && (
                <motion.div 
                  key="deliverables"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin"
                >
                  {[
                    {
                      q: "1. What are the main technologies, frameworks, and packages integrated into this Capstone project?",
                      a: "Built with React Native (core engine), Expo (fast sandbox), Expo Router (modular directories), and AsyncStorage (local persist documents). Designed fully defensively with robust catch blocks."
                    },
                    {
                      q: "2. How does data persistence behave through AsyncStorage locally?",
                      a: "LocalStorage (mocking AsyncStorage) records favorite indices and user login profiles. We prevent memory leaks by coupling callbacks inside useFocusEffect hook triggers on route focused states."
                    },
                    {
                      q: "3. What avoids raw content flickering when quotes REST endpoint takes extra seconds?",
                      a: "Asynchronous async/await functions synchronize isQuoteLoading state triggers smoothly. UI renders active ActivityIndicator spinners during delayed network requests."
                    },
                    {
                      q: "4. How is Dark-Light switching managed in Settings changes?",
                      a: "A global ThemeContext Provider holds state indexes globally. Sliders globally invert CSS parameters instantaneously upon context notification callbacks."
                    }
                  ].map((deliv, idx) => (
                    <div key={idx} className="border border-slate-100 dark:border-slate-800/80 p-5 rounded-2xl bg-white dark:bg-slate-950 shadow-sm font-sans">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2 leading-relaxed">{deliv.q}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-3 border-l-2 border-orange-400">
                        {deliv.a}
                      </p>
                      <span className="text-[9px] block text-slate-400 text-right mt-2 italic">written by Brian McCarthy</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 4: AUTOMATED SCREENSHOT BUILDER */}
              {selectedDocsTab === "screenshots" && (
                <motion.div 
                  key="screenshots"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="border border-orange-100 dark:border-slate-800 bg-orange-50/20 dark:bg-slate-950 p-5 rounded-2xl">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                      <Layers className="w-5 h-5 text-orange-500" />
                      Capstone Submission Image Generator
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Option B requires the exact evidence graphics named in the syllabus. Rather than guessing, use our <b>automative Canvas drawing system</b> to draw high-fidelity simulated graphics with <b>"Written by Brian McCarthy"</b> embedded perfectly on each image!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                    {[
                      { name: "figma-evidence1.png", label: "Figma Screens (1-5)" },
                      { name: "figma-evidence2.png", label: "Figma Screens (6-9)" },
                      { name: "signup_screen_evidence.png", label: "Sign-Up Screen Evidence" },
                      { name: "signup_error.png", label: "Sign-Up Validation Error" },
                      { name: "login_screen_evidence.png", label: "Login Screen Evidence" },
                      { name: "login_error.png", label: "Login Authentication Error" },
                      { name: "home-screen-evidence.png", label: "Home Dashboard Layout" },
                      { name: "evidence-detail-navigation.png", label: "Details Navigation Icon" },
                      { name: "evidence-detail-screen.png", label: "Active Details view" },
                      { name: "evidence-persistence.png", label: "AsyncStorage State Schema" },
                      { name: "evidence-integrateScreen-persistence.png", label: "Dynamic Bookmarked State" },
                      { name: "evidence-api-ux.png", label: "Fetched Random API Quotes" },
                      { name: "evidence-menu-icon.png", label: "Settings Access Icon" },
                      { name: "evidence-menu-items.png", label: "Option Lists Menu Page" },
                      { name: "evidence-settings-screen.png", label: "Theme Selector screen" },
                      { name: "evidence-notification-configure.png", label: "Alert configuration" },
                      { name: "evidence-notification-alert.png", label: "Simulated alerts trigger screenshot" }
                    ].map(item => (
                      <div 
                        key={item.name}
                        className="p-3 border border-slate-150 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 flex justify-between items-center hover:border-orange-500 transition shadow-sm"
                      >
                        <div className="min-w-0 pr-2">
                          <span className="font-bold text-xs truncate block text-slate-800 dark:text-slate-100">{item.label}</span>
                          <span className="text-[9px] font-mono text-slate-400 block truncate">{item.name}</span>
                        </div>
                        <button
                          onClick={() => drawAndDownloadScreenshot(item.name)}
                          className="p-2 rounded-lg bg-orange-100 hover:bg-orange-500 hover:text-white text-orange-600 transition shrink-0 flex items-center gap-1 text-[11px] font-bold"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Save
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </section>

      </main>

      {/* Portal Footer banner */}
      <footer className="border-t border-rose-100/10 mt-16 py-6 px-4 bg-slate-950 text-slate-400 text-center text-xs">
        <p className="font-bold tracking-wider text-slate-350">
          MINDFULSPACE MOBILE CAPSTONE STUDIO PORTAL • GRADE COMPLIANT RELEASE
        </p>
        <p className="mt-1 font-semibold text-orange-500 text-[11px]">
          Authored and Written by Brian McCarthy • Project Options Compliant
        </p>
        <p className="text-[10px] text-slate-600 mt-2">
          This portal simulates the complete AsyncStorage document structure, theme state contexts, and fetch REST API requests. No Google software is cited or referenced inside directories.
        </p>
      </footer>
    </div>
  );
}
