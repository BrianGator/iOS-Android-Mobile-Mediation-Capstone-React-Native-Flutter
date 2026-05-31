import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle } from 'lucide-react';

interface NotificationAlertProps {
  simulatedAlert: { title: string; desc: string; type: "success" | "error" | "info" } | null;
}

export const NotificationAlert = ({ simulatedAlert }: NotificationAlertProps) => {
  return (
    <AnimatePresence>
      {simulatedAlert && (
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="absolute bottom-16 inset-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800 text-white z-40 flex items-start gap-2 shadow-xl"
        >
          <AlertCircle className={`w-4 h-4 mt-0.5 shrink-0 ${simulatedAlert.type === "success" ? "text-emerald-400" : simulatedAlert.type === "error" ? "text-red-400" : "text-amber-400"}`} />
          <div>
            <h5 className="font-bold text-xs">{simulatedAlert.title}</h5>
            <p className="text-[10px] text-slate-300">{simulatedAlert.desc}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
