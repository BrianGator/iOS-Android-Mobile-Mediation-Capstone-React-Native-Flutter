import React from 'react';
import { motion } from 'motion/react';

export const LocalStorageScreen = ({ setActiveScreen, localData }: any) => {
  const localFiles = [
    { name: "userDetails.json", size: "2.4 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/files/" },
    { name: "favorites.db", size: "1.1 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/databases/" },
    { name: "session_cache.tmp", size: "4.8 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/cache/" },
  ];
  
  return (
    <motion.div 
      key="storage-local"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-4 mt-2"
    >
      <div className="flex justify-between items-center">
        <button onClick={() => setActiveScreen("home")} className="text-xs text-blue-600 font-bold">
          ← Home
        </button>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Local Storage</h4>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
        <h3 className="font-bold text-sm mb-2 text-slate-800 dark:text-white">Device Storage Analysis</h3>
        
        <div className="bg-slate-900 text-green-400 font-mono text-[10px] p-4 rounded-lg overflow-x-auto shadow-inner mb-4 h-[400px] overflow-y-auto">
          <p className="font-bold text-white mb-2 border-b border-slate-700 pb-1">STORAGE METRICS</p>
          <p>Total Available Storage: 128.5 GB</p>
          <p>Local App Data Size: 8.3 KB</p>
          <br/>
          <p className="font-bold text-white mb-2 border-b border-slate-700 pb-1">LOCAL FILES DIRECTORY</p>
          {localFiles.map((f, i) => (
            <div key={i} className="mb-2">
              <p>File: <span className="text-sky-300">{f.name}</span></p>
              <p>Size: {f.size}</p>
              <p>Path: {f.location}</p>
            </div>
          ))}
          <br />
          <p className="font-bold text-white mb-2 border-b border-slate-700 pb-1">RAW ASYNC STORAGE DUMP</p>
          <pre>{JSON.stringify(localData, null, 2)}</pre>
        </div>
      </div>
    </motion.div>
  );
};
