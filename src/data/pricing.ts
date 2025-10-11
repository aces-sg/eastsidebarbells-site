import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 0,
        features: [
            'Basic workout planner',
            'Scheduling & Reminders',
            'Progress tracker',
            'Limited challenges',
        ],
        description: 'Perfect for those just beginning their fitness features to kickstart routine',
        recommended: false
    },
    {
        name: 'Pro',
        price: 15,
        features: [
            'Everything in Starter',
            'AI training adjustments',
            'Meal & hydration log',
            'Limited challenges',
        ],
        description: 'Elevate your fitness journey with the Pro plan, for training to the next level',
        recommended: true
    },
    {
        name: 'Elite',
        price: 29,
        features: [
            'Everything in Pro',
            'Basic workout planner',
            'Live virtual classes',
            'Advanced analytics',
        ],
        description: 'For the ultimate fitness enthusiast and those committed.',
        recommended: false
    },
    {
        name: 'Team Plan',
        price: 49,
        features: [
            'Everything in Elite',
            'Basic workout planner',
            'Trainer dashboard',
            'Team progress reports',
        ],
        description: 'The Team plan is perfect for groups, businesses, or families.',
        recommended: false
    },
]