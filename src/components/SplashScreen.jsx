const SplashScreen = ({ progress }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500">
            <p className="text-white mb-4 text-lg font-semibold">Loading...</p>
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-white mt-4">{Math.floor(progress)}%</p>
        </div>
    );
};

export default SplashScreen;
