import React, { useEffect, useState } from 'react';

const steps = [
    { id: 1, label: 'Code Pushed', icon: '💻' },
    { id: 2, label: 'Build Completed', icon: '⚙️' },
    { id: 3, label: 'Deployed Successfully', icon: '🚀' }
];

const DeploymentTimeline = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setActiveStep(1), 500),
            setTimeout(() => setActiveStep(2), 1500),
            setTimeout(() => setActiveStep(3), 2500)
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mt-8 max-w-2xl mx-auto transform transition-all hover:scale-[1.01] duration-300">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span className="animate-pulse">⚡</span> CI/CD Pipeline Status
            </h3>

            <div className="relative flex justify-between items-center z-0">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10 rounded-full"></div>
                <div
                    className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 -z-10 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: `${(Math.min(activeStep, 3) / 3) * 100}%` }}
                ></div>

                {steps.map((step, index) => {
                    const isActive = activeStep > index;
                    const isCurrent = activeStep === index + 1;

                    return (
                        <div key={step.id} className="flex flex-col items-center gap-3">
                            <div className={`
                                w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-xl transition-all duration-500 border-2
                                ${isActive || isCurrent
                                    ? 'bg-slate-800 border-purple-500 text-white scale-110'
                                    : 'bg-slate-800 border-slate-600 text-gray-500 grayscale'}
                            `}>
                                {isActive ? '✔️' : step.icon}
                            </div>
                            <span className={`
                                text-xs font-medium tracking-wide transition-colors duration-300
                                ${isActive || isCurrent ? 'text-blue-300' : 'text-gray-500'}
                            `}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DeploymentTimeline;
