import React from 'react';
import { motion } from 'motion/react';
import { 
  User, Mail, Lock, Moon, Sun, Smartphone, Download, Check, Sparkles, BookOpen, AlertCircle, Heart, Share2, Compass, Bell, Settings as SettingsIcon, LogOut, Code, FileText, CheckCircle2, ChevronRight, RefreshCw, Layers
} from "lucide-react";
import { MOCK_MEDITATIONS } from "./data";

export const SettingsRemindersScreen = (props: any) => {
  const {
    setActiveScreen, currentUser, handleLogout,
    isDarkMode, setIsDarkMode, triggerAlert,
    favorites, setActiveDetailsId,
    isNotificationEnabled, setIsNotificationEnabled, handleTestNotificationTrigger
  } = props;
  
  return (
    <>
      <motion.div 
                    key="settings-reminders"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 mt-2"
                  >
                    <div className="flex justify-between items-center">
                      <button onClick={() => setActiveScreen("settings-menu")} className="text-xs text-blue-600 font-bold">
                        ← Menu
                      </button>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Reminders setup</h4>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm">
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Daily Meditation alerts</span>
                        <span className="text-[10px] text-slate-400">Push status toggle</span>
                      </div>
                      <button 
                        onClick={() => setIsNotificationEnabled(!isNotificationEnabled)}
                        className={`w-11 h-6 rounded-full p-0.5 transition ${isNotificationEnabled ? "bg-blue-600" : "bg-slate-300"}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${isNotificationEnabled ? "translate-x-5" : ""}`} />
                      </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm">
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Weekly Email Summaries</span>
                        <span className="text-[10px] text-slate-400">Progress and stats via email</span>
                      </div>
                      <button className="w-11 h-6 rounded-full p-0.5 transition bg-blue-600">
                        <div className="w-5 h-5 bg-white rounded-full shadow transition-transform translate-x-5" />
                      </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center shadow-sm">
                      <div>
                        <span className="font-bold text-xs block text-slate-900 dark:text-white">Community Highlights</span>
                        <span className="text-[10px] text-slate-400">Top shared sessions from users</span>
                      </div>
                      <button className="w-11 h-6 rounded-full p-0.5 transition bg-slate-300 dark:bg-slate-700">
                        <div className="w-5 h-5 bg-white rounded-full shadow transition-transform" />
                      </button>
                    </div>

                    <p className="text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-950 p-2.5 rounded border border-blue-100/10 dark:border-slate-800">
                      Configure local clocks to distribute breathing push updates. Tap button below to test immediate push!
                    </p>

                    <button 
                      onClick={handleTestNotificationTrigger}
                      className="w-full py-2 bg-blue-600 font-bold text-white text-xs hover:bg-blue-700 rounded-lg shadow transition"
                    >
                      Confirm and Trigger Test Notify
                    </button>
                  </motion.div>
                </>
  );
};
