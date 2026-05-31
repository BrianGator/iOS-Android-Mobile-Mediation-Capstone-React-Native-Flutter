package com.mindfulspace.android.ui

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.core.*
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

/**
 * BreathingTimerActivity - Android Jetpack Compose Implementation
 * Developed by Brian McCarthy for the MindfulSpace Capstone Portfolio.
 * Designed using modern Android Architecture Guidelines, Coroutines, and Declarative UI.
 */
class BreathingTimerActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = Color(0xFF0F172A) // Deep Slate Navy Dark Background
                ) {
                    BreathingTimerScreen()
                }
            }
        }
    }
}

enum class BreathState(val label: String, val durationMs: Long) {
    INHALE("Breathe In", 4000L),
    HOLD("Hold", 4000L),
    EXHALE("Breathe Out", 4000L)
}

@Composable
fun BreathingTimerScreen() {
    var isTimerRunning by remember { mutableStateOf(false) }
    var currentBreathState by remember { mutableStateOf(BreathState.INHALE) }
    var elapsedSecondsByState by remember { mutableStateOf(0) }
    val coroutineScope = rememberCoroutineScope()

    // Smooth Infinite Animation for pulse mapping to Breath State
    val infiniteTransition = rememberInfiniteTransition(label = "pulseTransition")
    
    // Scale animation mapping based on current breathing lifecycle action
    val animatedScale by animateFloatAsState(
        targetValue = when {
            !isTimerRunning -> 1.0f
            currentBreathState == BreathState.INHALE -> 1.45f
            currentBreathState == BreathState.HOLD -> 1.45f
            else -> 1.0f
        },
        animationSpec = tween(
            durationMillis = 4000,
            easing = LinearOutSlowInEasing
        ),
        label = "timerScale"
    )

    // Secondary soft ambient pulse circle alpha mapping
    val glowingPulseScale by infiniteTransition.animateFloat(
        initialValue = 1.0f,
        targetValue = 1.7f,
        animationSpec = infiniteRepeatable(
            animation = tween(2000, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "glowPulse"
    )

    // Core Coroutine Loop Managing state transitions
    LaunchedEffect(isTimerRunning) {
        if (isTimerRunning) {
            while (isTimerRunning) {
                elapsedSecondsByState = 0
                // Stay in the state for individual state length
                for (sec in 1..4) {
                    delay(1000L)
                    elapsedSecondsByState = sec
                }
                
                // Shift to next enumeration in cyclic loop sequence
                currentBreathState = when (currentBreathState) {
                    BreathState.INHALE -> BreathState.HOLD
                    BreathState.HOLD -> BreathState.EXHALE
                    BreathState.EXHALE -> BreathState.INHALE
                }
            }
        } else {
            currentBreathState = BreathState.INHALE
            elapsedSecondsByState = 0
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        // App Header Bar
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = "SkillUp EdTech Studio",
                color = Color(0xFF3B82F6), // Professional blue styling
                fontSize = 12.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )
            Text(
                text = "Android Kotlin Native",
                color = Color.LightGray,
                fontSize = 11.sp,
                fontWeight = FontWeight.Normal
            )
        }

        // Circular Breathe Visualizer Frame
        Box(
            contentAlignment = Alignment.Center,
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth()
        ) {
            // Glow Effect Circle (Only rendered when timer runs)
            if (isTimerRunning) {
                Box(
                    modifier = Modifier
                        .size(160.dp)
                        .clip(CircleShape)
                        .background(Color(0x1F2563EB)) // Blue translucent glow
                        .fillMaxSize(glowingPulseScale)
                )
            }

            // Core Pulsating Canvas Circle representing diaphragm expansion
            Box(
                contentAlignment = Alignment.Center,
                modifier = Modifier
                    .size(180.dp * animatedScale)
                    .clip(CircleShape)
                    .background(Color(0xFF2563EB)) // Vivid UI Accent Blue
            ) {
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Text(
                        text = if (isTimerRunning) currentBreathState.label else "Ready",
                        color = Color.White,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Bold,
                        textAlign = TextAlign.Center
                    )
                    if (isTimerRunning) {
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "${4 - elapsedSecondsByState}s",
                            color = Color(0xCCE2E8F0),
                            fontSize = 14.sp,
                            fontWeight = FontWeight.Medium
                        )
                    }
                }
            }

            // Outer Progress Ring mapping time passage
            Canvas(modifier = Modifier.size(280.dp)) {
                // Drawing Track Ring
                drawCircle(
                    color = Color(0x3394A3B8),
                    radius = size.minDimension / 2,
                    style = Stroke(width = 8.dp.toPx())
                )

                // Drawing Active Animated State Progress Sweeping Arc
                if (isTimerRunning) {
                    val progressValue = (elapsedSecondsByState / 4f) * 360f
                    drawArc(
                        color = Color(0xFF60A5FA),
                        startAngle = -90f,
                        sweepAngle = progressValue,
                        useCenter = false,
                        style = Stroke(
                            width = 10.dp.toPx(),
                            cap = StrokeCap.Round
                        )
                    )
                }
            }
        }

        // Bottom Controls Frame
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.padding(bottom = 32.dp)
        ) {
            Text(
                text = if (isTimerRunning) "Focus on your deep breathing loop" else "Press Start to begin breathing exercise",
                color = Color(0xFF94A3B8),
                fontSize = 13.sp,
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(bottom = 20.dp)
            )

            Button(
                onClick = { isTimerRunning = !isTimerRunning },
                colors = ButtonDefaults.buttonColors(
                    containerColor = if (isTimerRunning) Color(0xFFEF4444) else Color(0xFF2563EB)
                ),
                contentPadding = PaddingValues(horizontal = 48.dp, vertical = 14.dp),
                modifier = Modifier.fillMaxWidth(0.8f)
            ) {
                Text(
                    text = if (isTimerRunning) "PAUSE SESSION" else "START BREATHING",
                    color = Color.White,
                    fontWeight = FontWeight.Bold,
                    letterSpacing = 1.1.sp
                )
            }
        }
    }
}
