import React from 'react';
import { motion } from 'motion/react';
import { 
  User, Mail, Lock, Moon, Sun, Smartphone, Download, Check, Sparkles, BookOpen, AlertCircle, Heart, Share2, Compass, Bell, Settings as SettingsIcon, LogOut, Code, FileText, CheckCircle2, ChevronRight, RefreshCw, Layers
} from "lucide-react";
import { MOCK_MEDITATIONS } from "./data";

export const SettingsThemeScreen = (props: any) => {
  const {
    setActiveScreen, currentUser, handleLogout,
    isDarkMode, setIsDarkMode, triggerAlert,
    favorites, setActiveDetailsId,
    isNotificationEnabled, setIsNotificationEnabled, handleTestNotificationTrigger
  } = props;
  
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
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`w-11 h-6 rounded-full p-0.5 transition ${isDarkMode ? "bg-blue-600" : "bg-slate-300"}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${isDarkMode ? "translate-x-5" : ""}`} />
                      </button>
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
