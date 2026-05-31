import React from 'react';
import { motion } from 'motion/react';
import { 
  User, Mail, Lock, Moon, Sun, Smartphone, Download, Check, Sparkles, BookOpen, AlertCircle, Heart, Share2, Compass, Bell, Settings as SettingsIcon, LogOut, Code, FileText, CheckCircle2, ChevronRight, RefreshCw, Layers
} from "lucide-react";
import { MOCK_MEDITATIONS } from "./data";

export const SettingsFavouritesScreen = (props: any) => {
  const {
    setActiveScreen, currentUser, handleLogout,
    isDarkMode, setIsDarkMode, triggerAlert,
    favorites, setActiveDetailsId,
    isNotificationEnabled, setIsNotificationEnabled, handleTestNotificationTrigger
  } = props;
  
  return (
    <>
      <motion.div 
                    key="settings-favourites"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 mt-2"
                  >
                    <div className="flex justify-between items-center">
                      <button onClick={() => setActiveScreen("settings-menu")} className="text-xs text-blue-600 font-bold">
                        ← Menu
                      </button>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Bookmarking persist</h4>
                    </div>

                    <h3 className="text-center text-sm font-bold text-blue-600">My Favourite Exercises</h3>

                    <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto w-full">
                      {favorites.length === 0 ? (
                        <div className="text-center py-10 text-slate-405 text-[11px] font-mono text-slate-400 text-center w-full">
                          No favorite items found in AsyncStorage mockup. Click heart counters in sessions!
                        </div>
                      ) : (
                        favorites.map(id => {
                          const med = MOCK_MEDITATIONS.find(m => m.id === id);
                          if (!med) return null;
                          return (
                            <div 
                              key={med.id}
                              onClick={() => {
                                setActiveDetailsId(med.id);
                                setActiveScreen("details");
                              }}
                              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2.5 rounded-xl flex items-center gap-3 cursor-pointer hover:border-blue-500/50 transition shrink-0"
                            >
                              <img src={med.image} alt={med.title} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                              <div className="flex-1 min-w-0">
                                <h5 className="font-bold text-xs truncate text-slate-800 dark:text-white">{med.title}</h5>
                                <p className="text-[10px] text-slate-400">{med.target} • {med.duration}</p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-400" />
                            </div>
                          );
                        })
                      )}
                    </div>
                  </motion.div>
                </>
  );
};
