import React from 'react';
import { motion } from 'motion/react';
import { 
  User, Mail, Lock, Moon, Sun, Smartphone, Download, Check, Sparkles, BookOpen, AlertCircle, Heart, Share2, Compass, Bell, Settings as SettingsIcon, LogOut, Code, FileText, CheckCircle2, ChevronRight, RefreshCw, Layers
} from "lucide-react";
import { MOCK_MEDITATIONS } from "./data";

export const SettingsMenuScreen = (props: any) => {
  const {
    setActiveScreen, currentUser, handleLogout,
    isDarkMode, setIsDarkMode, triggerAlert,
    favorites, setActiveDetailsId,
    isNotificationEnabled, setIsNotificationEnabled, handleTestNotificationTrigger
  } = props;
  
  return (
    <>
      <motion.div 
                    key="settings-menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 mt-2"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <button onClick={() => setActiveScreen("home")} className="text-xs text-blue-600 font-bold">
                        ← Home
                      </button>
                      <h4 className="text-sm font-bold">Settings Options</h4>
                    </div>

                    <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
                       <h5 className="font-bold text-xs text-slate-400">Personalized Profile</h5>
                      <p className="text-base font-bold text-slate-800 dark:text-white">Hello {currentUser?.userName || "Brian McCarthy"}!</p>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">{currentUser?.email || "brian@mccarthy.com"}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => setActiveScreen("settings-theme")}
                        className="flex justify-between items-center bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Moon className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold">Theme Switching</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </button>

                      <button 
                        onClick={() => setActiveScreen("settings-favourites")}
                        className="flex justify-between items-center bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold">My Favourites</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </button>

                      <button 
                        onClick={() => setActiveScreen("settings-reminders")}
                        className="flex justify-between items-center bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Bell className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold">Daily Reminders</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>

                    <button 
                      onClick={handleLogout}
                      className="w-full mt-4 py-2 bg-rose-100 dark:bg-rose-950 hover:bg-rose-200 dark:hover:bg-rose-900 text-rose-600 dark:text-rose-350 text-xs font-bold flex justify-center items-center gap-2 rounded-lg transition"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout Account
                    </button>
                  </motion.div>
                </>
  );
};
