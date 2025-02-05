import React, { useState } from 'react';

const stages = [
  { name: 'Empathize', icon: '💛', date: new Date('2025-02-01'), color: 'bg-green-500' },
  { name: 'Research', icon: '🔍', date: new Date('2025-02-10'), color: 'bg-orange-500' },
  { name: 'Wireframes', icon: '📄', date: new Date('2025-02-20'), color: 'bg-purple-500' },
  { name: 'Design', icon: '📐', date: new Date('2025-03-01'), color: 'bg-pink-500' },
  { name: 'Implement', icon: '🛠️', date: new Date('2025-03-10'), color: 'bg-blue-500' },
  { name: 'Evaluate', icon: '📊', date: new Date('2025-03-20'), color: 'bg-yellow-500' }
];

const today = new Date();

const ProgressBar = () => {
  const [hoveredStageIndex, setHoveredStageIndex] = useState(null);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full p-6 bg-gradient-to-r from-blue-900 to-blue-600 rounded-lg shadow-lg">
      {stages.map((stage, index) => {
        const isCompleted = today >= stage.date;
        const nextStageDate = stages[index + 1]?.date;
        const daysBetween = nextStageDate ? (nextStageDate - stage.date) / (1000 * 60 * 60 * 24) : 0;
        const daysPassed = nextStageDate ? (today - stage.date) / (1000 * 60 * 60 * 24) : 0;
        const progressPercentage = nextStageDate ? Math.min(100, (daysPassed / daysBetween) * 100) : 100;
        const isNext = !isCompleted && today < nextStageDate && today >= stage.date;

        return (
          <React.Fragment key={index}>
            {/* Circular Stepper */}
            <div
              className="flex flex-col items-center relative group"
              onMouseEnter={() => setHoveredStageIndex(index)}
              onMouseLeave={() => setHoveredStageIndex(null)}
            >
              <div
                className={`w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-xl transition-transform duration-300 ${isCompleted ? stage.color : 'bg-gray-300'} ${isNext ? 'animate-spin-slow' : ''}`}
              >
                <span className="text-white text-2xl">{stage.icon}</span>
              </div>
              <p className="text-sm mt-2 text-center text-white font-semibold">{stage.name}</p>
              {hoveredStageIndex === index && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg animate-fade-in">
                  {stage.date.toLocaleDateString()}
                </div>
              )}
            </div>

            {/* Animated Connecting Line */}
            {index < stages.length - 1 && (
              <div className="relative flex-grow flex items-center justify-center h-1 bg-gray-400 mx-2 overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full transition-all duration-500 ${isCompleted ? 'bg-green-500' : 'bg-blue-500'}`}
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;
