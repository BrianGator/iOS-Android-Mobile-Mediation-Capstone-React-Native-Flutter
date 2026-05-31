import React from 'react';
import { motion } from 'motion/react';
import { Database, FileJson, FileCode2, FileType2, HardDrive, FolderOpen, Box, MonitorSmartphone } from 'lucide-react';

export const AppStorageScreen = ({ setActiveScreen, appState, localData }: any) => {
  const frontEndFiles = [
    { name: "bundle.js", size: "450 KB", location: "/assets/js/bundle.js", icon: <FileCode2 className="w-5 h-5 text-yellow-400" /> },
    { name: "styles.css", size: "120 KB", location: "/assets/css/styles.css", icon: <FileType2 className="w-5 h-5 text-sky-400" /> },
    { name: "index.html", size: "5 KB", location: "/assets/index.html", icon: <FileCode2 className="w-5 h-5 text-orange-500" /> },
    { name: "App.tsx", size: "85 KB", location: "/src/App.tsx", icon: <FileCode2 className="w-5 h-5 text-blue-500" /> },
  ];

  const localFiles = [
    { name: "userDetails.json", size: "2.4 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/files/", icon: <FileJson className="w-5 h-5 text-yellow-500" /> },
    { name: "favorites.db", size: "1.1 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/databases/", icon: <Database className="w-5 h-5 text-sky-500" /> },
  ];
  
  return (
    <motion.div 
      key="storage-app"
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
          <MonitorSmartphone className="w-5 h-5" />
          App Storage
        </h4>
      </div>

      {/* Storage Metrics */}
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
        <h3 className="font-bold text-sm mb-4 text-slate-800 dark:text-white flex items-center gap-2">
          <HardDrive className="w-4 h-4 text-emerald-500" />
          Storage Metrics
        </h3>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-3 rounded-lg text-center">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Frontend App</span>
            <span className="block text-lg font-black text-purple-600 dark:text-purple-400">660 <span className="text-[10px] font-normal">KB</span></span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-3 rounded-lg text-center">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Local Data</span>
            <span className="block text-lg font-black text-blue-600 dark:text-blue-400">3.5 <span className="text-[10px] font-normal">KB</span></span>
          </div>
        </div>
      </div>

      {/* File Explorer */}
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
        <h3 className="font-bold text-sm mb-3 text-slate-800 dark:text-white flex items-center gap-2">
          <Box className="w-4 h-4 text-purple-500" />
          App Frontend Files
        </h3>
        <div className="flex flex-col gap-2 mb-6">
          {frontEndFiles.map((f, i) => (
            <div key={'f'+i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-purple-500/30 transition cursor-pointer group">
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

        <h3 className="font-bold text-sm mb-3 text-slate-800 dark:text-white flex items-center gap-2">
          <FolderOpen className="w-4 h-4 text-blue-500" />
          Local Device Storage
        </h3>
        <div className="flex flex-col gap-2">
          {localFiles.map((f, i) => (
            <div key={'l'+i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition cursor-pointer group">
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
