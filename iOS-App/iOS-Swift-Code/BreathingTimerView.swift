import SwiftUI

/// BreathingTimerView - iOS Swift & SwiftUI Implementation
/// Authored by Brian McCarthy for the MindfulSpace Capstone Portfolio.
/// Employs advanced state mechanics, custom transitions, and Haptic Feedback interfaces.
struct BreathingTimerView: View {
    
    // Core state indicators
    @State private var isActive: Bool = false
    @State private var timerState: BreathSessionState = .inhale
    @State private var secondsRemaining: Int = 4
    @State private var totalSessionsCompleted: Int = 0
    
    // Smooth Animation states
    @State private var diaphragmScale: CGFloat = 1.0
    @State private var ringRotationAngle: Double = 0.0
    
    // Background publishing timer
    @State private var timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()
    
    enum BreathSessionState: String {
        case inhale = "Breathe In"
        case hold = "Hold Breath"
        case exhale = "Breathe Out"
        
        var next: BreathSessionState {
            switch self {
            case .inhale: return .hold
            case .hold: return .exhale
            case .exhale: return .inhale
            }
        }
        
        var accentColor: Color {
            switch self {
            case .inhale: return Color.blue
            case .hold: return Color(red: 0.15, green: 0.5, blue: 0.95)
            case .exhale: return Color(red: 0.37, green: 0.64, blue: 0.98)
            }
        }
    }

    var body: some View {
        ZStack {
            // High-contrasted dark background styling matched with Capstone guidelines
            Color(red: 0.06, green: 0.09, blue: 0.16)
                .ignoresSafeArea()
            
            VStack(spacing: 40) {
                
                // Tech Accent Header
                HStack {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("SKILLUP EDTECH STUDIO")
                            .font(.system(.caption, design: .monospaced))
                            .fontWeight(.bold)
                            .foregroundColor(.blue)
                        Text("iOS Swift UI Native Client")
                            .font(.caption)
                            .foregroundColor(.gray)
                    }
                    Spacer()
                    
                    // Display Session Count Badge
                    HStack(spacing: 4) {
                        Image(systemName: "checkmark.seal.fill")
                            .foregroundColor(.blue)
                        Text("\(totalSessionsCompleted)")
                            .font(.system(.footnote, design: .monospaced))
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                    }
                    .padding(.horizontal, 12)
                    .padding(.vertical, 6)
                    .background(Color(.systemBackground).opacity(0.08))
                    .cornerRadius(20)
                }
                .padding(.horizontal)
                
                Spacer()
                
                // Animating Diaphragm Section
                ZStack {
                    
                    // Translucent Outer Ripple
                    Circle()
                        .fill(timerState.accentColor.opacity(0.12))
                        .frame(width: 250, height: 250)
                        .scaleEffect(isActive ? diaphragmScale * 1.15 : 1.0)
                        .animation(isActive ? .easeInOut(duration: 4.0) : .default, value: diaphragmScale)
                    
                    // Static Tracker Track ring
                    Circle()
                        .stroke(Color.white.opacity(0.06), lineWidth: 10)
                        .frame(width: 210, height: 210)
                    
                    // Sweep-Arc progress indicator
                    Circle()
                        .trim(from: 0.0, to: isActive ? CGFloat(4 - secondsRemaining) / 4.0 : 0.0)
                        .stroke(
                            AngularGradient(
                                colors: [.blue, timerState.accentColor, .blue],
                                center: .center
                            ),
                            style: StrokeStyle(lineWidth: 10, lineCap: .round)
                        )
                        .frame(width: 210, height: 210)
                        .rotationEffect(Angle(degrees: -90))
                        .animation(.linear(duration: 1.0), value: secondsRemaining)
                    
                    // Main Interactive Circle Button
                    Circle()
                        .fill(
                            LinearGradient(
                                colors: [timerState.accentColor, .blue],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 150, height: 150)
                        .scaleEffect(isActive ? diaphragmScale : 1.0)
                        .shadow(color: timerState.accentColor.opacity(0.55), radius: 20, x: 0, y: 10)
                        .animation(isActive ? .easeInOut(duration: 4.0) : .default, value: diaphragmScale)
                    
                    // Inner Circular state typography label
                    VStack(spacing: 6) {
                        Text(isActive ? timerState.rawValue : "Ready")
                            .font(.headline)
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                            .transition(.opacity)
                        
                        if isActive {
                            Text("\(secondsRemaining)s")
                                .font(.system(.title3, design: .monospaced))
                                .fontWeight(.medium)
                                .foregroundColor(.white.opacity(0.85))
                                .transition(.scale)
                        }
                    }
                }
                .frame(maxHeight: 300)
                
                Spacer()
                
                // Instructions and active trigger controllers
                VStack(spacing: 24) {
                    Text(isActive ? "Harmonize with the pulsating radial rhythm" : "Improve mindfulness. Initialize your daily interval.")
                        .font(.footnote)
                        .foregroundColor(.gray)
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 32)
                    
                    Button(action: {
                        toggleBreathingPlayerState()
                    }) {
                        Text(isActive ? "PAUSE ACTIVE SESSION" : "ACTIVATE BREATHING TIMER")
                            .font(.system(.subheadline, design: .rounded))
                            .fontWeight(.bold)
                            .letterSpacing(1.2)
                            .foregroundColor(.white)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 16)
                            .background(
                                RoundedRectangle(cornerRadius: 14)
                                    .fill(isActive ? Color.red.opacity(0.85) : Color.blue)
                            )
                            .shadow(color: (isActive ? Color.red : Color.blue).opacity(0.25), radius: 10, y: 5)
                    }
                    .padding(.horizontal, 24)
                }
                .padding(.bottom, 24)
            }
        }
        .onReceive(timer) { _ in
            guard isActive else { return }
            
            // Subtract seconds countdown remaining
            if secondsRemaining > 1 {
                secondsRemaining -= 1
            } else {
                // Completed a state! Switch to next
                secondsRemaining = 4
                let oldState = timerState
                timerState = timerState.next
                
                // If we wrapped back to inhale, consider a set complete!
                if timerState == .inhale {
                    totalSessionsCompleted += 1
                    
                    // Trigger light UX Haptic Feedback
                    let generator = UINotificationFeedbackGenerator()
                    generator.notificationOccurred(.success)
                }
                
                // Trigger scaling alterations to match expanding size
                withAnimation {
                    updateDiaphragmScaleRatio()
                }
            }
        }
    }
    
    /// Starts or Pauses the persistent breathing interval lifecycle
    private func toggleBreathingPlayerState() {
        isActive.toggle()
        if isActive {
            secondsRemaining = 4
            timerState = .inhale
            updateDiaphragmScaleRatio()
        } else {
            diaphragmScale = 1.0
        }
    }
    
    /// Modifies the diaphragm size ratios dynamically based on biological breath modes
    private func updateDiaphragmScaleRatio() {
        switch timerState {
        case .inhale:
            diaphragmScale = 1.40 // Expand
        case .hold:
            diaphragmScale = 1.40 // Remain expanded
        case .exhale:
            diaphragmScale = 1.00 // Retract
        }
    }
}

// SwiftUI Preview Anchor
struct BreathingTimerView_Previews: PreviewProvider {
    static var previews: some View {
        BreathingTimerView()
    }
}
