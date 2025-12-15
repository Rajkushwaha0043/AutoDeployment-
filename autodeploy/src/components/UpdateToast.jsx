import React, { useEffect, useState } from 'react';
import { checkVersion } from '../utils/deployment';

const UpdateToast = () => {
    const [show, setShow] = useState(false);
    const [version, setVersion] = useState('');

    useEffect(() => {
        const { isNew, version } = checkVersion();
        if (isNew) {
            setVersion(version);
            setShow(true);
            const timer = setTimeout(() => setShow(false), 5000); // Hide after 5s
            return () => clearTimeout(timer);
        }
    }, []);

    if (!show) return null;

    return (
        <div className="fixed bottom-5 right-5 z-50 animate-slide-up">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-lg shadow-2xl">
                <div className="bg-slate-900/90 backdrop-blur-md rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-green-500/20 p-2 rounded-full">
                        <span className="text-xl">🚀</span>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm">New Version Deployed!</h4>
                        <p className="text-gray-300 text-xs">Updated to v{version}</p>
                    </div>
                    <button
                        onClick={() => setShow(false)}
                        className="text-gray-400 hover:text-white transition-colors ml-2"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateToast;
