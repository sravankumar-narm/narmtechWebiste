import React from 'react';
import '../Intern/progressBar.css';
import timeGlass from "../../assets/brand/timeglass.png";

const stages = [
  {
    name: 'Registration  Start', icon: '✔️', date: new Date('2025-03-01'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-13px] mr-[-8px]",
      mainPadding: "mt-[15px] mr-[-6px]",
      nowarp: "",
    },
  },
  {
    name: 'End', icon: '✔️', date: new Date('2025-03-15'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-13px] mr-[-8px]",
      mainPadding: "",
      nowarp: "",
    },
  },
  {
    name: 'Scrutiny', icon: '✔️', date: new Date('2025-03-16'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-13px] mr-[-16px]",
      mainPadding: "",
      nowarp: "",
    },
  },
  {
    name: 'Broadcast', icon: '✔️', date: new Date('2025-03-17'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-17px] mr-[-8px]",
      mainPadding: "",
      nowarp: "",
    },
  },
  {
    name: 'Orientation', icon: '✔️', date: new Date('2025-03-23'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-17px] mr-[-8px]",
      mainPadding: "ml-[-20px] mr-[-15px]",
      nowarp: "",
    },
  },
  {
    name: 'Sprint 1', icon: '✔️', date: new Date('2025-03-24'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-13px] mr-[-8px]",
      mainPadding: "",
      nowarp: "whitespace-nowrap",
    },
  },
  {
    name: 'Sprint 2', icon: '✔️', date: new Date('2025-03-31'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-13px] mr-[-8px]",
      mainPadding: "",
      nowarp: "whitespace-nowrap",
    },
  },
  {
    name: 'Sprint 3', icon: '✔️', date: new Date('2025-04-07'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-13px] mr-[-8px]",
      mainPadding: "",
      nowarp: "whitespace-nowrap",
    },
  },
  {
    name: 'Sprint 4', icon: '✔️', date: new Date('2025-04-14'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-13px] mr-[-8px]",
      mainPadding: "",
      nowarp: "whitespace-nowrap",
    },
  },
  {
    name: 'Sprint 5', icon: '✔️', date: new Date('2025-04-21'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-13px] mr-[-8px]",
      mainPadding: "",
      nowarp: "whitespace-nowrap",
    },
  },
  // {
  //   name: 'Week 6', icon: '✔️', date: new Date('2025-04-07'), color: 'bg-[#ceffe7]', styles: {
  //     linePadding: "ml-[-13px] mr-[-18px]",
  //     mainPadding: "",
  //     nowarp: "whitespace-nowrap",
  //   },
  // },
  {
    name: 'Sprint 6', icon: '✔️', date: new Date('2025-04-28'), color: 'bg-[#ceffe7]', styles: {
      linePadding: "ml-[-13px] mr-[-18px]",
      mainPadding: "",
      nowarp: "",
    },
  }
];
// const stages = [
//   { name: 'Reg Start', icon: '📝', date: new Date('2025-01-01'), color: 'bg-[#ceffe7]' },
//   { name: 'Reg End', icon: '🔒', date: new Date('2025-01-05'), color: 'bg-[#ceffe7]' },
//   { name: 'Scrutiny', icon: '👀', date: new Date('2025-01-10'), color: 'bg-[#ceffe7]' },
//   { name: 'Squadcast', icon: '📣', date: new Date('2025-01-12'), color: 'bg-[#ceffe7]' },
//   { name: 'Week 1', icon: '📅', date: new Date('2025-01-15'), color: 'bg-[#ceffe7]' },
//   { name: 'Week 2', icon: '📚', date: new Date('2025-01-18'), color: 'bg-[#ceffe7]' },
//   { name: 'Week 3', icon: '📊', date: new Date('2025-01-20'), color: 'bg-[#ceffe7]' },
//   { name: 'Week 4', icon: '💡', date: new Date('2025-01-24'), color: 'bg-[#ceffe7]' },
//   { name: 'Week 5', icon: '🎯', date: new Date('2025-01-31'), color: 'bg-[#ceffe7]' },
//   { name: 'Week 6', icon: '🚀', date: new Date('2025-02-07'), color: 'bg-[#ceffe7]' },
//   { name: 'Credential', icon: '🎓', date: new Date('2025-02-10'), color: 'bg-[#ceffe7]' }
// ];

const today = new Date();
// Helper function to format date as dd/mm/yy
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
  return `${day}/${month}/${year}`;
};

const formatDateMonth = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
  return `${day}/${month}`;
};

const ProgressBar = () => {
  return (
    <>
      {/* Desktop & Tablet View (md+) */}
      <div className="hidden md:flex items-center justify-between w-full bg-[#d9d9ed] rounded-lg shadow-lg p-2 pt-1">
        {stages.map((stage, index) => {
          const endDate = new Date(stage.date);
          endDate.setHours(24, 0, 0, 0); // Set time to 12:00 AM of the next day
          const isCompleted = today > endDate;
          const nextStageDate = stages[index + 1]?.date;
          const daysBetween = nextStageDate ? (nextStageDate - stage.date) / (1000 * 60 * 60 * 24) : 0;
          const daysPassed = nextStageDate ? (today - stage.date) / (1000 * 60 * 60 * 24) : 0;
          const progressPercentage = nextStageDate ? Math.min(100, (daysPassed / daysBetween) * 100) : 100;

          const isCurrentIndex =
            (today <= endDate && (index === 0 || today >= new Date(stages[index - 1]?.date).setHours(24, 0, 0, 0)));

          const isLightblue = !isCompleted && isCurrentIndex;

          const isUpcoming = !isCompleted && !isCurrentIndex;

          // Determine which date format to use
          const formattedDate =
            index === 0 || index === stages.length - 1
              ? formatDate(stage.date) // Full date for first and last stages
              : formatDateMonth(stage.date); // Only day and month for other stages

          return (
            <React.Fragment key={index}>
              <div className={`flex flex-col items-center flex-1 ${stage.styles.mainPadding}`}>
                {/* Show Date Above */}
                <p className="text-xs text-sky-900 font-bold mb-2">{formattedDate}</p>
                {/* Circular Step */}
                <div
                  className={`w-9 h-9 rounded-full border-4 flex items-center justify-center shadow-lg z-10 
                  ${isCompleted ? `${stage.color} border-[#269908]` : 'bg-[#d9d9ed] border-[#f1af9c]'}`}
                >
                  {isCompleted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#269908]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20.285 6.707a1 1 0 0 0-1.414-1.414L9 15.164 5.13 11.293a1 1 0 1 0-1.415 1.415l4.95 4.95a1 1 0 0 0 1.415 0l10.205-10.205z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : isCurrentIndex ? (
                    <span className="rotate-animation">
                      <img src={timeGlass} className="w-5 h-5" alt="loading" />
                    </span>
                  ) : (
                    <span className="text-slate-600 text-sm"></span>
                  )}
                </div>
                {/* Stage Name Below */}
                <p className={`text-xs mt-2 text-center text-sky-900 font-bold ${stage.styles.nowarp}`}>
                  {stage.name}
                </p>
              </div>
              {/* Connecting Line */}
              {index < stages.length - 1 && (
                <div className={`flex-1 h-1 relative ${stage.styles.linePadding}`}>
                  <div className="absolute left-0 top-0 h-full w-full bg-[#3c53dc]"></div>
                  <div
                    className="absolute left-0 top-0 h-full transition-all duration-500"
                    style={{
                      width: `${progressPercentage}%`,
                      backgroundColor: isCompleted ? 'limegreen' : 'lightblue',
                    }}
                  ></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile View (sm & below) */}
      <div className="flex md:hidden flex-col items-center justify-center w-full px-6 py-6 bg-gradient-to-r bg-[#d9d9ed] rounded-lg shadow-lg">
        {stages.map((stage, index) => {
          const isCompleted = today > stage.date; // Changed from `>=` to `>` to keep "End" active on its date
          const nextStageDate = stages[index + 1]?.date;
          const daysBetween = nextStageDate ? (nextStageDate - stage.date) / (1000 * 60 * 60 * 24) : 0;
          const daysPassed = nextStageDate ? (today - stage.date) / (1000 * 60 * 60 * 24) : 0;
          const progressPercentage = nextStageDate ? Math.min(100, (daysPassed / daysBetween) * 100) : 100;

          // Adjust logic to ensure "End" remains active until today
          const isCurrentIndex =
            (today <= stage.date && (index === 0 || today >= stages[index - 1].date)) ||
            (stage.name === "End" && today <= stage.date); // Special condition for "End"

          // Determine which date format to use
          const formattedDate =
            index === 0 || index === stages.length - 1
              ? formatDate(stage.date) // Full date for first and last stages
              : formatDateMonth(stage.date); // Only day and month for other stages

          return (
            <React.Fragment key={index}>
              {/* Stage Block */}
              <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-1/9 mb-6 md:mb-0">
                {/* Date Above */}
                <p className="text-xs sm:text-sm md:text-base text-sky-900 font-semibold mb-2 md:mb-0">
                  {formattedDate}
                </p>
                {/* Circular Step */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center shadow-lg transition-transform duration-300
               ${isCompleted ? `${stage.color} border-[#269908] ` : 'border-[#ffecca]'}`}
                >
                  <span className="text-slate-600 text-lg sm:text-xl md:text-2xl">{stage.icon}</span>
                </div>
                {/* Stage Name Below */}
                <p className="text-xs sm:text-sm md:text-base mt-2 text-sky-900 font-semibold">{stage.name}</p>
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
                      backgroundColor: isCompleted ? 'limegreen' : 'lightblue',
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
