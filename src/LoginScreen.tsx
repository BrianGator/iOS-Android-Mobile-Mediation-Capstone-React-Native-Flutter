import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock } from 'lucide-react';

export const LoginScreen = ({
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  handleLogin,
  setActiveScreen
}: any) => {
  return (
    <motion.div 
      key="login"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col gap-4 mt-2"
    >
      <div className="text-center py-4">
        <div className="w-14 h-14 bg-blue-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600">
          <Lock className="w-7 h-7" />
        </div>
        <h4 className="font-bold text-base">Learner Login Portal</h4>
        <p className="text-[11px] text-slate-500">Sync with local user profiles</p>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Email Address</label>
          <div className="relative">
            <input 
              type="email" 
              value={loginEmail} 
              onChange={(e) => setLoginEmail(e.target.value)} 
              placeholder="username@mccarthy.com" 
              className="w-full text-xs p-2.5 pl-8 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
            />
            <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
          </div>
        </div>

        <div>
          <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Password</label>
          <div className="relative">
            <input 
              type="password" 
              value={loginPassword} 
              onChange={(e) => setLoginPassword(e.target.value)} 
              className="w-full text-xs p-2.5 pl-8 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
            />
            <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
          </div>
        </div>

        <button 
          onClick={handleLogin}
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-xs text-white rounded-lg transition mt-2 shadow-md outline-none"
        >
          Login
        </button>

        <button 
          onClick={() => setActiveScreen("signup")}
          className="w-full py-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-bold text-xs text-slate-700 dark:text-slate-300 rounded-lg transition mt-1 outline-none"
        >
          Sign Up
        </button>

        <div className="text-center text-xs mt-2 text-slate-500">
          Don't have an account?{" "}
          <button onClick={() => setActiveScreen("signup")} className="text-blue-500 font-bold hover:underline">
            Use Sign Up Link
          </button>
        </div>
      </div>
    </motion.div>
  );
};
