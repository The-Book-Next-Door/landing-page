import { useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import Countdown from "./Countdown";
import Progress from "./Progress";

const CountdownCard = ({
  launchDate,
  progress,
}: {
  launchDate: Date | string;
  progress: number;
}) => {
  const { remaining, launchLine } = useCountdown(launchDate);
  const [showUTC, setShowUTC] = useState(false);

  const launchText = (() => {
    if (!launchDate) return null;
    try {
      if (showUTC) {
        const d = new Date(launchDate);
        return d.toUTCString().replace("GMT", "UTC");
      }
      return launchLine;
    } catch {
      return String(launchDate);
    }
  })();

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/90 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h3 className="text-base font-bold text-slate-900 tracking-tight">
          Launch Countdown
        </h3>
        <button
          type="button"
          onClick={() => setShowUTC((v) => !v)}
          className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white transition-colors mt-2 sm:mt-0"
        >
          {showUTC ? "Local Time" : "UTC"}
        </button>
      </div>

      {/* Launch date */}
      {launchText && (
        <p className="mt-2 text-sm text-slate-600">
          {showUTC ? "UTC:" : "Local:"}{" "}
          <span className="font-semibold text-slate-900">{launchText}</span>
        </p>
      )}

      {/* Circular progress + Countdown */}
      {remaining && (
        <div className="mt-6 flex flex-col items-center">
          {/* Progress ring (percentage based on total time) */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 36 36"
            >
              <path
                className="text-slate-200"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-500 transition-all duration-500"
                strokeWidth="3"
                strokeDasharray={`${progress || 0}, 100`}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-slate-900">
                {String(remaining.days).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase text-slate-500">
                Days Left
              </span>
            </div>
          </div>

          {/* Countdown component */}
          <div className="flex justify-around mt-4 w-full">
            <Countdown remaining={remaining} />
          </div>
        </div>
      )}

      {/* Divider */}
      {typeof progress === "number" && (
        <div className="mt-6 border-t border-slate-200 pt-5" />
      )}

      {/* Progress Bar */}
      {typeof progress === "number" && (
        <div className="mt-2">
          <Progress value={progress} />
        </div>
      )}
    </div>
  );
};

export default CountdownCard;
