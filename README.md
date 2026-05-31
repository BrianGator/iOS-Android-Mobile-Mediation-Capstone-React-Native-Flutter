# iOS-Android-Mobile-Mediation-Capstone-React-Native-Flutter
*Website Title: Meditation App: Mobile iOS Android Capstone Project Showcase*
*Lead Developer: Brian McCarthy*

Welcome to **iOS-Android-Mobile-Mediation-Capstone-React-Native-Flutter**. This repository showcases our top-tier Mobile Application Development Capstone Project under Option B. It features a complete **React Native Cross-Platform Mobile codebase**, **Native iOS (Swift/SwiftUI)** components, **Native Android (Kotlin/Jetpack Compose)** components, and an interactive, real-time **Web-based iOS/Android App Emulator and Portfolio Dashboard** for simulated cross-project evaluations.

The original warm orange/red branding has been migrated to **SkillUp Tech Blue (#2563EB)** to unify our design system across web, mobile, and native platform components.

---

## Technical Specifications & App Metadata

| Parameter | Specification |
|:---|:---|
| **Project Title** | iOS-Android-Mobile-Mediation-Capstone-React-Native-Flutter |
| **Website Title** | Meditation App: Mobile iOS Android Capstone Project Showcase |
| **Languages Used** | TypeScript, JavaScript (ES6+), Kotlin (JVM), Swift (v5), Dart (v3) |
| **Technologies Used** | React Native, Expo SDK, Jetpack Compose, Apple SwiftUI, Flutter Framework, Vite, React, Tailwind CSS |
| **Methodologies Employed** | Scaled Agile Framework, Component-Driven Design, State Isolation, Context Theme Management |
| **Branding Hue** | SkillUp Vivid Blue (#2563EB & #3B82F6) |

---

## Core System Directory & Files Structure

The project represents a multi-paradigm approach, showcasing production-ready components optimized for native performance in active subdirectories:

```
├── Android-App/
│   └── Android-Kotlin-Code/
│       └── BreathingTimerActivity.kt      <-- Premium Jetpack Compose circular breathing player
├── iOS-App/
│   └── iOS-Swift-Code/
│       └── BreathingTimerView.swift       <-- Advanced SwiftUI pulsating diaphragm controller
├── Flutter-Dart-Cross-Platform-files/
│   └── meditation_player_screen.dart     <-- Cross-platform Flutter CustomPainter view
├── React-Native-TypeScript-files/
│   └── BreathingPlayer.tsx               <-- Typings, AsyncStorage-backed Expo timer view
├── src/
│   ├── App.tsx                           <-- Mobile emulator workspace panel
│   ├── data.ts                           <-- Metadata, instruction indexes, and quotes database
│   └── index.css                         <-- Global Tailwind styling and typography layers
├── index.html                            <-- HTML shell containing custom author tags
└── package.json                          <-- Node server dependencies and scripts
```

---

## Methodologies Employed & Project Samples Explainer

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

## Mobile Coding Guides & Engineering Tutorials

A central objective of this portfolio is detailing systematic practices for mobile application developers. Below are detailed guides for the two primary cross-platform architectures:

### 1. React Native Tutorial: Type-safe Local Storage Persistence
When building offline-first systems (user configurations, streak stats, favorites) in React Native, the community leverages `@react-native-async-storage/async-storage`.

#### Best-Practice TypeScript Snippet with Async/Await:
```typescript
// Written by Brian McCarthy
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UserModel {
  userName: string;
  email: string;
  isPremium: boolean;
}

/**
 * Sets values securely while ensuring types are strictly serialized.
 */
export const saveUserSession = async (key: string, value: UserModel): Promise<void> => {
  try {
    const serialized = JSON.stringify(value);
    await AsyncStorage.setItem(key, serialized);
  } catch (err) {
    console.error("Storage error for key: " + key, err);
  }
};

/**
 * Reads user configurations with integrated type-safety defaults.
 */
export const getUserSession = async (key: string): Promise<UserModel | null> => {
  try {
    const rawData = await AsyncStorage.getItem(key);
    return rawData ? (JSON.parse(rawData) as UserModel) : null;
  } catch (err) {
    console.error("Load error for key: " + key, err);
    return null;
  }
};
```
*Key Takeaway*: In React Native, always place persistent storage writes on **asynchronous execution context threads**. This ensures that the primary UI engine remains completely unblocked, retaining smooth 60 FPS animations on older iOS and Android devices.

---

### 2. Flutter Tutorial: Stateful Animations & ChangeNotifier Persistence
In Flutter, lightweight local device persistence uses the `shared_preferences` package, and state changes propagate dynamically using Dart `ChangeNotifier`.

#### Interactive Flutter Controller and State Mapping Component:
```dart
// Written by Brian McCarthy
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

// Controller broadcasting state change signals across the widget tree
class FavouritesController extends ChangeNotifier {
  List<String> _favouriteIds = [];
  List<String> get favouriteIds => _favouriteIds;

  FavouritesController() {
    _loadFromLocalStorage();
  }

  void toggleFavourite(String meditationId) async {
    if (_favouriteIds.contains(meditationId)) {
      _favouriteIds.remove(meditationId);
    } else {
      _favouriteIds.add(meditationId);
    }
    notifyListeners(); // Force listening state nodes to re-paint
    
    final prefs = await SharedPreferences.getInstance();
    await prefs.setStringList('favourited_items', _favouriteIds);
  }

  void _loadFromLocalStorage() async {
    final prefs = await SharedPreferences.getInstance();
    _favouriteIds = prefs.getStringList('favourited_items') ?? [];
    notifyListeners();
  }
}
```
*Key Takeaway*: React Native relies on hooks and external context providers, whereas Flutter relies on Dart widgets listening directly to a standard `ChangeNotifier` state dispatcher. Both architectures require local preference serialization to survive app lifecycle terminations.

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
4. Initiate the local Express development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000` to interact with the simulated iOS/Android emulator.

### Implementing Native Samples in Mobile SDKs
- **Android Kotlin**: Import the `/Android-App` folder directly inside **Android Studio**. Make sure you have Gradle (v8.0+) configured and run on an API 33+ virtual device.
- **iOS Swift**: Open a SwiftUI project in **Xcode**, drag the Swift files from `/iOS-App/iOS-Swift-Code`, and attach `BreathingTimerView()` to your main window.
- **Flutter**: Ensure `flutter SDK (v3.10+)` is installed. Copy `/Flutter-Dart-Cross-Platform-files/meditation_player_screen.dart` into your `/lib` directory and route it inside `MaterialApp(home: MeditationPlayerScreen())`.

---

## Key Functions & Technical Deliverables

- **Credential & Verification Gateway**: Captures student data smoothly and matches verification sequences with mock encrypted fields.
- **REST Channel Daily Quotes**: Consumes randomized mindfulness quotes using asynchronous web channels.
- **Interactive Exercise Details & Tabs**: Organizes step-by-step descriptions and detailed metadata in tab partitions.
- **Asynchronous Favorite Bookmarking**: Connects UI state changes directly with AsyncStorage routines.
- **Visual Darkness Switcher**: Implements responsive dark/light styling on the fly.
- **Custom Native Push Alerts**: Simulates real-world background scheduling timers using responsive mobile-notch alerts.

---

## System Requirements

- **Development OS**: macOS Ventura (for Xcode compilation), Windows 11, or Linux (Ubuntu 22.04+).
- **Mobile SDKs**: Xcode 15+, Android Studio Hedgehog (API 33+), Flutter v3.10+.
- **Node Environment**: Node.js 18.x or 20.x with npm 9.x+.
- **Display Resolution**: Optimized for standard desktop viewports (1440x900+) and mobile screens for the native apps.
