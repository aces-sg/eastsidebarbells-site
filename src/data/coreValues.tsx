import { FiZap, FiActivity, FiCheckCircle, FiTrendingUp } from "react-icons/fi";

export interface ICoreValue {
    title: string;
    description: string;
    icon: JSX.Element;
}

export const coreValues: ICoreValue[] = [
    {
        title: "Simplicity",
        description: "Consistency beats complexity. Half the battle is won the moment you show up—we make sure you keep showing up.",
        icon: <FiZap className="w-8 h-8 text-lime-700" />
    },
    {
        title: "Strength & Power",
        description: "Strength and power are the foundation of real fitness. They allow you to increase your work capacity and make every minute count.",
        icon: <FiActivity className="w-8 h-8 text-lime-700" />
    },
    {
        title: "Technical Mastery",
        description: "The best workouts prioritize quality over numbers. Focus on technique, and you'll build real fitness that lasts—injury-free.",
        icon: <FiCheckCircle className="w-8 h-8 text-lime-700" />
    },
    {
        title: "Progressive Overload",
        description: "Add reps, increase weight, or move faster—these are the signs of progress. Tracking your numbers keeps you improving and motivated week after week.",
        icon: <FiTrendingUp className="w-8 h-8 text-lime-700" />
    }
];
