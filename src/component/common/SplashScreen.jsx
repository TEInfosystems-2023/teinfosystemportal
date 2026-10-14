import { useEffect } from "react";

function SplashScreen({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div className="text-center">

        <div className="mb-4">
          <h1 className="text-4xl font-bold text-blue-600">
            TE
          </h1>
        </div>

        <h2 className="text-2xl font-bold  text-white">
          Tek Experts Infosystems
        </h2>

        <p className="mt-2 text-gray-400 ">
          Technology • Innovation • Solutions
        </p>

        <div className="mt-6 flex justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
        </div>

      </div>

    </div>
  );
}

export default SplashScreen;