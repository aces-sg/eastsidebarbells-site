export interface IStep {
    number: string;
    title: string;
    description: string;
}

export const howItWorksData = {
    badge: "How it Works",
    title: "Start Your Fitness Journey in 4 Easy Steps",
    description: "From sign-up to seeing real results, FitMove makes every step seamless.",
    ctaText: "Get Started Free",
    ctaLink: "#pricing",
    steps: [
        {
            number: "01",
            title: "Create Your Profile",
            description: "Take control of your fitness journey by setting your fitness level, goals, and preferences. Whether you're a beginner or an advanced athlete."
        },
        {
            number: "02",
            title: "Choose a Program",
            description: "Select from a variety of training plans tailored to your needs—no guesswork required. Our expert-designed plans cover everything."
        },
        {
            number: "03",
            title: "Track Daily Progress",
            description: "Log your workouts, meals, and health metrics all in one place. Easily record your exercise sessions, track your daily food intake, and monitor key health."
        },
        {
            number: "04",
            title: "Celebrate Results",
            description: "Easily monitor improvements and earn badges as you progress. Watch your stats climb as you get stronger, faster, and healthier."
        }
    ]
};
