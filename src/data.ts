// Written by Brian McCarthy

export interface Meditation {
  id: number;
  title: string;
  target: string;
  duration: string;
  image: string;
  shortDescription: string;
  description: string;
  instructions: string[];
}

export const MOCK_MEDITATIONS: Meditation[] = [
  {
    id: 1,
    title: "Mindful Breathing Session",
    target: "Mental Health",
    duration: "10 mins",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500",
    shortDescription: "A relaxing session focused entirely on anchoring your busy mind through simple, rhythm-based breath awareness.",
    description: "A foundational breathing meditation designed to steady the wondering mind, release excessive autonomic arousal, and ground yourself in the present moment by listening to metabolic rhythms.",
    instructions: [
      "Find a quiet, supportive spot and sit upright with a tall, relaxed spine.",
      "Rest your hands gently on your lap, facing downwards to ground your energy.",
      "Close your eyes softly and focus your awareness on the raw physical sensation of your inhalation and exhalation.",
      "When your mind naturally drifts, simply acknowledge the thoughts, let them drift by like clouds, and return calmly to the breath."
    ]
  },
  {
    id: 2,
    title: "Deep Sleep Body Scan",
    target: "Sleep Quality",
    duration: "15 mins",
    image: "https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?auto=format&fit=crop&q=80&w=500",
    shortDescription: "Soothing progressive relaxation that releases somatic body tension to prepare the mind for deep sleep.",
    description: "A gentle progressive relaxation exercise targeted to scan physical tension points throughout the body, calm your central nervous system, and smoothly guide your consciousness into deep, restorative sleep.",
    instructions: [
      "Lie flat on your back in bed, with arms rested comfortably at your side, palms facing up.",
      "Take three slow, deep belly breaths, feeling your chest rise and fall rhythmically.",
      "Now, shift your gentle focus down to the tip of your toes, feeling any tightness soften into weightlessness.",
      "Slowly trace this warm awareness upwards through your ankles, calves, knees, thighs, and pelvis, releasing stress on each exhale."
    ]
  },
  {
    id: 3,
    title: "Anxiety Release Box Breath",
    target: "Stress Relief",
    duration: "8 mins",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=500",
    shortDescription: "Lower your immediate physiological stress levels using box breathing structural ratios.",
    description: "An active, empowering breathwork structure using equal-duration breathing ratios (4-4-4-4) to down-regulate the nervous system during sudden spikes of acute anxiety or mental clutter.",
    instructions: [
      "Sit comfortably with your back supported. Take a full breath out to empty your lungs.",
      "Slowly draw fresh air deep into your stomach through your nose for a counted delay of 4 seconds.",
      "Hold that air inside your lungs peacefully for an identical count of 4 seconds.",
      "Exhale smooth and empty through slightly puckered lips over 4 seconds, then hold empty of air for 4 seconds."
    ]
  },
  {
    id: 4,
    title: "Loving-Kindness Meditation",
    target: "Emotional Balance",
    duration: "12 mins",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=500",
    shortDescription: "Cultivate boundless positive emotions for yourself and loved ones to restore confidence.",
    description: "A classic Metta meditation designed to actively expand heart energy, heal internal self-criticism, and cultivate unconditional loving-kindness first for yourself, then extending outwards to all sentient life.",
    instructions: [
      "Rest in a peaceful, non-restrictive meditative posture. Place one hand gently over your heart center.",
      "Acknowledge your own life and whisper inward: May I be genuinely happy. May I be healthy and safe. May I live at ease.",
      "Now, picture someone you care deeply about. Project those identical sentiments toward them with full sincerity.",
      "Slowly widen the lens of your intent to hold your city, your country, and all living things across the world in that silent healing wish."
    ]
  }
];

export interface YogaGuideItem {
  id: number;
  name: string;
  target: string;
  image: string;
  instructions: string[];
}

export interface PilatesGuideItem {
  id: number;
  name: string;
  target: string;
  image: string;
  instructions: string[];
}

export interface ExerciseGuideItem {
  id: number;
  name: string;
  target: string;
  image: string;
  instructions: string[];
}

export interface SleepStory {
  id: number;
  title: string;
  narrator: string;
  duration: string;
  image: string;
  description: string;
}

export interface BedtimeSound {
  id: string;
  name: string;
  iconType: string;
  description: string;
}

export interface Soundscape {
  id: number;
  title: string;
  category: string;
  image: string;
  duration: string;
  description: string;
}

export const YOGA_GUIDE: YogaGuideItem[] = [
  {
    id: 101,
    name: "Child's Pose (Balasana)",
    target: "Upper Back & Shoulder Tension",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Kneel on your yoga mat with your knees wide apart and big toes touching behind you.",
      "Inhale deeply to sit up tall, then exhale as you slowly hinge forward from your hips.",
      "Extend your arms fully in front of you, palms resting flatly on the soft floor.",
      "Lower your torso completely between your knees, placing your forehead gently on the mat.",
      "Stay for 10 slow, deep belly breaths, releasing back tension on each exhalation."
    ]
  },
  {
    id: 102,
    name: "Cobra Pose (Bhujangasana)",
    target: "Spinal Flexibility & Heart Opener",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Lie face down flat on your stomach with your legs extended straight behind you.",
      "Place your palms flat on the yoga mat directly underneath your shoulders.",
      "Hug your elbows tightly into your ribs and press the tops of your feet firmly into the floor.",
      "Inhale and press down into your hands to lift your chest off the mat, keeping elbows bent.",
      "Gaze slightly upward, relax your shoulders away from your ears, and hold for 5 soft breaths."
    ]
  },
  {
    id: 103,
    name: "Downward-Facing Dog (Adho Mukha)",
    target: "Hamstrings, Calves & Whole Spine stretch",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Come onto your hands and knees in a tabletop position, wrist directly below shoulder joints.",
      "Tuck your toes under, lift your knees off the floor, and send your hips up and back.",
      "Press the mat forward with your flat palms, spreading fingers wide to distribute weight.",
      "Pedal your heels up and down to gently stretch out tight calf muscles.",
      "Hold your head loosely between your biceps, relaxing your neck. Hold for 5 detailed cycles."
    ]
  },
  {
    id: 104,
    name: "Warrior II Pose (Virabhadrasana)",
    target: "Hip Opening & Quad Strength stability",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Stand tall and step your feet wide apart, about 3 to 4 feet dynamically.",
      "Turn your right foot out 90 degrees and pivot your left foot slightly inward.",
      "Extend both arms outward to your sides, parallel to the floor, palms facing down.",
      "Bend your front right knee over your right ankle, lowering hips without losing chest height.",
      "Turn your head to look out past your right middle finger. Breathe deeply for 5 cycles."
    ]
  }
];

export const PILATES_GUIDE: PilatesGuideItem[] = [
  {
    id: 201,
    name: "The Pilates Hundred",
    target: "Core Power & Breath Stamina",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Lie flat on your back, then lift both knees up into a tabletop pose (90 degrees).",
      "Curl your head, neck, and upper shoulders smoothly off the mat, engaging abdominal walls.",
      "Extend both arms straight alongside your body, hovering them about 2 inches off the ground.",
      "Pump your arms up and down rapidly yet controlled in small, precise beats.",
      "Inhale fully through your nose for 5 counts, and exhale firmly through your mouth for 5 counts.",
      "Repeat this breathing sequence 10 times to complete 100 energetic pumps."
    ]
  },
  {
    id: 202,
    name: "The Spine Roll Up",
    target: "Intervertebral Flexibility & Ab Strength",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Lie flat on your back, legs glued straight together, arms extending long overhead.",
      "Inhale to float your arms up toward the ceiling, tucking your chin lightly to chest.",
      "Exhale and begin to peel your spine up off the floor vertebrae by vertebrae.",
      "Keep your abdominal muscles scooped deeply inward as you reach forward toward your feet.",
      "Inhale as you begin to roll back down, placing each spinal segment onto the mat with control."
    ]
  },
  {
    id: 203,
    name: "Single Leg Ab Stretch",
    target: "Lower Abs & Oblique Stability",
    image: "https://images.unsplash.com/photo-1522845015757-519cbb2df93f?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Lie down on your back, draw both knees tightly in towards your chest.",
      "Lift your head, neck, and shoulders off the mat. Put your hands on your shins.",
      "Inhale and extend your right leg out straight at a 45-degree angle in the air.",
      "Keep your left knee pulled into your chest, resting hands lightly on the knee.",
      "Exhale and alternate legs rapidly yet smoothly. Repeat 10 to 15 times on each side."
    ]
  }
];

export const EXERCISE_GUIDE: ExerciseGuideItem[] = [
  {
    id: 301,
    name: "Bodyweight Air Squat",
    target: "Quads, Hamstrings & Glutes",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Stand tall with feet spaced comfortably shoulder-width apart, toes pointing slightly out.",
      "Extend your arms straight in front of you as a counterbalance, keeping your gaze forward.",
      "Inhale, push your hips back, and begin bending your knees as if sitting into a chair.",
      "Lower your body down until your thighs are parallel to the floor, keeping heels pinned down.",
      "Exhale and push firmly through your heels to return to the starting upright posture."
    ]
  },
  {
    id: 302,
    name: "Standard Push-Up",
    target: "Chest, anterior deltoids & Triceps power",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Get into a high plank stance with hand placements slightly wider than shoulders.",
      "Keep your feet close together, tuck your pelvis slightly, and activate your entire core.",
      "Lower your body by bending elbows at a 45-degree angle until your chest nearly brushes the floor.",
      "Avoid letting your lower back sag down; maintain a rigid, arrow-straight line.",
      "Push strongly through your palms to return back up to the top lock-out position."
    ]
  },
  {
    id: 303,
    name: "Alternating Reverse Lunge",
    target: "Uni-lateral Balance & Thigh Strength",
    image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Begin by standing straight with feet together, hands rested on your hips for balance.",
      "Step your right foot back about 2 feet, resting on the ball of the foot.",
      "Lower your hips until your left front thigh is parallel to the ground, front knee behind toes.",
      "Make sure your back knee hovers just an inch off the floor without slamming.",
      "Drive weight through your left front heel to pop back cleanly to starting alignment; swap legs."
    ]
  },
  {
    id: 304,
    name: "Forearm Plank Hold",
    target: "Transverse Abdominis & Lower Back protection",
    image: "https://images.unsplash.com/photo-1566241477600-ac026ad43874?q=80&w=500&auto=format&fit=crop",
    instructions: [
      "Place forearms flat on your mat, elbows stacked precisely beneath shoulder joints.",
      "Step your feet back and lift onto your toes, aligning your body in a steel-like plank.",
      "Squeeze your glutes, draw your belly button in, and push the floor away on your forearms.",
      "Neutralize your spine by looking slightly down at your hands, not forward.",
      "Breathe in and out through your nose, focusing on staying rigid for 30 to 60 seconds."
    ]
  }
];

export const CELEB_SLEEP_STORIES: SleepStory[] = [
  {
    id: 401,
    title: "Wonder of the Desert Stars",
    narrator: "Matthew McConaughey",
    duration: "35 mins",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=500&auto=format&fit=crop",
    description: "Venture onto a quiet desert landscape as Matthew guides you through the serene grandeur of the cosmos in his signature warm, meditative drawl."
  },
  {
    id: 402,
    title: "The Lavender Valleys of Provence",
    narrator: "Stephen Fry",
    duration: "28 mins",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=500&auto=format&fit=crop",
    description: "Stroll along the fragrant purple paths of Southern France under Stephen Fry's velvet baritone storyteller guidance, designed to ease cognitive noise."
  },
  {
    id: 403,
    title: "Train Your Sleeping Mind",
    narrator: "LeBron James",
    duration: "22 mins",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500&auto=format&fit=crop",
    description: "LeBron shares mental fitness concepts alongside progressive relaxing soundscapes to prepare your baseline psychology for deep sleep."
  },
  {
    id: 404,
    title: "Whispering Redwoods of California",
    narrator: "Dame Helen Mirren",
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=500&auto=format&fit=crop",
    description: "Step inside majestic ancient redwoods under Helen's calming, aristocratic, beautifully peaceful narration that naturally lowers pulse rates."
  }
];

export const BEDTIME_SOUNDS: BedtimeSound[] = [
  { id: "ocean_sound", name: "Ocean Waves", iconType: "Waves", description: "Rhythmic oceanic tide splashing softly against white sand under an ambient moon." },
  { id: "storm_sound", name: "Rain & Thunderstorm", iconType: "CloudRain", description: "Soft, drumming rain hitting a metal roof with distant, warm rumbles of soothing thunder." },
  { id: "rainforest_sound", name: "Rainforest Canopy", iconType: "Trees", description: "Lush tropical canopies layered with chirping frogs, humming crickets, and a dynamic waterfall." },
  { id: "fire_sound", name: "Crackling Fireplace", iconType: "Flame", description: "A warm, flickering log fire crackling cozily inside a wooden mountain cabin." }
];

export const SOOTHING_SOUNDSCAPES: Soundscape[] = [
  {
    id: 501,
    title: "Celestial Floating",
    category: "Deep Universe Space",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop",
    duration: "45 mins",
    description: "Slow-shifting synthesized space pads combined with ambient cosmic frequencies tuned to 432Hz."
  },
  {
    id: 502,
    title: "Ethereal Mountain Cabin",
    category: "Zen Nature Ambient",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=500&auto=format&fit=crop",
    duration: "60 mins",
    description: "Soft acoustic flutes intertwining with gentle morning birds chirping, woodwinds, and soft windchimes."
  },
  {
    id: 503,
    title: "Kyoto Stream Garden",
    category: "Japanese Water Flow",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500&auto=format&fit=crop",
    duration: "90 mins",
    description: "Rhythmic trickles of water along smooth river stones, paired with a distant bamboo deer shaker."
  }
];

export const CODE_FILES = {
  "signup.js": `// Written by Brian McCarthy
import React, { useState } from "react";
import { View, SafeAreaView, Image, Alert, TextInput, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS } from "../constants";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!userName || !email || !password) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }
    const userDetails = { userName, email, password, token: "sample-token" };
    await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
    console.log("User accounts serialized:", userDetails);
    router.push("/login"); // Navigates securely back to authentication
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{ headerStyle: { backgroundColor: COLORS.lightWhite }, headerShadowVisible: false, headerLeft: () => <></>, headerTitle: "" }} />
      <View style={{ padding: 20 }} testID="signupContainer">
        <View style={{ padding: 20, marginLeft: "auto", marginRight: "auto", backgroundColor: "#f0f0f0", borderRadius: 50, height: 90, ...SHADOWS.medium, shadowColor: COLORS.white }} testID="imageIcon">
          <Image source={icons.menu} style={{ width: 50, height: 50 }} />
        </View>
        <View style={{ marginTop: 30 }} testID="formData">
          <View style={{ marginBottom: 10 }} testID="userName">
            <TextInput style={{ borderColor: "#ccc", borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 }} value={userName} onChangeText={setUserName} placeholder="UserName" />
          </View>
          <View style={{ marginBottom: 10 }} testID="email">
            <TextInput style={{ borderColor: "#ccc", borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 }} value={email} onChangeText={setEmail} placeholder="Email" />
          </View>
          <View style={{ marginBottom: 20 }} testID="password">
            <TextInput style={{ borderColor: "#ccc", borderWidth: 1, padding: 10, borderRadius: 5 }} value={password} onChangeText={setPassword} secureTextEntry={true} placeholder="Password" />
          </View>
          <TouchableOpacity style={{ backgroundColor: COLORS.primary, padding: 15, borderRadius: 5, alignItems: "center", marginBottom: 10 }} onPress={handleRegister} testID="handleRegister">
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 5 }} testID="textData">
            <Text style={{ marginRight: 5 }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={{ color: "blue" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;`,

  "login.js": `// Written by Brian McCarthy
import React, { useState } from "react";
import { View, SafeAreaView, Image, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS } from "../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }
    try {
      const detailsDatafromSignup = await AsyncStorage.getItem("userDetails");
      if (detailsDatafromSignup) {
        const parsedDetails = JSON.parse(detailsDatafromSignup);
        if (email === parsedDetails.email && password === parsedDetails.password) {
          router.push("/home");
        } else {
          Alert.alert("Error", "Incorrect email or password.");
        }
      } else {
        Alert.alert("Error", "No user details found in AsyncStorage.");
      }
    } catch (error) {
      console.error("Error accessing AsyncStorage", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{ headerStyle: { backgroundColor: COLORS.lightWhite }, headerShadowVisible: false, headerLeft: () => <></>, headerTitle: "" }} />
      <View style={{ padding: 20 }}>
        <View style={{ padding: 20, marginLeft: "auto", marginRight: "auto", backgroundColor: "#f0f0f0", borderRadius: 50, height: 90, ...SHADOWS.medium, shadowColor: COLORS.white }}>
          <Image source={icons.menu} style={{ width: 50, height: 50, marginBottom: 20 }} />
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <TextInput style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 10 }} value={email} onChangeText={setEmail} placeholder="Email" />
            <TextInput style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 10 }} value={password} secureTextEntry={true} onChangeText={setPassword} placeholder="Password" />
          </View>
          <TouchableOpacity style={{ backgroundColor: COLORS.primary, padding: 15, borderRadius: 5, alignItems: "center" }} onPress={handleLogin}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 10 }}>
          <Text style={{ marginRight: 5 }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={{ color: "blue" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;`,

  "home.js": `// Written by Brian McCarthy
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../constants/theme";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Welcome from "../components/Welcome";
import DailyQuote from "../components/DailyQuote";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const user = await AsyncStorage.getItem("userDetails");
    setUserDetails(user);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenHeaderBtn />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }} testID="screensDisplay">
          <Welcome userDetails={userDetails ? JSON.parse(userDetails) : null} />
          <DailyQuote />
          <PopularMeditation />
          <DailyMeditation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;`,

  "settings.js": `// Written by Brian McCarthy
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { COLORS, FONT, icons, SHADOWS, SIZES } from "../constants";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";

const Settings = () => {
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();

  const settings = [
    { id: 1, title: "Settings", icon: "https://cdn-icons-png.flaticon.com/512/126/126472.png", route: "ThemeChange" },
    { id: 2, title: "My Favourites", icon: "https://cdn-icons-png.flaticon.com/512/2932/2932360.png", route: "Favourites" },
    { id: 3, title: "Daily Reminders", icon: "https://cdn-icons-png.flaticon.com/512/109/109613.png", route: "DailyReminders" },
  ];

  useEffect(() => {
    const loadUser = async () => {
      const user = await AsyncStorage.getItem("userDetails");
      setUserDetails(user);
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userDetails");
    router.push("/login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenHeaderBtn />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <View style={{ width: "100%" }} testID="userDetails">
            {userDetails && (
              <Text style={{ fontFamily: FONT.regular, fontSize: SIZES.large, color: COLORS.secondary }}>
                Hello {JSON.parse(userDetails).userName}!
              </Text>
            )}
            <Text style={{ fontFamily: FONT.bold, fontSize: SIZES.xLarge, color: COLORS.primary, marginTop: 2 }}>
              Would you like to change any settings?
            </Text>
          </View>

          {settings.map((setting) => (
            <TouchableOpacity key={setting.id} style={{ flex: 1, justifyContent: "space-between", alignItems: "center", flexDirection: "row", padding: SIZES.medium, borderRadius: SIZES.small, backgroundColor: "#FFF", ...SHADOWS.medium, shadowColor: COLORS.white, marginVertical: SIZES.small }} onPress={() => router.push(\`settings/\${setting.route}\`)}>
              <View style={{ width: 50, height: 50, backgroundColor: COLORS.white, borderRadius: SIZES.medium, justifyContent: "center", alignItems: "center" }}>
                <Image source={{ uri: setting.icon }} resizeMode="cover" style={{ width: "70%", height: "70%" }} />
              </View>
              <View style={{ flex: 1, marginHorizontal: SIZES.medium }}>
                <Text style={{ fontSize: SIZES.medium, fontFamily: "DMBold", color: COLORS.primary }}>{setting.title}</Text>
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={{ flex: 1, justifyContent: "space-between", alignItems: "center", flexDirection: "row", padding: SIZES.medium, borderRadius: SIZES.small, backgroundColor: "#FFC0CB", ...SHADOWS.medium, shadowColor: COLORS.white, marginVertical: SIZES.small }} onPress={handleLogout}>
            <View style={{ width: 50, height: 50, backgroundColor: COLORS.white, borderRadius: SIZES.medium, justifyContent: "center", alignItems: "center" }}>
              <Image source={icons.left} resizeMode="cover" style={{ width: "70%", height: "70%" }} />
            </View>
            <View style={{ flex: 1, marginHorizontal: SIZES.medium }}><Text style={{ fontSize: SIZES.medium, fontFamily: "DMBold", color: COLORS.primary }}>Logout</Text></View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Settings;`,

  "ThemeChange.js": `// Written by Brian McCarthy
import { Text, SafeAreaView, Switch, View } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const ThemeChange = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite }}>
      <ScreenHeaderBtn />
      <View style={{ justifyContent: "space-between", padding: SIZES.medium, borderRadius: SIZES.small, backgroundColor: isDarkMode ? COLORS.lightWhite : COLORS.darkBackground, ...SHADOWS.medium, shadowColor: COLORS.white, margin: SIZES.medium }}>
        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ color: isDarkMode ? COLORS.lightText : COLORS.darkText, fontSize: SIZES.medium, fontFamily: "DMBold", margin: SIZES.small }}>
            {isDarkMode ? "Dark Mode Activated" : "Light Mode Activated"}
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} trackColor={{ false: "#767577", true: "#FE7654" }} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ThemeChange;`,

  "Favourites.js": `// Written by Brian McCarthy
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONT, SIZES } from "../../constants";
import DailyMeditation from "../../components/DailyMeditation";
import { useFocusEffect } from "expo-router";
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn'

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      const favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
      setFavorites(favoritesArray);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBackground }}>
      <ScreenHeaderBtn />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : favorites.length === 0 ? (
            <Text style={styles.headerTitle}>No favorite items bookmarked.</Text>
          ) : (
            <>
              <Text style={{ textAlign: "center", color: "#FF4500", fontWeight: "bold", marginVertical: 10 }}>My Favourite Exercises</Text>
              <DailyMeditation meditations={favorites} />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: SIZES.xLarge, padding: SIZES.medium },
  headerTitle: { fontSize: SIZES.large, fontFamily: FONT.medium, color: COLORS.primary, textAlign: "center", marginTop: 20 }
});
export default Favourites;`,

  "DailyReminders.js": `// Written by Brian McCarthy
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Switch, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const DailyReminders = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const triggerTestNotification = () => {
    Alert.alert(
      "Test Notification Successfully Triggered!",
      "Time for your daily meditation. Keep up your streak!",
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenHeaderBtn />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Notification Settings</Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Daily Meditations Alert</Text>
            <Switch trackColor={{ false: "#767577", true: "#FE7654" }} onValueChange={toggleSwitch} value={isEnabled} />
          </View>
          <Text style={styles.helperText}>Enabling this sets a local push schedule daily.</Text>
          <TouchableOpacity style={styles.testBtn} onPress={triggerTestNotification}>
            <Text style={styles.testBtnText}>Confirm and Trigger Test Notify</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { padding: SIZES.medium },
  title: { fontSize: SIZES.large, color: COLORS.primary, marginBottom: SIZES.medium },
  settingRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", padding: SIZES.medium, borderRadius: SIZES.small, marginTop: SIZES.small },
  settingLabel: { fontSize: SIZES.medium, color: COLORS.secondary },
  helperText: { fontSize: SIZES.small, color: COLORS.gray, marginVertical: SIZES.medium },
  testBtn: { backgroundColor: COLORS.primary, padding: SIZES.medium, borderRadius: SIZES.medium, alignItems: "center" },
  testBtnText: { color: "#fff", fontWeight: "bold" }
});
export default DailyReminders;`,

  "Footer.js": `// Written by Brian McCarthy
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Footer.style";
import { icons } from "../../constants";

const Footer = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const favorites = await AsyncStorage.getItem("favorites");
        const favoritesArray = favorites ? JSON.parse(favorites) : [];
        const isFav = favoritesArray.some((item) => item.id === data.id);
        setIsFavorite(isFav);
      } catch (error) {
        console.error("Failed to fetch favorites", error);
      }
    };
    checkIfFavorite();
  }, [data.id]);

  const handleFavoriteToggle = async () => {
    try {
      let favorites = await AsyncStorage.getItem("favorites");
      favorites = favorites ? JSON.parse(favorites) : [];
      const updatedFavorites = isFavorite
        ? favorites.filter((item) => item.id !== data.id)
        : [...favorites, data];
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Failed to update favorites", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={handleFavoriteToggle}>
        <Image source={isFavorite ? icons.heartFilled : icons.heartOutline} resizeMode="contain" style={[styles.likeBtnImage, { tintColor: isFavorite ? "red" : "#F37453" }]} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn} onPress={handleFavoriteToggle}>
        <Text style={styles.applyBtnText}>
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;`,

  "DailyQuote.js": `// Written by Brian McCarthy
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (response.ok) {
        const data = await response.json();
        setQuote(data.quote);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="small" color="#0000ff" /> : <Text style={styles.quoteText}>"{quote}"</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { justifyContent: 'center', border: '1px solid #ccc', borderTopRightRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, marginVertical: 10 },
  quoteText: { fontSize: 16, fontStyle: 'italic', textAlign: 'center' }
});
export default DailyQuote;`,

  "useFetch.js": `// Written by Brian McCarthy
import { useState, useEffect } from "react";
import { MOCK_MEDITATIONS } from "./data"; // Standard list fallback

const useFetch = (endpoint, query) => {
  const [data, setData] = useState(MOCK_MEDITATIONS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const getItemById = (id) => {
    return MOCK_MEDITATIONS.find(item => item.id === id);
  };

  return { data, isLoading, error, refetch, getItemById };
};
export default useFetch;`
};
