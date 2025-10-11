import { FiTrendingUp, FiUser, FiTarget, FiBarChart } from "react-icons/fi";

export interface ICoreValue {
    title: string;
    description: string;
    icon: JSX.Element;
}

export const coreValues: ICoreValue[] = [
    {
        title: "Performance-Oriented",
        description: "Our platform is built for athletes, trainers, and beginners alike.",
        icon: <FiTrendingUp className="w-8 h-8 text-lime-700" />
    },
    {
        title: "User-Friendly Interface",
        description: "Our platform features an intuitive and easy-to-navigate interface",
        icon: <FiUser className="w-8 h-8 text-lime-700" />
    },
    {
        title: "Personalized Experience",
        description: "Our platform provides a personalized experience tailored to meet your needs.",
        icon: <FiTarget className="w-8 h-8 text-lime-700" />
    },
    {
        title: "Data-Driven Insights",
        description: "We go beyond basic metrics, transforming raw data into clear.",
        icon: <FiBarChart className="w-8 h-8 text-lime-700" />
    }
];
