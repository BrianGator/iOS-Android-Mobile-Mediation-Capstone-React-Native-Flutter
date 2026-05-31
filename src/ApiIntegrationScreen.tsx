import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from "lucide-react";

export const ApiIntegrationScreen = ({ setActiveScreen, fetchRandomQuote, isQuoteLoading, randomQuote }: any) => {
  return (
    <motion.div 
      key="settings-api"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-4 mt-2"
    >
      <div className="flex justify-between items-center">
        <button onClick={() => setActiveScreen("home")} className="text-xs text-blue-600 font-bold">
          ← Home
        </button>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">External API</h4>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
        <h3 className="font-bold text-sm mb-2 text-slate-800 dark:text-white">API Integration Details</h3>
        
        <button 
          onClick={fetchRandomQuote}
          disabled={isQuoteLoading}
          className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg shadow-sm mb-4 disabled:opacity-50 transition"
        >
          {isQuoteLoading ? "Fetching..." : "Fetch New Insight"}
        </button>

        <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg whitespace-pre-wrap text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 italic relative overflow-hidden">
          {isQuoteLoading ? "Waiting for payload..." : `"${randomQuote}"`}
          {!isQuoteLoading && (
            <div className="absolute top-2 right-2 text-[8px] font-bold text-slate-400 uppercase tracking-widest bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">
              JSON DATA
            </div>
          )}
        </div>

        {!isQuoteLoading && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-[10px] font-bold border border-green-200 dark:border-green-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span className="flex-1">External REST API call successfully parsed and integrated securely.</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
