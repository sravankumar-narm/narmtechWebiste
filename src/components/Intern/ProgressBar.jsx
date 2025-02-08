import React from 'react';
import '../Intern/progressBar.css';

const stages = [
  { name: 'Registration Start', icon: '📝', date: new Date('2025-01-01'), color: 'bg-[#14ab61]' },
  { name: 'Registration End', icon: '🔒', date: new Date('2025-01-15'), color: 'bg-red-500' },
  { name: 'Week 1', icon: '📅', date: new Date('2025-01-20'), color: 'bg-blue-500' },
  { name: 'Week 2', icon: '📚', date: new Date('2025-01-27'), color: 'bg-[#1a11a4]' },
  { name: 'Week 3', icon: '📊', date: new Date('2025-02-03'), color: 'bg-purple-500' },
  { name: 'Week 4', icon: '💡', date: new Date('2025-02-10'), color: 'bg-pink-500' },
  { name: 'Week 5', icon: '🎯', date: new Date('2025-02-17'), color: 'bg-orange-500' },
  { name: 'Week 6', icon: '🚀', date: new Date('2025-02-24'), color: 'bg-teal-500' },
  { name: 'Credential', icon: '🎓', date: new Date('2025-03-01'), color: 'bg-indigo-500' }
];

const today = new Date();

const ProgressBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-8 py-6 bg-gradient-to-r from-blue-900 to-blue-500 rounded-lg shadow-lg">
      {stages.map((stage, index) => {
        const isCompleted = today >= stage.date;
        const nextStageDate = stages[index + 1]?.date;
        const daysBetween = nextStageDate ? (nextStageDate - stage.date) / (1000 * 60 * 60 * 24) : 0;
        const daysPassed = nextStageDate ? (today - stage.date) / (1000 * 60 * 60 * 24) : 0;
        const progressPercentage = nextStageDate ? Math.min(100, (daysPassed / daysBetween) * 100) : 100;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center flex-1">
              {/* Show Date Above */}
              <p className="text-xs text-white font-semibold mb-2">{stage.date.toLocaleDateString()}</p>

              {/* Circular Step */}
              <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-lg 
                ${isCompleted ? `${stage.color} border-transparent` : 'border-cyan-300'}`}>
                <span className="text-white text-2xl">{stage.icon}</span>
              </div>

              {/* Stage Name Below */}
              <p className="text-sm mt-2 text-center text-white font-semibold">{stage.name}</p>
            </div>

            {/* Connecting Line */}
            {index < stages.length - 1 && (
              <div className="flex-1 h-1 relative">
                <div className="absolute left-0 top-0 h-full w-full bg-gray-400"></div>
                <div
                  className="absolute left-0 top-0 h-full transition-all duration-500"
                  style={{
                    width: `${progressPercentage}%`,
                    backgroundColor: isCompleted ? 'limegreen' : 'lightblue'
                  }}
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
