import React from 'react';
import { motion } from 'motion/react';
import { User, Mail, Lock } from 'lucide-react';

export const SignupScreen = ({ 
  signupUser, 
  setSignupUser, 
  signupEmail, 
  setSignupEmail, 
  signupPassword, 
  setSignupPassword, 
  handleRegister, 
  setActiveScreen 
}: any) => {
  return (
    <motion.div 
      key="signup"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col gap-4 mt-2"
    >
      <div className="text-center py-4">
        <div className="w-14 h-14 bg-blue-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600">
          <User className="w-7 h-7" />
        </div>
        <h4 className="font-bold text-base">New Learner Register</h4>
        <p className="text-[11px] text-slate-500">Option B Mobile Capstone Signup</p>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Username</label>
          <div className="relative">
            <input 
              type="text" 
              value={signupUser} 
              onChange={(e) => setSignupUser(e.target.value)} 
              placeholder="Enter Username" 
              className="w-full text-xs p-2.5 pl-8 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
            />
            <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
          </div>
        </div>

        <div>
          <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Email Address</label>
          <div className="relative">
            <input 
              type="email" 
              value={signupEmail} 
              onChange={(e) => setSignupEmail(e.target.value)} 
              placeholder="Enter Email" 
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
              value={signupPassword} 
              onChange={(e) => setSignupPassword(e.target.value)} 
              placeholder="Enter Password" 
              className="w-full text-xs p-2.5 pl-8 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
            />
            <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3.5" />
          </div>
        </div>

        <button 
          onClick={handleRegister}
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-xs text-white rounded-lg transition mt-2 shadow-md outline-none"
        >
          Sign Up
        </button>

        <div className="text-center text-xs mt-2 text-slate-500">
          Already have an account?{" "}
          <button onClick={() => setActiveScreen("login")} className="text-blue-500 font-bold hover:underline">
            Login
          </button>
        </div>
      </div>
    </motion.div>
  );
};
