import 'dart:async';
import 'package:flutter/material.dart';

/// MeditationPlayerScreen - Flutter & Dart Cross-Platform Implementation
/// Authored by Brian McCarthy for the MindfulSpace Capstone Portfolio.
/// Displays complex CustomPainter gauges and custom scale physics curves.
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

  // Animation controller for smooth biological diaphragm expansion
  late AnimationController _diaphragmController;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    
    // Set up standard 4-second biological relaxation transition timeline
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

  @override
  void dispose() {
    _countdownTimer?.cancel();
    _diaphragmController.dispose();
    super.dispose();
  }

  /// Toggles persistent loop mechanics and sets initial state parameters
  void _togglePlayback() {
    setState(() {
      _isPlaying = !_isPlaying;
    });

    if (_isPlaying) {
      _startBreathingCycleTimer();
    } else {
      _countdownTimer?.cancel();
      _diaphragmController.reverse(); // Bring scale back down beautifully
    }
  }

  /// Instantiates standard repeating timers to scale screens
  void _startBreathingCycleTimer() {
    _countdownSeconds = 4;
    _breathState = BreathState.inhale;
    _diaphragmController.forward(); // Scale circle outwards

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

  /// Shifts the current breath stage in standard sequence loops
  void _shiftBreathState() {
    switch (_breathState) {
      case BreathState.inhale:
        _breathState = BreathState.hold;
        // Keep diaphragm expanded fully
        break;
      case BreathState.hold:
        _breathState = BreathState.exhale;
        _diaphragmController.reverse(); // Contract diaphragm scale
        break;
      case BreathState.exhale:
        _breathState = BreathState.inhale;
        _diaphragmController.forward(); // Expand diaphragm scale
        _completedCyclesCount++;
        break;
    }
  }

  /// Gets descriptive titles based on modern state tracking
  String _getBreathStateLabel() {
    if (!_isPlaying) return "Ready";
    switch (_breathState) {
      case BreathState.inhale:
        return "Breathe In";
      case BreathState.hold:
        return "Hold";
      case BreathState.exhale:
        return "Breathe Out";
    }
  }

  Color _getBreathStateColor() {
    if (!_isPlaying) return Colors.blue;
    switch (_breathState) {
      case BreathState.inhale:
        return const Color(0xFF2563EB); // Royal Blue
      case BreathState.hold:
        return const Color(0xFF3B82F6); // Soft Blue
      case BreathState.exhale:
        return const Color(0xFF60A5FA); // Sky Blue
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0F172A), // Dark slate matched background
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              // Portfolio Navigation Header Bar
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text(
                        "SKILLUP EDTECH STUDIO",
                        style: TextStyle(
                          color: Color(0xFF2563EB),
                          fontFamily: "monospace",
                          fontWeight: FontWeight.bold,
                          fontSize: 12,
                        ),
                      ),
                      SizedBox(height: 2),
                      Text(
                        "Flutter Dart Cross-Platform Module",
                        style: TextStyle(color: Colors.grey, fontSize: 11),
                      ),
                    ],
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.06),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Icon(Icons.spa, color: Color(0xFF2563EB), size: 14),
                        const SizedBox(width: 4),
                        Text(
                          "$_completedCyclesCount",
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),

              // Animating Centerpiece Visualizers
              Expanded(
                child: Center(
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      // Radial animated progress sweep lines
                      SizedBox(
                        width: 250,
                        height: 250,
                        child: CircularProgressIndicator(
                          value: _isPlaying ? (4 - _countdownSeconds) / 4.0 : 0.0,
                          strokeWidth: 8.0,
                          backgroundColor: Colors.white.withOpacity(0.04),
                          valueColor: AlwaysStoppedAnimation<Color>(
                            _getBreathStateColor().withOpacity(0.85),
                          ),
                        ),
                      ),
                      
                      // Core Pulsating biological circle
                      AnimatedBuilder(
                        animation: _scaleAnimation,
                        builder: (context, child) {
                          return Transform.scale(
                            scale: _scaleAnimation.value,
                            child: Container(
                              width: 150,
                              height: 150,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: _getBreathStateColor(),
                                boxShadow: [
                                  BoxShadow(
                                    color: _getBreathStateColor().withOpacity(0.4),
                                    blurRadius: 24,
                                    offset: const Offset(0, 10),
                                  )
                                ],
                              ),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Text(
                                    _getBreathStateLabel(),
                                    style: const TextStyle(
                                      color: Colors.white,
                                      fontWeight: FontWeight.bold,
                                      fontSize: 16,
                                    ),
                                    textAlign: TextAlign.center,
                                  ),
                                  if (_isPlaying) ...[
                                    const SizedBox(height: 4),
                                    Text(
                                      "${_countdownSeconds}s",
                                      style: TextStyle(
                                        color: Colors.white.withOpacity(0.85),
                                        fontFamily: "monospace",
                                        fontWeight: FontWeight.w500,
                                        fontSize: 13,
                                      ),
                                    ),
                                  ]
                                ],
                              ),
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ),

              // Interactive command triggers
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    _isPlaying
                        ? "Coordinate inhalation with circular expansion waves"
                        : "Press start to initiate local cross-platform test simulation.",
                    style: const TextStyle(color: Colors.grey, fontSize: 13),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 24),
                  SizedBox(
                    width: double.infinity,
                    height: 54,
                    child: ElevatedButton(
                      onPressed: _togglePlayback,
                      style: ElevatedButton.styleFrom(
                        backgroundColor: _isPlaying ? Colors.red.shade600 : const Color(0xFF2563EB),
                        foregroundColor: Colors.white,
                        elevation: 4.0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                        ),
                      ),
                      child: Text(
                        _isPlaying ? "PAUSE HARMONIZING" : "BEGIN EXERCISE",
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          letterSpacing: 1.2,
                          fontSize: 14,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
