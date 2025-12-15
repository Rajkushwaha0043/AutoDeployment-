/* global __BUILD_TIME__ */
import React from 'react';

const DeploymentStatusBadge = () => {
    return (
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg animate-fade-in">
            <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Last Deployment</span>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Successful</span>
                    <span className="text-xs text-gray-400">• {__BUILD_TIME__}</span>
                </div>
            </div>
        </div>
    );
};

export default DeploymentStatusBadge;
