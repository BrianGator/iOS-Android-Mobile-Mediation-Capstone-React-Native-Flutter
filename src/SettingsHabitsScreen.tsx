import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trash2 } from "lucide-react";

export const SettingsHabitsScreen = (props: any) => {
  const { setActiveScreen, habits, setHabits, triggerAlert } = props;
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitColor, setNewHabitColor] = useState("orange");

  const colors = ["orange", "pink", "emerald", "blue", "yellow", "lime", "indigo", "purple", "rose"];

  const handleAdd = () => {
    if (!newHabitName.trim()) return;
    setHabits([...habits, { id: Date.now(), name: newHabitName, color: newHabitColor, completed: false, completedAt: null }]);
    setNewHabitName("");
    triggerAlert("Habit Added", `${newHabitName} was added to your tracking list.`, "success");
  };

  const handleDelete = (id: number) => {
    setHabits(habits.filter((h: any) => h.id !== id));
    triggerAlert("Habit Removed", "The habit was removed.", "info");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-4 mt-2 h-full"
    >
      <div className="flex bg-blue-600 text-white p-4 -mt-2 -mx-2 rounded-t-xl items-center gap-3">
        <button onClick={() => setActiveScreen("home")} className="text-white hover:opacity-80 transition font-bold">
          ←
        </button>
        <h4 className="text-lg font-medium">Configure Habits</h4>
      </div>

      <div className="mt-2">
        <input 
          type="text" 
          value={newHabitName}
          onChange={(e) => setNewHabitName(e.target.value)}
          placeholder="Habit Name"
          className="w-full text-base p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-slate-800 dark:text-white">Select Color:</label>
        <select 
          value={newHabitColor}
          onChange={(e) => setNewHabitColor(e.target.value)}
          className="w-full text-base p-3 font-semibold rounded-md border border-slate-300 dark:border-slate-700 appearance-none text-white capitalize"
          style={{ 
            backgroundColor: newHabitColor === 'orange' ? '#f97316' : 
                      newHabitColor === 'pink' ? '#ec4899' :
                      newHabitColor === 'emerald' ? '#10b981' :
                      newHabitColor === 'blue' ? '#3b82f6' :
                      newHabitColor === 'yellow' ? '#eab308' :
                      newHabitColor === 'lime' ? '#84cc16' :
                      newHabitColor === 'indigo' ? '#6366f1' :
                      newHabitColor === 'purple' ? '#a855f7' :
                      newHabitColor === 'rose' ? '#f43f5e' : '#3b82f6'
          }}
        >
          {colors.map(c => (
            <option key={c} value={c} className="bg-white text-slate-800 capitalize dark:bg-slate-900 dark:text-white">
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium shadow-sm hover:opacity-90">
          Add Habit
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-4 overflow-y-auto">
        {habits.map((habit: any) => {
          const colorClass = `bg-${habit.color}-500`;
          const hex = habit.color === 'orange' ? '#f97316' : 
                      habit.color === 'pink' ? '#ec4899' :
                      habit.color === 'emerald' ? '#10b981' :
                      habit.color === 'blue' ? '#3b82f6' :
                      habit.color === 'yellow' ? '#eab308' :
                      habit.color === 'lime' ? '#84cc16' :
                      habit.color === 'indigo' ? '#6366f1' :
                      habit.color === 'purple' ? '#a855f7' :
                      habit.color === 'rose' ? '#f43f5e' : '#3b82f6';
                      
          return (
          <div key={habit.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full" style={{ backgroundColor: hex }}></div>
              <span className="text-slate-800 dark:text-slate-100 text-base">{habit.name}</span>
            </div>
            <button onClick={() => handleDelete(habit.id)} className="text-red-500 hover:text-red-600 p-2">
              <Trash2 className="w-5 h-5 fill-red-500" />
            </button>
          </div>
        )})}
      </div>
    </motion.div>
  );
};
