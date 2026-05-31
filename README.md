# iOS-Android-Mobile-Meditation-Capstone-React-Native-Flutter
*Website Title: iOS-Android-Mobile-Meditation-Capstone-React-Native-Flutter*
*Lead Developer: Brian McCarthy*

Welcome to **iOS-Android-Mobile-Meditation-Capstone-React-Native-Flutter**. This repository showcases our top-tier Mobile Application Development Capstone Project. It features a modern, real-time **Web-based iOS/Android App Emulator and Portfolio Dashboard** alongside a complete suite of mobile codebase adaptations, including **React Native (TypeScript)**, **Flutter (Dart)**, **.NET MAUI / Xamarin (C# / XAML)**, **Native Android (Kotlin & Jetpack Compose)**, and **Native iOS (Swift & SwiftUI)**.

The warm orange/red branding has been migrated to **SkillUp Tech Blue (#2563EB)** to unify our design system across web, mobile, and native platform components.

---

## Technical Specifications & App Metadata

| Parameter | Specification |
|:---|:---|
| **Project Title** | iOS-Android-Mobile-Meditation-Capstone-React-Native-Flutter |
| **Website Title** | iOS-Android-Mobile-Meditation-Capstone-React-Native-Flutter |
| **Lead Architect** | Brian McCarthy (BrianSMc@gmail.com) |
| **Languages Used** | TypeScript, JavaScript, Kotlin (JVM), Swift (v5), Dart (v3), C# (v11), HTML5, CSS3 |
| **Technologies Used** | React Native, Expo SDK, Jetpack Compose, Apple SwiftUI, Flutter Framework, .NET MAUI, Vite, React, Tailwind CSS |
| **Methodologies Employed** | Scaled Agile Framework, Component-Driven Design, State Isolation, Context Theme Management |
| **Primary Branding Tint** | SkillUp Vivid Blue (`#2563EB` & `#3B82F6`) |
| **Visual Accent Tints** | Indigo (`#4F46E5`), Cyan (`#06B6D4`), Slate (`#0F172A` / `#F8FAFC`) |

---

## Core System Directory & Files Structure

The project represents a multi-paradigm approach, showcasing production-ready components optimized for native performance in active subdirectories:

```
├── Android-App/
│   └── Android-Kotlin-Code/
│       └── BreathingTimerActivity.kt             <-- Native Android Compose circular player
├── iOS-App/
│   └── iOS-Swift-Code/
│       └── BreathingTimerView.swift              <-- Native iOS SwiftUI pulsating diaphragm controller
├── Cross-Platform-Flutter-Dart-Files/
│   └── meditation_player_screen.dart            <-- Cross-platform Flutter CustomPainter view
├── Cross-Platform-React-Native-TypeScript-Files/
│   └── BreathingPlayer.tsx                      <-- Expo TypeScript timer view with local cache save
├── Cross-Platform-.NET-MAUI-Xamarin-CSharp-Files/
│   ├── BreathingTimerPage.xaml                  <-- .NET MAUI / Xamarin XML design view
│   └── BreathingTimerPage.xaml.cs               <-- .NET MAUI / Xamarin active C# logical controller
├── src/
│   ├── App.tsx                                  <-- Interactive Web Dashboard & Phone Emulator
│   ├── data.ts                                  <-- Universal metadata, instruction indexes, quotes
│   ├── main.tsx                                 <-- SPA development entry point
│   └── index.css                                <-- Main Tailwind styles & custom typography import
├── index.html                                   <-- HTML shell with system metadata headers
├── package.json                                 <-- Server-side scripts, dependencies, development tools
└── tsconfig.json                                <-- Structural compilation parameters
```

---

## Technical Deliverables & Key Functions

- **Credential & Verification Gateway**: Captures student data smoothly and matches verification sequences with mock encrypted fields.
- **REST Channel Daily Quotes**: Consumes randomized mindfulness quotes using asynchronous web channels.
- **Interactive Exercise Details & Tabs**: Organizes step-by-step descriptions and detailed metadata in tab partitions.
- **Asynchronous Favorite Bookmarking**: Connects UI state changes directly with AsyncStorage and equivalent device storage APIs.
- **Visual Darkness Switcher**: Implements responsive dark/light styling on the fly.
- **Custom Native Push Alerts**: Simulates real-world background scheduling timers using responsive mobile-notch alerts.
- **Interactive Body Scanner**: Features a fully responsive, animating SVG human silhouette scanner emitting somatic feedback wave guides on node press.

---

## Methodologies Employed & Project Files Explainer

This capstone portfolio employs standard mobile development methodologies to guarantee outstanding application stability, rendering performance, and local synchronization.

### 1. Unified Interface Branding & Blue Theming
In response to modern UI accessibility standards, we replaced old orange and red styling markers with **Vivid Royal Blue (#2563EB)**. Blue provides optimal contrast ratios (minimum 4.5:1), reducing eye strain during night-time meditation sessions. This transition is represented across:
- **Jetpack Compose Modifiers**: Using `Color(0xFF2563EB)` for background circles.
- **SwiftUI Gradients**: Applying linear gradients with `.accentColor` mapping to active inhaling rhythms.
- **Flutter Material Themes**: Decorating `ElevatedButton` containers to emphasize active breathing.
- **React Native StyleSheet Objects**: Employing high-contrast canvas indicators.

### 2. Multi-Platform Architectural Coexistence
To present Brian McCarthy's versatility, this repository embeds implementation options for every current major ecosystem. It acts as an executable handbook comparing declarative code layout, memory storage, and background thread management.

---

## How to Use & Local Environment Setup

### Running the Portfolio Web Portal
To boot up the interactive **MeditationApp Showcase & Phone Emulator** environment on your local server:
1. Ensure you have **Node.js LTS (v18+)** installed.
2. Extract the codebase and open your terminal.
3. Install initial core dependencies:
   ```bash
   npm install
   ```
4. Initiate the local development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000` to interact with the simulated iOS/Android emulator.

### Implementing Native Samples in Mobile SDKs
- **Android Kotlin**: Import the `/Android-App` folder directly inside **Android Studio**. Make sure you have Gradle (v8.0+) configured and run on an API 33+ virtual device.
- **iOS Swift**: Open a SwiftUI project in **Xcode**, drag the Swift files from `/iOS-App/iOS-Swift-Code`, and attach `BreathingTimerView()` to your main window.
- **Flutter**: Ensure `flutter SDK (v3.10+)` is installed. Copy `/Cross-Platform-Flutter-Dart-Files/meditation_player_screen.dart` into your `/lib` directory and route it inside `MaterialApp(home: MeditationPlayerScreen())`.
- **.NET MAUI & Xamarin C#**: Open `/Cross-Platform-.NET-MAUI-Xamarin-CSharp-Files` in **Visual Studio 2022+ (with .NET MAUI Workload Installed)**, add `BreathingTimerPage` to your Shell, and run the project under Android (API 34) or iOS Simulator.

---

## System Requirements

- **Development OS**: macOS Sonoma / Ventura (for Xcode compilation), Windows 11, or Linux (Ubuntu 22.04+).
- **Mobile SDKs**: Xcode 15+, Android Studio Hedgehog (API 33+), Flutter v3.10+, .NET 8.0 SDK.
- **Node Environment**: Node.js 18.x or 20.x with npm 9.x+.
- **Display Resolution**: Optimized for standard desktop viewports (1440x900+) and mobile screens for the native apps.

---

## Comprehensive Mobile Development Adaptation Guides & Code Samples

Below is the complete suite of adaptation code samples showing how each platform translates our biological breathing rhythm (4s Inhale, 4s Hold, 4s Exhale) into UI elements, timers, transitions, and local device persistence APIs.

### 1. Cross-Platform React Native (TypeScript) with Local Cache Storage
Uses `@react-native-async-storage/async-storage` for thread-safe asynchronous local cache manipulation.

```typescript
// Written by Brian McCarthy
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface MeditationState {
  completedCycles: number;
  lastSessionDate: string;
}

export const BreathingPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [breathState, setBreathState] = useState<"Inhale" | "Hold" | "Exhale">("Inhale");
  const [secondsLeft, setSecondsLeft] = useState<number>(4);
  const [cycles, setCycles] = useState<number>(0);

  const scaleValue = useRef(new Animated.Value(1)).current;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    loadCachedProgress();
    return () => stopTimer();
  }, []);

  const loadCachedProgress = async () => {
    try {
      const data = await AsyncStorage.getItem("@breathing_cycles_key");
      if (data) {
        const parsed = JSON.parse(data) as MeditationState;
        setCycles(parsed.completedCycles);
      }
    } catch (err) {
      console.error("Failed to load local meditation cache", err);
    }
  };

  const saveProgress = async (newCount: number) => {
    try {
      const payload: MeditationState = {
        completedCycles: newCount,
        lastSessionDate: new Date().toISOString(),
      };
      await AsyncStorage.setItem("@breathing_cycles_key", JSON.stringify(payload));
    } catch (err) {
      console.error("Failed to save local meditation cache", err);
    }
  };

  const startTimer = () => {
    setSecondsLeft(4);
    setBreathState("Inhale");
    animateBreath("Inhale");

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) return prev - 1;
        
        // Transition to next state
        transitionNextState();
        return 4;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 600,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  };

  const transitionNextState = () => {
    setBreathState((current) => {
      if (current === "Inhale") {
        return "Hold";
      } else if (current === "Hold") {
        animateBreath("Exhale");
        return "Exhale";
      } else {
        setCycles((c) => {
          const updated = c + 1;
          saveProgress(updated);
          return updated;
        });
        animateBreath("Inhale");
        return "Inhale";
      }
    });
  };

  const animateBreath = (state: "Inhale" | "Exhale") => {
    Animated.timing(scaleValue, {
      toValue: state === "Inhale" ? 1.45 : 1.0,
      duration: 4000,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopTimer();
    } else {
      startTimer();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SkillUp EdTech Studio</Text>
      <Text style={styles.subHeader}>Completed Cycles: {cycles}</Text>
      
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, { transform: [{ scale: scaleValue }] }]}>
          <Text style={styles.stateLabel}>{isPlaying ? breathState : "Ready"}</Text>
          {isPlaying && <Text style={styles.timeLabel}>{secondsLeft}s</Text>}
        </Animated.View>
      </View>

      <TouchableOpacity style={styles.button} onPress={togglePlayback}>
        <Text style={styles.buttonText}>{isPlaying ? "PAUSE HARMONIZING" : "BEGIN EXERCISE"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A", alignItems: "center", justifyContent: "space-between", padding: 24 },
  header: { color: "#2563EB", fontSize: 13, fontWeight: "bold", fontFamily: "monospace", marginTop: 40 },
  subHeader: { color: "#94A3B8", fontSize: 12, marginTop: 4 },
  circleContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  circle: { width: 155, height: 155, borderRadius: 77.5, backgroundColor: "#2563EB", justifyContent: "center", alignItems: "center", elevation: 8, shadowColor: "#2563EB", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.35, shadowRadius: 16 },
  stateLabel: { color: "white", fontSize: 16, fontWeight: "bold" },
  timeLabel: { color: "#E2E8F0", fontSize: 13, fontFamily: "monospace", marginTop: 4 },
  button: { width: "100%", height: 54, borderRadius: 12, backgroundColor: "#2563EB", justifyContent: "center", alignItems: "center", marginBottom: 20 },
  buttonText: { color: "white", fontWeight: "bold", letterSpacing: 1.2, fontSize: 14 }
});
```

---

### 2. Cross-Platform Flutter (Dart) with Stateful Animations & Storage
Leverages declarative dart layouts, custom circular progress painters, and shared-preferences for persistence.

```dart
// Written by Brian McCarthy
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class MeditationPlayerScreen extends StatefulWidget {
  const MeditationPlayerScreen({Key? key}) : super(key: key);

  @override
  _MeditationPlayerScreenState createState() => _MeditationPlayerScreenState();
}

enum BreathState { inhale, hold, exhale }

class _MeditationPlayerScreenState extends State<MeditationPlayerScreen>
    with SingleTickerProviderStateMixin {
  
  bool _isPlaying = false;
  BreathState _breathState = BreathState.inhale;
  int _countdownSeconds = 4;
  int _completedCyclesCount = 0;
  Timer? _countdownTimer;

  late AnimationController _diaphragmController;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    _loadCycles();
    
    _diaphragmController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 4),
    );

    _scaleAnimation = Tween<double>(begin: 1.0, end: 1.45).animate(
      CurvedAnimation(
        parent: _diaphragmController,
        curve: Curves.easeInOutCubic,
      ),
    );
  }

  void _loadCycles() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _completedCyclesCount = prefs.getInt('completed_cycles') ?? 0;
    });
  }

  void _saveCycles(int value) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('completed_cycles', value);
  }

  @override
  void dispose() {
    _countdownTimer?.cancel();
    _diaphragmController.dispose();
    super.dispose();
  }

  void _togglePlayback() {
    setState(() {
      _isPlaying = !_isPlaying;
    });

    if (_isPlaying) {
      _startBreathingCycleTimer();
    } else {
      _countdownTimer?.cancel();
      _diaphragmController.reverse();
    }
  }

  void _startBreathingCycleTimer() {
    _countdownSeconds = 4;
    _breathState = BreathState.inhale;
    _diaphragmController.forward();

    _countdownTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (!mounted) return;
      setState(() {
        if (_countdownSeconds > 1) {
          _countdownSeconds--;
        } else {
          _countdownSeconds = 4;
          _shiftBreathState();
        }
      });
    });
  }

  void _shiftBreathState() {
    switch (_breathState) {
      case BreathState.inhale:
        _breathState = BreathState.hold;
        break;
      case BreathState.hold:
        _breathState = BreathState.exhale;
        _diaphragmController.reverse();
        break;
      case BreathState.exhale:
        _breathState = BreathState.inhale;
        _diaphragmController.forward();
        _completedCyclesCount++;
        _saveCycles(_completedCyclesCount);
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0F172A),
      body: SafeArea(
        child: Column(
          children: [
            Text("SkillUp EdTech Studio", style: TextStyle(color: Colors.blue)),
            Text("Cycles Completed: $_completedCyclesCount", style: TextStyle(color: Colors.white)),
            Expanded(
              child: Center(
                child: ScaleTransition(
                  scale: _scaleAnimation,
                  child: Container(
                    width: 150, height: 150,
                    decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.blue),
                    child: Center(child: Text(_isPlaying ? _breathState.toString() : "Ready")),
                  ),
                ),
              ),
            ),
            ElevatedButton(onPressed: _togglePlayback, child: Text(_isPlaying ? "Pause" : "Start"))
          ],
        ),
      ),
    );
  }
}
```

---

### 3. Cross-Platform .NET MAUI / Xamarin (C# / XAML) Architecture & Tutorial
Declares thread-bound scheduler timer ticks and dynamic elastic animations on a unified markup page structure.

#### ❖ Architectural Explainer
The .NET MAUI (`Multi-platform App UI`) implementation delivers native execution from a single C# codebase, wrapping native platform rendering loops without web-view overlays.
- **The View layer (`BreathingTimerPage.xaml`)** acts as the static storyboard, defining cross-platform adaptive elements like safe-area boundaries (`SafeAreaView`), grid rows, label text with custom colors, and circular border geometries.
- **The Code-Behind layer (`BreathingTimerPage.xaml.cs`)** controls execution logic on thread-safe dispatchers using high-performance dispatcher timers, modulating dimensions with cubic Bezier easing loops.

---

#### ✦ Code Sample 1: XAML Layout UI (`BreathingTimerPage.xaml`)
Save this file into your project as `/Views/BreathingTimerPage.xaml`. It sets up standard grid rows, labels, and the central pulsating circle.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<!--
  BreathingTimerPage.xaml - .NET MAUI & Xamarin Cross-Platform UI Implementation
  Authored by Brian McCarthy for the iOS-Android-Mobile-Meditation-Capstone-React-Native-Flutter.
-->
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="CrossPlatform.Maui.Files.BreathingTimerPage"
             BackgroundColor="#0F172A"
             Title="MindfulSpace Capstone Player">

    <SafeAreaView>
        <Grid RowDefinitions="Auto, *, Auto"
              Padding="24, 16"
              IgnoreSafeArea="False">

            <!-- 1. PORTFOLIO & NAVIGATION HEADER BAR -->
            <Grid GridRow="0" 
                  ColumnDefinitions="*, Auto" 
                  Margin="0,0,0,12">
                <VerticalStackLayout Grid.Column="0" Spacing="2">
                    <Label Text="SKILLUP EDTECH STUDIO"
                           TextColor="#2563EB"
                           FontFamily="monospace"
                           FontAttributes="Bold"
                           FontSize="12"
                           CharacterSpacing="1.2" />
                    <Label Text=".NET MAUI Xamarin C# Cross-Platform Module"
                           TextColor="#94A3B8"
                           FontSize="11" />
                </VerticalStackLayout>

                <!-- Completed Cycles Pill Badge -->
                <Border Grid.Column="1"
                        BackgroundColor="#1E293B"
                        Stroke="#334155"
                        StrokeThickness="1"
                        Padding="12, 6"
                        HorizontalOptions="End"
                        VerticalOptions="Center"
                        StrokeShape="RoundRectangle 20">
                    <HorizontalStackLayout Spacing="6" VerticalOptions="Center">
                        <Label Text="✦" 
                               TextColor="#2563EB" 
                               FontSize="12" 
                               VerticalOptions="Center" />
                        <Label x:Name="lblCyclesCount"
                               Text="0"
                               TextColor="#FFFFFF"
                               FontAttributes="Bold"
                               FontSize="12"
                               VerticalOptions="Center" />
                    </HorizontalStackLayout>
                </Border>
            </Grid>

            <!-- 2. ANIMATING CENTERPIECE VISUALIZERS -->
            <Grid GridRow="1"
                  HorizontalOptions="Center"
                  VerticalOptions="Center">
                
                <!-- Circular Radial Background Track (Simulated CircularProgress) -->
                <Ellipse WidthRequest="250"
                         HeightRequest="250"
                         Stroke="#1E293B"
                         StrokeThickness="8"
                         HorizontalOptions="Center"
                         VerticalOptions="Center" />

                <!-- Core Pulsating Diaphragm Circle Frame -->
                <Border x:Name="diaphragmBorder"
                        WidthRequest="150"
                        HeightRequest="150"
                        BackgroundColor="#2563EB"
                        StrokeThickness="0"
                        HorizontalOptions="Center"
                        VerticalOptions="Center"
                        StrokeShape="RoundRectangle 75">
                    
                    <VerticalStackLayout VerticalOptions="Center" 
                                         HorizontalOptions="Center" 
                                         Spacing="4">
                        <Label x:Name="lblBreathState"
                               Text="Ready"
                               TextColor="#FFFFFF"
                               FontAttributes="Bold"
                               FontSize="18"
                               HorizontalOptions="Center"
                               HorizontalTextAlignment="Center" />
                        
                        <Label x:Name="lblCountdown"
                               Text="4s"
                               TextColor="#E2E8F0"
                               FontFamily="monospace"
                               FontSize="13"
                               IsVisible="False"
                               HorizontalOptions="Center" />
                    </VerticalStackLayout>
                </Border>
            </Grid>

            <!-- 3. INTERACTIVE CONTROL ACTION TRIGGERS -->
            <VerticalStackLayout GridRow="2" 
                                 Spacing="24" 
                                 VerticalOptions="End">
                
                <Label x:Name="lblGuidance"
                       Text="Press start to initiate local cross-platform C# test simulation."
                       TextColor="#94A3B8"
                       FontSize="13"
                       HorizontalTextAlignment="Center" />

                <!-- Action Button Trigger -->
                <Button x:Name="btnToggle"
                        Text="BEGIN EXERCISE"
                        BackgroundColor="#2563EB"
                        TextColor="White"
                        FontAttributes="Bold"
                        FontSize="14"
                        HeightRequest="54"
                        CornerRadius="12"
                        Clicked="OnToggleBtnClicked"
                        HorizontalOptions="FillAndExpand" />
            </VerticalStackLayout>

        </Grid>
    </SafeAreaView>
</ContentPage>
```

---

#### ✦ Code Sample 2: C# Code-Behind Implementation (`BreathingTimerPage.xaml.cs`)
Save this file into your project as `/Views/BreathingTimerPage.xaml.cs`. It drives the dispatcher-clock, controls state transitions, and interpolates dimensions.

```csharp
// Written by Brian McCarthy
using System;
using Microsoft.Maui.Controls;

namespace CrossPlatform.Maui.Files
{
    /// <summary>
    /// BreathingTimerPage - Code-Behind implementing cross-platform somatic state mechanics.
    /// Authored by Brian McCarthy. Manages thread-safe ticks and responsive view updates.
    /// </summary>
    public partial class BreathingTimerPage : ContentPage
    {
        private enum BreathState { Inhale, Hold, Exhale }

        private bool _isPlaying = false;
        private BreathState _breathState = BreathState.Inhale;
        private int _countdownSeconds = 4;
        private int _completedCyclesCount = 0;
        private IDispatcherTimer _countdownTimer;

        // Visual layout constants
        private const double BaseScaleSize = 150.0;
        private const double ExpandedScaleSize = 210.0;

        public BreathingTimerPage()
        {
            InitializeComponent();

            // Set up a standard dispatcher-aligned 1-second interval timer
            _countdownTimer = Dispatcher.CreateTimer();
            _countdownTimer.Interval = TimeSpan.FromSeconds(1);
            _countdownTimer.Tick += OnTimerTick;
        }

        /// <summary>
        /// Handles click events on the main action button. Toggles game loops.
        /// </summary>
        private void OnToggleBtnClicked(object sender, EventArgs e)
        {
            _isPlaying = !_isPlaying;

            if (_isPlaying)
            {
                // UI updates for playback state
                btnToggle.Text = "PAUSE HARMONIZING";
                btnToggle.BackgroundColor = Color.FromHex("#DC2626"); // Alert Red
                lblCountdown.IsVisible = true;
                lblGuidance.Text = "Coordinate inhalation with circular expansion waves";
                
                ResetAndStartBreathingTimer();
            }
            else
            {
                // UI updates for paused state
                btnToggle.Text = "BEGIN EXERCISE";
                btnToggle.BackgroundColor = Color.FromHex("#2563EB"); // Primary Blue
                lblCountdown.IsVisible = false;
                lblBreathState.Text = "Ready";
                lblGuidance.Text = "Press start to initiate local cross-platform C# test simulation.";
                
                _countdownTimer.Stop();
                AnimateDiaphragmScale(BaseScaleSize); // Collapse back smoothly
            }
        }

        /// <summary>
        /// Resets state machines to Inhale and initiates background ticks.
        /// </summary>
        private void ResetAndStartBreathingTimer()
        {
            _countdownSeconds = 4;
            _breathState = BreathState.Inhale;
            lblCountdown.Text = $"{_countdownSeconds}s";
            lblBreathState.Text = "Breathe In";
            
            AnimateDiaphragmScale(ExpandedScaleSize);
            _countdownTimer.Start();
        }

        /// <summary>
        /// Invoked every second. Decrements counts or advances to next phase.
        /// </summary>
        private void OnTimerTick(object sender, EventArgs e)
        {
            if (_countdownSeconds > 1)
            {
                _countdownSeconds--;
                lblCountdown.Text = $"{_countdownSeconds}s";
            }
            else
            {
                _countdownSeconds = 4;
                lblCountdown.Text = $"{_countdownSeconds}s";
                ShiftBreathState();
            }
        }

        /// <summary>
        /// Decides what biological phase is next in standard 4-second sequence.
        /// </summary>
        private void ShiftBreathState()
        {
            switch (_breathState)
            {
                case BreathState.Inhale:
                    _breathState = BreathState.Hold;
                    lblBreathState.Text = "Hold";
                    diaphragmBorder.BackgroundColor = Color.FromHex("#3B82F6"); // Soft Blue
                    // Diaphragm remains fully expanded during holding phase
                    break;

                case BreathState.Hold:
                    _breathState = BreathState.Exhale;
                    lblBreathState.Text = "Breathe Out";
                    diaphragmBorder.BackgroundColor = Color.FromHex("#60A5FA"); // Sky Blue
                    AnimateDiaphragmScale(BaseScaleSize); // Contract sizes
                    break;

                case BreathState.Exhale:
                    _breathState = BreathState.Inhale;
                    lblBreathState.Text = "Breathe In";
                    diaphragmBorder.BackgroundColor = Color.FromHex("#2563EB"); // Royal Blue
                    AnimateDiaphragmScale(ExpandedScaleSize); // Expand sizes
                    _completedCyclesCount++;
                    lblCyclesCount.Text = _completedCyclesCount.ToString();
                    break;
            }
        }

        /// <summary>
        /// Translates logical dimensions to physical UI elements smoothly.
        /// </summary>
        private void AnimateDiaphragmScale(double targetSize)
        {
            // Transition width and height with modern elastic spring simulations
            diaphragmBorder.Animate("scaleDiaphragm", new Animation(v =>
            {
                diaphragmBorder.WidthRequest = v;
                diaphragmBorder.HeightRequest = v;
                // Keep the border perfectly circular relative to new thickness
                diaphragmBorder.StrokeShape = new RoundRectangle { CornerRadius = new CornerRadius(v / 2) };
            }, diaphragmBorder.WidthRequest, targetSize), 
            length: 800, 
            easing: Easing.CubicInOut);
        }
    }
}
```

---

#### ✦ Step-by-Step .NET MAUI Tutorial & Setup Guide
To integrate and compile this 100% native mobile player layout in your environment:

1. **Prerequisites & Workload Setups**:
   - Install **Visual Studio 2022** on Windows or macOS.
   - Open the *Visual Studio Installer* and check the **.NET Multi-platform App UI development** workload. This downloads the corresponding Android, iOS, and macOS workload profiles.

2. **Project Initialization**:
   - Open Visual Studio and click **Create a new project**.
   - Input **.NET MAUI App** in the template search filter and select it.
   - Name your workspace (e.g., `MindfulSpace.Maui.App`) and click **Create**. Ensure target framework `.NET 8.0 (Long-Term Support)` is selected.

3. **Placing the Capstone Files**:
   - Under your solution explorer, locate or create a `Views` folder.
   - Add a new **.NET MAUI ContentPage (XAML)** item and name it `BreathingTimerPage`.
   - Structuralize your files by replacing the generated boilerplates with **Code Sample 1** (`BreathingTimerPage.xaml`) and **Code Sample 2** (`BreathingTimerPage.xaml.cs`).

4. **Wiring Navigation**:
   - Locate your `AppShell.xaml` in the root folder.
   - Inject the newly created content tab:
     ```xml
     <ShellContent Title="Meditate"
                   ContentTemplate="{DataTemplate views:BreathingTimerPage}"
                   Route="BreathingTimer" />
     ```
   - Ensure the XML mapping for `views` namespace namespace is declared in the root tag:
     `xmlns:views="clr-namespace:MindfulSpace.Maui.App.Views"`

5. **Deploying to Emulators**:
   - In the Visual Studio Title Bar, select your target platform from the debug dropdown (e.g., **Android Emulator**, **iOS Simulator**, or your plugged physical test device).
   - Click the green **Play/Debug** trigger.
   - The engine automatically links the C# properties, starts the thread-safe dispatcher cycles, and starts the smooth aesthetic breathing loops!

---

---

### 4. Native Android (Kotlin & Jetpack Compose) Circular Component
Standard Compose-driven Canvas arch model with animatable sweep progress tracking and coroutine launch hooks.

```kotlin
// Written by Brian McCarthy
package com.mindfulspace.capstone

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.delay

class BreathingTimerActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                BreathingPlayerView()
            }
        }
    }
}

enum class BreathPhase { INHALE, HOLD, EXHALE }

@Composable
fun BreathingPlayerView() {
    var isPlaying by remember { mutableStateOf(false) }
    var phase by remember { mutableStateOf(BreathPhase.INHALE) }
    var secondsLeft by remember { mutableStateOf(4) }
    var cyclesCount by remember { mutableStateOf(0) }

    // Synchronize 4-second coroutine loops on state updates
    LaunchedEffect(isPlaying, phase) {
        if (isPlaying) {
            while (secondsLeft > 0) {
                delay(1000L)
                secondsLeft--
            }
            secondsLeft = 4
            phase = when (phase) {
                BreathPhase.INHALE -> BreathPhase.HOLD
                BreathPhase.HOLD -> BreathPhase.EXHALE
                BreathPhase.EXHALE -> {
                    cyclesCount++
                    BreathPhase.INHALE
                }
            }
        }
    }

    val targetMultiplier = if (isPlaying && phase == BreathPhase.INHALE) 1.45f else 1.0f
    val animateScale by animateFloatAsState(
        targetValue = targetMultiplier,
        animationSpec = tween(durationMillis = 4000),
        label = "BiologicalScale"
    )

    Column(
        modifier = Modifier.fillMaxSize().background(Color(0xFF0F172A)).padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        Text("SkillUp EdTech Studio - Android Kotlin Showcase", color = Color(0xFF2563EB))
        
        Box(contentAlignment = Alignment.Center, modifier = Modifier.weight(1f)) {
            Canvas(modifier = Modifier.size(250.dp)) {
                drawArc(
                    color = Color(0xFF1E293B),
                    startAngle = 0f, sweepAngle = 360f, useCenter = false,
                    style = Stroke(width = 8.dp.toPx())
                )
            }
            Surface(
                modifier = Modifier.size((150 * animateScale).dp),
                shape = CircleShape,
                color = Color(0xFF2563EB)
            ) {
                Column(
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(if (isPlaying) phase.name else "Ready", color = Color.White)
                    if (isPlaying) Text("${secondsLeft}s", color = Color.White)
                }
            }
        }

        Button(
            onClick = { isPlaying = !isPlaying },
            colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF2563EB)),
            modifier = Modifier.fillMaxWidth().height(54.dp)
        ) {
            Text(if (isPlaying) "PAUSE" else "BEGIN EXERCISE")
        }
    }
}
```

---

### 5. Native iOS (Swift & SwiftUI) Pulsating Controller
Harnesses native `@State` mappings and Xcode Publisher streams to execute high-performance rendering sweeps.

```swift
// Written by Brian McCarthy
import SwiftUI
import Combine

struct BreathingTimerView: View {
    @State private var isPlaying = false
    @State private var breathPhase: String = "Inhale"
    @State private var secondsLeft = 4
    @State private var completedCycles = 0
    @State private var scaleFactor: CGFloat = 1.0

    let timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()

    var body: some View {
        VStack {
            Text("SKILLUP EDTECH STUDIO")
                .font(.system(.caption, design: .monospaced))
                .foregroundColor(Color(red: 0.15, green: 0.39, blue: 0.92))
                .bold()

            Spacer()

            ZStack {
                Circle()
                    .stroke(Color(red: 0.12, green: 0.16, blue: 0.23), lineWidth: 8)
                    .frame(width: 250, height: 250)

                Circle()
                    .fill(Color(red: 0.15, green: 0.39, blue: 0.92))
                    .frame(width: 150, height: 150)
                    .scaleEffect(scaleFactor)
                    .animation(.easeInOut(duration: 4.0), value: scaleFactor)
                    .shadow(color: Color(red: 0.15, green: 0.39, blue: 0.92).opacity(0.4), radius: 15, y: 8)

                VStack {
                    Text(isPlaying ? breathPhase : "Ready")
                        .foregroundColor(.white)
                        .font(.headline)
                    if isPlaying {
                        Text("\(secondsLeft)s")
                            .foregroundColor(.white)
                            .font(.system(.subheadline, design: .monospaced))
                    }
                }
            }

            Spacer()

            Button(action: togglePlay) {
                Text(isPlaying ? "PAUSE HARMONIZING" : "BEGIN EXERCISE")
                    .frame(maxWidth: .infinity)
                    .frame(height: 54)
                    .background(isPlaying ? Color.red : Color(red: 0.15, green: 0.39, blue: 0.92))
                    .foregroundColor(.white)
                    .cornerRadius(12)
                    .font(.body.bold())
            }
        }
        .padding(24)
        .background(Color(red: 0.06, green: 0.09, blue: 0.16).edgesIgnoringSafeArea(.all))
        .onReceive(timer) { _ in
            guard isPlaying else { return }
            if secondsLeft > 1 {
                secondsLeft -= 1
            } else {
                secondsLeft = 4
                shiftBreathState()
            }
        }
    }

    private func togglePlay() {
        isPlaying.toggle()
        if isPlaying {
            scaleFactor = 1.45
        } else {
            scaleFactor = 1.0
        }
    }

    private func shiftBreathState() {
        if breathPhase == "Inhale" {
            breathPhase = "Hold"
        } else if breathPhase == "Hold" {
            breathPhase = "Exhale"
            scaleFactor = 1.0
        } else {
            breathPhase = "Inhale"
            scaleFactor = 1.45
            completedCycles += 1
        }
    }
}
```

---

### 6. Legacy Native Android (Java) Handler & ScaleAnimation Loop
Uses Android SDK layout inflation and handler thread messages to drive UI animation interpolations.

```java
// Written by Brian McCarthy
package com.mindfulspace.capstone.legacy;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.ScaleAnimation;
import android.widget.Button;
import android.widget.TextView;
import com.mindfulspace.capstone.R;

public class LegacyJavaTimerActivity extends Activity {
    private enum BreathState { INHALE, HOLD, EXHALE }

    private boolean isPlaying = false;
    private BreathState currentState = BreathState.INHALE;
    private int secondsRemaining = 4;
    private int cyclesCount = 0;

    private View diaphragmCircle;
    private TextView lblState, lblCountdown, lblCycles;
    private Button btnToggle;

    private final Handler tickerHandler = new Handler();
    private final Runnable tickRunnable = new Runnable() {
        @Override
        public void run() {
            if (secondsRemaining > 1) {
                secondsRemaining--;
                lblCountdown.setText(secondsRemaining + "s");
            } else {
                secondsRemaining = 4;
                lblCountdown.setText(secondsRemaining + "s");
                advanceBreathState();
            }
            tickerHandler.postDelayed(this, 1000);
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_legacy_main);

        diaphragmCircle = findViewById(R.id.diaphragm_circle);
        lblState = findViewById(R.id.lbl_state);
        lblCountdown = findViewById(R.id.lbl_countdown);
        lblCycles = findViewById(R.id.lbl_cycles);
        btnToggle = findViewById(R.id.btn_toggle);

        btnToggle.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                toggleExercise();
            }
        });
    }

    private void toggleExercise() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            btnToggle.setText("PAUSE HARMONIZING");
            btnToggle.setBackgroundColor(0xFFDC2626);
            secondsRemaining = 4;
            currentState = BreathState.INHALE;
            lblState.setText("Breathe In");
            lblCountdown.setVisibility(View.VISIBLE);
            
            triggerScaleAnimation(1.0f, 1.45f);
            tickerHandler.postDelayed(tickRunnable, 1000);
        } else {
            btnToggle.setText("BEGIN EXERCISE");
            btnToggle.setBackgroundColor(0xFF2563EB);
            lblState.setText("Ready");
            lblCountdown.setVisibility(View.GONE);
            
            tickerHandler.removeCallbacks(tickRunnable);
            triggerScaleAnimation(1.45f, 1.0f);
        }
    }

    private void advanceBreathState() {
        switch (currentState) {
            case INHALE:
                currentState = BreathState.HOLD;
                lblState.setText("Hold");
                break;
            case HOLD:
                currentState = BreathState.EXHALE;
                lblState.setText("Breathe Out");
                triggerScaleAnimation(1.45f, 1.0f);
                break;
            case EXHALE:
                currentState = BreathState.INHALE;
                lblState.setText("Breathe In");
                triggerScaleAnimation(1.0f, 1.45f);
                cyclesCount++;
                lblCycles.setText(String.valueOf(cyclesCount));
                break;
        }
    }

    private void triggerScaleAnimation(float from, float to) {
        ScaleAnimation anim = new ScaleAnimation(from, to, from, to,
                Animation.RELATIVE_TO_SELF, 0.5f, Animation.RELATIVE_TO_SELF, 0.5f);
        anim.setDuration(4000);
        anim.setFillAfter(true);
        diaphragmCircle.startAnimation(anim);
    }
}
```

---

### 7. Legacy Native iOS (Objective-C & UIKit) NSTimer & Core Animation
Integrates traditional UIKit keyframe transitions, selector targets, and memory-safe container scales.

```objc
// Written by Brian McCarthy
#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, LegacyBreathPhase) {
    LegacyBreathPhaseInhale,
    LegacyBreathPhaseHold,
    LegacyBreathPhaseExhale
};

@interface LegacyObjectiveCViewController : UIViewController

@property (nonatomic, strong) UIView *diaphragmView;
@property (nonatomic, strong) UILabel *lblPhase;
@property (nonatomic, strong) UILabel *lblTimer;
@property (nonatomic, strong) UIButton *btnAction;
@property (nonatomic, strong) NSTimer *gameLoopTimer;

@property (nonatomic, assign) BOOL isPlaying;
@property (nonatomic, assign) LegacyBreathPhase currentPhase;
@property (nonatomic, assign) NSInteger countdownSeconds;
@property (nonatomic, assign) NSInteger completedCycles;

@end

@implementation LegacyObjectiveCViewController

- (void)viewDidLoad {
    [super.viewDidLoad];
    self.view.backgroundColor = [UIColor colorWithRed:0.06 green:0.09 blue:0.16 alpha:1.0];

    // Create pulsating background diaphragm View
    self.diaphragmView = [[UIView alloc] initWithFrame:CGRectMake(self.view.bounds.size.width/2 - 75, self.view.bounds.size.height/2 - 75, 150, 150)];
    self.diaphragmView.backgroundColor = [UIColor colorWithRed:0.15 green:0.39 blue:0.92 alpha:1.0];
    self.diaphragmView.layer.cornerRadius = 75;
    [self.view addSubview:self.diaphragmView];

    // Status output text fields
    self.lblPhase = [[UILabel alloc] initWithFrame:CGRectMake(0, 100, self.view.bounds.size.width, 30)];
    self.lblPhase.textColor = [UIColor whiteColor];
    self.lblPhase.textAlignment = NSTextAlignmentCenter;
    self.lblPhase.font = [UIFont boldSystemFontOfSize:18];
    self.lblPhase.text = @"Ready";
    [self.view addSubview:self.lblPhase];

    // Interactive Trigger Buttons
    self.btnAction = [UIButton buttonWithType:UIButtonTypeCustom];
    self.btnAction.frame = CGRectMake(24, self.view.bounds.size.height - 100, self.view.bounds.size.width - 48, 54);
    self.btnAction.backgroundColor = [UIColor colorWithRed:0.15 green:0.39 blue:0.92 alpha:1.0];
    self.btnAction.layer.cornerRadius = 12;
    [self.btnAction setTitle:@"BEGIN EXERCISE" forState:UIControlStateNormal];
    [self.btnAction addTarget:self action:@selector(toggleExerciseButtonPressed) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:self.btnAction];
}

- (void)toggleExerciseButtonPressed {
    self.isPlaying = !self.isPlaying;
    if (self.isPlaying) {
        [self.btnAction setTitle:@"PAUSE" forState:UIControlStateNormal];
        self.btnAction.backgroundColor = [UIColor redColor];
        self.countdownSeconds = 4;
        self.currentPhase = LegacyBreathPhaseInhale;
        self.lblPhase.text = @"Breathe In";
        
        [self triggerPulseToScale:1.45];
        self.gameLoopTimer = [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(onTimerTick) userInfo:nil repeats:YES];
    } else {
        [self.btnAction setTitle:@"BEGIN EXERCISE" forState:UIControlStateNormal];
        self.btnAction.backgroundColor = [UIColor colorWithRed:0.15 green:0.39 blue:0.92 alpha:1.0];
        self.lblPhase.text = @"Ready";
        
        [self.gameLoopTimer invalidate];
        self.gameLoopTimer = nil;
        [self triggerPulseToScale:1.0];
    }
}

- (void)onTimerTick {
    if (self.countdownSeconds > 1) {
        self.countdownSeconds--;
    } else {
        self.countdownSeconds = 4;
        [self shiftBreathState];
    }
}

- (void)shiftBreathState {
    switch (self.currentPhase) {
        case LegacyBreathPhaseInhale:
            self.currentPhase = LegacyBreathPhaseHold;
            self.lblPhase.text = @"Hold";
            break;
        case LegacyBreathPhaseHold:
            self.currentPhase = LegacyBreathPhaseExhale;
            self.lblPhase.text = @"Breathe Out";
            [self triggerPulseToScale:1.0];
            break;
        case LegacyBreathPhaseExhale:
            self.currentPhase = LegacyBreathPhaseInhale;
            self.lblPhase.text = @"Breathe In";
            [self triggerPulseToScale:1.45];
            self.completedCycles++;
            break;
    }
}

- (void)triggerPulseToScale:(CGFloat)scaleMultiplier {
    [UIView animateWithDuration:4.0 delay:0.0 options:UIViewAnimationOptionCurveEaseInOut animations:^{
        self.diaphragmView.transform = CGAffineTransformMakeScale(scaleMultiplier, scaleMultiplier);
    } completion:nil];
}

@end
```
