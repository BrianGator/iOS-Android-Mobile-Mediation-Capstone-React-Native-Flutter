import React from 'react';
import { motion } from 'motion/react';
import { Database, FileJson, FileText, HardDrive, FolderOpen } from 'lucide-react';

export const LocalStorageScreen = ({ setActiveScreen, localData }: any) => {
  const localFiles = [
    { name: "userDetails.json", size: "2.4 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/files/", icon: <FileJson className="w-5 h-5 text-yellow-500" /> },
    { name: "favorites.db", size: "1.1 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/databases/", icon: <Database className="w-5 h-5 text-sky-500" /> },
    { name: "session_cache.tmp", size: "4.8 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/cache/", icon: <FileText className="w-5 h-5 text-slate-400" /> },
  ];
  
  return (
    <motion.div 
      key="storage-local"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-4 mt-2 mb-16"
    >
      <div className="flex bg-blue-600 text-white p-4 -mx-5 -mt-6 rounded-t-2xl items-center gap-3">
        <button onClick={() => setActiveScreen("home")} className="text-white hover:opacity-80 transition font-bold text-xl leading-none">
          ←
        </button>
        <h4 className="text-lg font-medium flex items-center gap-2">
          <HardDrive className="w-5 h-5" />
          Local Storage
        </h4>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
        <h3 className="font-bold text-sm mb-4 text-slate-800 dark:text-white flex items-center gap-2">
          <HardDrive className="w-4 h-4 text-emerald-500" />
          Storage Metrics
        </h3>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-3 rounded-lg text-center">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Available</span>
            <span className="block text-lg font-black text-emerald-600 dark:text-emerald-400">128.5 <span className="text-[10px] font-normal">GB</span></span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-3 rounded-lg text-center">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">App Data</span>
            <span className="block text-lg font-black text-blue-600 dark:text-blue-400">8.3 <span className="text-[10px] font-normal">KB</span></span>
          </div>
        </div>

        <h3 className="font-bold text-sm mb-3 text-slate-800 dark:text-white flex items-center gap-2">
          <FolderOpen className="w-4 h-4 text-amber-500" />
          File Explorer (Local)
        </h3>

        <div className="flex flex-col gap-2">
          {localFiles.map((f, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition cursor-pointer group">
              <div className="mt-0.5 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{f.name}</span>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded shrink-0">{f.size}</span>
                </div>
                <p className="text-[9px] text-slate-500 truncate" title={f.location}>{f.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
