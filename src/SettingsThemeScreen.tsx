import React from 'react';
import { motion } from 'motion/react';
import { 
  Moon, Sun, ChevronRight
} from "lucide-react";

export const SettingsThemeScreen = (props: any) => {
  const {
    setActiveScreen,
    isDarkMode, setIsDarkMode, triggerAlert,
    appTheme, setAppTheme
  } = props;
  
  const handleThemeChange = (theme: string, isDark: boolean) => {
    setAppTheme(theme);
    setIsDarkMode(isDark);
    triggerAlert("Theme Applied", `App theme changed to ${theme}`, "success");
  };

  return (
    <>
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
                        onClick={() => handleThemeChange(isDarkMode ? "light" : "dark", !isDarkMode)}
                        className={`w-11 h-6 rounded-full p-0.5 transition ${isDarkMode ? "bg-blue-600" : "bg-slate-300"}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${isDarkMode ? "translate-x-5" : ""}`} />
                      </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2 shadow-sm">
                      <span className="font-bold text-xs block text-slate-900 dark:text-white mb-2">Custom Themes Options</span>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <button onClick={() => handleThemeChange("dark", true)} className={`p-2 rounded-lg text-xs font-bold border ${appTheme === 'dark' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-white' : 'border-slate-200 dark:border-slate-700 bg-slate-950 text-slate-100'}`}>Dark Theme</button>
                        <button onClick={() => handleThemeChange("nature", true)} className={`p-2 rounded-lg text-xs font-bold border ${appTheme === 'nature' ? 'border-green-500 bg-green-50 dark:bg-green-900 text-green-600 dark:text-white' : 'border-slate-200 dark:border-slate-700 bg-green-950 text-green-100'}`}>Nature Theme</button>
                        <button onClick={() => handleThemeChange("lake", true)} className={`p-2 rounded-lg text-xs font-bold border ${appTheme === 'lake' ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900 text-cyan-600 dark:text-white' : 'border-slate-200 dark:border-slate-700 bg-cyan-950 text-cyan-100'}`}>Lake Theme</button>
                        <button onClick={() => handleThemeChange("mountain", true)} className={`p-2 rounded-lg text-xs font-bold border ${appTheme === 'mountain' ? 'border-stone-500 bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-white' : 'border-slate-200 dark:border-slate-700 bg-stone-900 text-stone-100'}`}>Mountain Theme</button>
                        <button onClick={() => handleThemeChange("bright", false)} className={`p-2 rounded-lg text-xs font-bold border ${appTheme === 'bright' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-100 text-yellow-900 dark:text-yellow-900' : 'border-slate-200 dark:border-slate-700 bg-yellow-50 text-yellow-900'}`}>Bright Theme</button>
                        <button onClick={() => handleThemeChange("light", false)} className={`p-2 rounded-lg text-xs font-bold border ${appTheme === 'light' ? 'border-slate-500 bg-slate-50 dark:bg-slate-100 text-slate-900' : 'border-slate-200 dark:border-slate-700 bg-slate-100 text-slate-800'}`}>Standard Light</button>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm">
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Accessibility Features</span>
                        <span className="text-[10px] text-slate-400">High contrast & dyslexic fonts</span>
                      </div>
                      <button 
                        className="w-11 h-6 rounded-full p-0.5 transition bg-slate-300 dark:bg-slate-700"
                        onClick={() => triggerAlert("Settings", "Accessibility options activated.", "success")}
                      >
                        <div className="w-5 h-5 bg-white rounded-full shadow transition-transform" />
                      </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm relative overflow-hidden">
                      <div className="absolute right-0 top-0 bottom-0 pr-4 flex items-center">
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Account Privacy</span>
                        <span className="text-[10px] text-slate-400">Manage data sharing preferences</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 p-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <p className="line-height-relaxed font-mono">React ThemeProvider Context triggers deep repaint stylesheet states instantaneously across all screens.</p>
                    </div>
                  </motion.div>
                </>
  );
};
