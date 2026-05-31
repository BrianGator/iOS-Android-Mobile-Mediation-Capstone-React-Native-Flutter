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
    isNotificationEnabled, setIsNotificationEnabled, handleTestNotificationTrigger,
    habitNotifications, setHabitNotifications
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

                    <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-3 shadow-sm">
                      <span className="font-bold text-xs block text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
                        Custom Notifications
                      </span>
                      {habitNotifications?.map((hn: any) => {
                        const colorMap: Record<string, string> = {
                          "orange": "text-orange-600 dark:text-orange-400",
                          "pink": "text-pink-600 dark:text-pink-400",
                          "emerald": "text-emerald-600 dark:text-emerald-400",
                          "blue": "text-blue-600 dark:text-blue-400",
                          "yellow": "text-yellow-600 dark:text-yellow-400",
                          "lime": "text-lime-600 dark:text-lime-400",
                          "indigo": "text-indigo-600 dark:text-indigo-400",
                          "purple": "text-purple-600 dark:text-purple-400",
                          "rose": "text-rose-600 dark:text-rose-400"
                        };
                        const activeColor = colorMap[hn.color] || "text-blue-600 dark:text-blue-400";
                        return (
                        <div key={hn.id} className="flex flex-col gap-2 p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                          <div className="flex justify-between items-center">
                            <span className={`text-xs font-bold ${activeColor}`}>{hn.name}</span>
                            <button
                              onClick={() => {
                                const newTime = prompt(`Add a new time (HH:MM) for ${hn.name}:`, "08:00");
                                if (newTime) {
                                  const updated = habitNotifications.map((n: any) => 
                                    n.id === hn.id ? { ...n, times: [...n.times, newTime].sort() } : n
                                  );
                                  setHabitNotifications(updated);
                                  triggerAlert("Reminder Added", `${hn.name} will notify at ${newTime}.`, "success");
                                }
                              }}
                              className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded font-bold"
                            >
                              + Add Time
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {hn.times.length === 0 && <span className="text-[10px] text-slate-400">None set</span>}
                            {hn.times.map((t: string) => (
                              <span key={t} className="flex items-center gap-1 text-[10px] bg-white dark:bg-slate-900 px-1.5 py-0.5 border border-slate-200 dark:border-slate-700 rounded shadow-sm">
                                {t}
                                <button 
                                  onClick={() => {
                                    const updated = habitNotifications.map((n: any) => 
                                      n.id === hn.id ? { ...n, times: n.times.filter((time: string) => time !== t) } : n
                                    );
                                    setHabitNotifications(updated);
                                  }}
                                  className="opacity-50 hover:opacity-100 text-red-500 hover:text-red-600"
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                        </div>
                      )})}
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
