import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  SafeAreaView,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * BreathingPlayer - React Native TypeScript Component
 * Developed by Brian McCarthy for the MindfulSpace Capstone Portfolio.
 * Implements high-performance native-driven animations and local AsyncStorage persistence.
 */

// Types & Interfaces
export type BreathPhase = "Inhale" | "Hold" | "Exhale";

export interface SessionData {
  id: string;
  timestamp: string;
  completedCycles: number;
}

export const BreathingPlayer: React.FC = () => {
  // Application State
  const [isActive, setIsActive] = useState<boolean>(false);
  const [phase, setPhase] = useState<BreathPhase>("Inhale");
  const [secondsLeft, setSecondsLeft] = useState<number>(4);
  const [completedCycles, setCompletedCycles] = useState<number>(0);

  // Animation values using Refs
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  // Track state dependencies in timers
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Populate session counts from local AsyncStorage on boot
    loadStoredSessions();
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Trigger appropriate animations when the breath phase modifies
  useEffect(() => {
    if (isActive) {
      triggerPhaseAnimation();
    } else {
      resetAnimations();
    }
  }, [phase, isActive]);

  const loadStoredSessions = async (): Promise<void> => {
    try {
      const savedCount = await AsyncStorage.getItem("total_meditation_cycles");
      if (savedCount) {
        setCompletedCycles(parseInt(savedCount, 10));
      }
    } catch (e) {
      console.warn("Storage warning: Could not read total cycles", e);
    }
  };

  const persistCompletedCycle = async (newTotal: number): Promise<void> => {
    try {
      await AsyncStorage.setItem("total_meditation_cycles", newTotal.toString());
      
      // Post full session summary object for analytics larping
      const sessionObject: SessionData = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        completedCycles: newTotal,
      };
      await AsyncStorage.setItem("last_session_record", JSON.stringify(sessionObject));
    } catch (e) {
      console.error("Storage error: Failed to persist cycle state", e);
    }
  };

  const toggleSession = (): void => {
    const nextActive = !isActive;
    setIsActive(nextActive);

    if (nextActive) {
      setSecondsLeft(4);
      setPhase("Inhale");
      startIntervalLoop();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setSecondsLeft(4);
    }
  };

  const startIntervalLoop = (): void => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          // Change phase state
          setPhase((currentPhase) => {
            if (currentPhase === "Inhale") {
              return "Hold";
            } else if (currentPhase === "Hold") {
              return "Exhale";
            } else {
              setCompletedCycles((cycles) => {
                const updated = cycles + 1;
                persistCompletedCycle(updated);
                return updated;
              });
              return "Inhale";
            }
          });
          return 4;
        }
      });
    }, 1000);
  };

  const triggerPhaseAnimation = (): void => {
    let targetScale = 1.0;
    
    if (phase === "Inhale" || phase === "Hold") {
      targetScale = 1.45;
    }

    // Parallel Animation Sequence using the High-Performance Native Driver
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: targetScale,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.sequence([
        Animated.timing(progressAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: false, // Layout interpolation needs to be JS-driven
          easing: Easing.linear,
        }),
        Animated.timing(progressAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  const resetAnimations = (): void => {
    scaleAnim.setValue(1);
    progressAnim.setValue(0);
  };

  const getPhaseColor = (): string => {
    switch (phase) {
      case "Inhale":
        return "#2563EB"; // Accent Blue 600
      case "Hold":
        return "#1D4ED8"; // Deep Blue 700
      case "Exhale":
        return "#60A5FA"; // Light Blue 400
    }
  };

  // Outer Border Progress Ring width scaling calculation
  const ringWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Tech-inspired portfolio header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerBrand}>SKILLUP EDTECH STUDIO</Text>
          <Text style={styles.headerTitle}>React Native TypeScript Client</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🔥 {completedCycles} Cycles</Text>
        </View>
      </View>

      {/* Pulsing visualizer circle canvas */}
      <View style={styles.visualizerContainer}>
        {/* Animated Sweep Track Line */}
        <View style={styles.trackRing}>
          <Animated.View style={[styles.progressArc, { width: ringWidth }]} />
        </View>

        {/* Core animated breathing globe */}
        <Animated.View
          style={[
            styles.diaphragmGlobe,
            {
              transform: [{ scale: scaleAnim }],
              backgroundColor: isActive ? getPhaseColor() : "#1E293B",
              shadowColor: isActive ? getPhaseColor() : "#000",
            },
          ]}
        >
          <Text style={styles.phaseLabel}>
            {isActive ? phase : "Ready"}
          </Text>
          {isActive && (
            <Text style={styles.timerCount}>{secondsLeft}s</Text>
          )}
        </Animated.View>
      </View>

      {/* Description and active action buttons */}
      <View style={styles.footerContainer}>
        <Text style={styles.instructions}>
          {isActive
            ? "Expand your lungs in response to the growing blue core."
            : "Initiate mobile environment emulator and store cycle records."}
        </Text>

        <TouchableOpacity
          style={[
            styles.mainButton,
            { backgroundColor: isActive ? "#EF4444" : "#2563EB" },
          ]}
          onPress={toggleSession}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>
            {isActive ? "PAUSE HARMONY LOOP" : "ACTIVATE EXERCISE"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A", // Slate dark matching color palette
    justifyContent: "space-between",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerBrand: {
    color: "#2563EB",
    fontFamily: "System",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.8,
  },
  headerTitle: {
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 2,
  },
  badge: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },
  visualizerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  trackRing: {
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.06)",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  progressArc: {
    height: 4,
    backgroundColor: "#3B82F6",
    borderRadius: 2,
  },
  diaphragmGlobe: {
    width: 154,
    height: 154,
    borderRadius: 77,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowOffset: { width: 0, y: 10 },
    shadowOpacity: 0.45,
    shadowRadius: 15,
  },
  phaseLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  timerCount: {
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: 13,
    fontFamily: "System",
    fontWeight: "600",
    marginTop: 4,
  },
  footerContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: "center",
  },
  instructions: {
    color: "#94A3B8",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 18,
    paddingHorizontal: 8,
  },
  mainButton: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, y: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
});
