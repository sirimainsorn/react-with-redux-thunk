import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { GlobalAction } from "./store/global/global.action";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.globalReducer);
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className={`flex justify-center items-center ${loading ? "" : "hidden"}`}>
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>

        <div>
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              dispatch(GlobalAction.spinnerLoading(true));
            }}
          >
            Click Loading
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
