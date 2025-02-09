import React from 'react';
import '../Intern/progressBar.css';

const stages = [
  { name: 'Reg Start', icon: '📝', date: new Date('2025-02-15'), color: 'bg-[#14ab61]' },
  { name: 'Reg End', icon: '🔒', date: new Date('2025-02-25'), color: 'bg-red-500' },
  { name: 'Week 1', icon: '📅', date: new Date('2025-03-03'), color: 'bg-blue-500' },
  { name: 'Week 2', icon: '📚', date: new Date('2025-03-10'), color: 'bg-[#1a11a4]' },
  { name: 'Week 3', icon: '📊', date: new Date('2025-03-17'), color: 'bg-purple-500' },
  { name: 'Week 4', icon: '💡', date: new Date('2025-03-24'), color: 'bg-pink-500' },
  { name: 'Week 5', icon: '🎯', date: new Date('2025-03-31'), color: 'bg-orange-500' },
  { name: 'Week 6', icon: '🚀', date: new Date('2025-04-07'), color: 'bg-teal-500' },
  { name: 'Credential', icon: '🎓', date: new Date('2025-04-14'), color: 'bg-indigo-500' }
];

const today = new Date();

const ProgressBar = () => {
  return (
    <>
      {/* Desktop & Tablet View (md+) */}
      <div className="hidden md:flex items-center justify-between w-full px-8 py-6 bg-gradient-to-r from-blue-900 to-blue-500 rounded-lg shadow-lg">
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
                  ${isCompleted ? `${stage.color} border-cyan-300 ` : 'border-red-300'}`}>
                  <span className="text-white text-2xl">{stage.icon}</span>
                </div>

                {/* Stage Name Below */}
                <p className="text-sm mt-2 text-center text-white font-semibold">{stage.name}</p>
              </div>

              {/* Connecting Line */}
              {index < stages.length - 1 && (
                <div className="flex-1 h-1 relative">
                  <div className="absolute left-0 top-0 h-full w-full bg-zinc-50"></div>
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

      {/* Mobile View (sm & below) */}
      {/* <div className="flex md:hidden flex-col items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-blue-900 to-blue-500 rounded-lg shadow-lg"> */}
      <div className="flex md:hidden flex-col items-center justify-center w-full px-6 py-6 bg-gradient-to-r from-blue-900 to-blue-500 rounded-lg shadow-lg">
      {stages.map((stage, index) => {
        const isCompleted = today >= stage.date;
        const nextStageDate = stages[index + 1]?.date;
        const daysBetween = nextStageDate ? (nextStageDate - stage.date) / (1000 * 60 * 60 * 24) : 0;
        const daysPassed = nextStageDate ? (today - stage.date) / (1000 * 60 * 60 * 24) : 0;
        const progressPercentage = nextStageDate ? Math.min(100, (daysPassed / daysBetween) * 100) : 100;

        return (
          <React.Fragment key={index}>
            {/* Stage Block */}
            <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-1/9 mb-6 md:mb-0">
              {/* Date Above */}
              <p className="text-xs sm:text-sm md:text-base text-white font-semibold mb-2 md:mb-0">
                {stage.date.toLocaleDateString()}
              </p>

              {/* Circular Step */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center shadow-lg transition-transform duration-300
                ${isCompleted ? `${stage.color} border-transparent scale-110` : 'border-cyan-300'}`}>
                <span className="text-white text-lg sm:text-xl md:text-2xl">{stage.icon}</span>
              </div>

              {/* Stage Name Below */}
              <p className="text-xs sm:text-sm md:text-base mt-2 text-white font-semibold">{stage.name}</p>
            </div>

            {/* Connecting Line - Adjust for mobile */}
            {index < stages.length - 1 && (
              <div
                className={`flex ${index === 0 ? 'md:flex-grow' : 'flex-grow'} h-10 md:h-1 w-1 md:w-full relative`}
              >
                {/* Line Background */}
                <div className="absolute left-0 top-0 h-full w-full bg-white"></div>
                {/* Progress Indicator */}
                <div
                  className="absolute left-0 top-0 transition-all duration-500"
                  style={{
                    height: '100%',
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
    </>
  );
};

export default ProgressBar;
