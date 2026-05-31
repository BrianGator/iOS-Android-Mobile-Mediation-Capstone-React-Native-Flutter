import React from 'react';
import { motion } from 'motion/react';

export const AppStorageScreen = ({ setActiveScreen, appState, localData }: any) => {
  const frontEndFiles = [
    { name: "bundle.js", size: "450 KB", location: "/assets/js/bundle.js" },
    { name: "styles.css", size: "120 KB", location: "/assets/css/styles.css" },
    { name: "index.html", size: "5 KB", location: "/assets/index.html" },
    { name: "app.tsx", size: "85 KB", location: "/src/App.tsx" },
  ];
  const localFiles = [
    { name: "userDetails.json", size: "2.4 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/files/" },
    { name: "favorites.db", size: "1.1 KB", location: "/storage/emulated/0/Android/data/com.mindfulspace/databases/" },
  ];
  
  return (
    <motion.div 
      key="storage-app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-4 mt-2"
    >
      <div className="flex justify-between items-center">
        <button onClick={() => setActiveScreen("home")} className="text-xs text-blue-600 font-bold">
          ← Home
        </button>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">App Storage</h4>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
        <h3 className="font-bold text-sm mb-2 text-slate-800 dark:text-white">Full Application Storage</h3>
        
        <div className="bg-slate-900 text-sky-300 font-mono text-[10px] p-4 rounded-lg shadow-inner h-[400px] overflow-y-auto w-full overflow-x-auto">
          <p className="font-bold text-white mb-2 border-b border-slate-700 pb-1">APP FRONT END FILES</p>
          <p className="mb-2 text-slate-400">Total Frontend Size: 660 KB</p>
          {frontEndFiles.map((f, i) => (
             <div key={'f'+i} className="mb-2">
              <p>File: <span className="text-yellow-300">{f.name}</span></p>
              <p>Size: {f.size}</p>
              <p>Path: {f.location}</p>
            </div>
          ))}

          <br />
          <p className="font-bold text-white mb-2 border-b border-slate-700 pb-1">LOCAL DEVICE STORAGE</p>
          <p className="mb-2 text-slate-400">Total Available Storage: 128.5 GB</p>
          <p className="mb-2 text-slate-400">Total Local Data Size: 3.5 KB</p>
          {localFiles.map((f, i) => (
            <div key={'l'+i} className="mb-2">
              <p>File: <span className="text-green-300">{f.name}</span></p>
              <p>Size: {f.size}</p>
              <p>Path: {f.location}</p>
            </div>
          ))}

          <br />
          <p className="font-bold text-white mb-2 border-b border-slate-700 pb-1">CURRENT MEMORY STATE</p>
          <pre>{JSON.stringify({ FrontendState: appState, LocalStorage: localData }, null, 2)}</pre>
        </div>
      </div>
    </motion.div>
  );
};
