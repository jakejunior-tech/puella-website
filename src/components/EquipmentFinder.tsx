"use client";

import { useState } from "react";
import { ArrowRight, Check, RefreshCw } from "lucide-react";
import {
  projectTypes,
  tasks,
  equipmentRecommendations,
} from "@/data/site-data";

type Step = "project" | "task" | "results";

export default function EquipmentFinder() {
  const [step, setStep] = useState<Step>("project");
  const [project, setProject] = useState("");
  const [task, setTask] = useState("");
  const [results, setResults] = useState<string[]>([]);

  function selectProject(id: string) {
    setProject(id);
    setTask("");
    setResults([]);
    setStep("task");
  }

  function selectTask(id: string) {
    setTask(id);
    const recs = equipmentRecommendations[project]?.[id] || [];
    setResults(recs);
    setStep("results");
  }

  function reset() {
    setProject("");
    setTask("");
    setResults([]);
    setStep("project");
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-sm overflow-hidden">
      <div className="bg-secondary text-white px-6 py-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Find the Right Equipment</h3>
          <div className="flex items-center gap-2 text-sm">
            <span
              className={`h-8 w-8 rounded-full flex items-center justify-center ${
                step !== "project" ? "bg-green-500" : "bg-primary"
              }`}
            >
              {step !== "project" ? <Check className="h-4 w-4" /> : 1}
            </span>
            <span
              className={`h-8 w-8 rounded-full flex items-center justify-center ${
                step === "results" ? "bg-green-500" : "bg-primary"
              }`}
            >
              {step === "results" ? <Check className="h-4 w-4" /> : 2}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-300 mt-1">
          Tell us about your project and we&apos;ll recommend the equipment.
        </p>
      </div>

      <div className="p-6">
        {step === "project" && (
          <div>
            <h4 className="font-semibold mb-4">
              What type of project are you working on?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => selectProject(type.id)}
                  className="border border-gray-200 hover:border-primary hover:bg-orange-50 rounded-lg px-4 py-3 text-sm font-medium text-left transition-colors"
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "task" && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h4 className="font-semibold">What do you need help with?</h4>
              <button
                onClick={reset}
                className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
              >
                <RefreshCw className="h-3 w-3" /> Restart
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tasks.map((t) => (
                <button
                  key={t.id}
                  onClick={() => selectTask(t.id)}
                  className="border border-gray-200 hover:border-primary hover:bg-orange-50 rounded-lg px-4 py-3 text-sm font-medium text-left transition-colors"
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "results" && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h4 className="font-semibold">Recommended Equipment</h4>
              <button
                onClick={reset}
                className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
              >
                <RefreshCw className="h-3 w-3" /> Start over
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Based on your{" "}
              <span className="font-medium text-gray-700">
                {projectTypes.find((p) => p.id === project)?.label}
              </span>{" "}
              project needing{" "}
              <span className="font-medium text-gray-700">
                {tasks.find((t) => t.id === task)?.label.toLowerCase()}
              </span>
              :
            </p>
            {results.length > 0 ? (
              <ul className="space-y-2 mb-5">
                {results.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm"
                  >
                    <Check className="h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 mb-5">
                We&apos;ll recommend suitable equipment for your needs. Contact
                us for specific recommendations.
              </p>
            )}
            <a
              href={`/contact?equipment=${encodeURIComponent(
                results.join(", ")
              )}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}