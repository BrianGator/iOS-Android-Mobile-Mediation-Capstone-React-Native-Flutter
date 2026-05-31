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
