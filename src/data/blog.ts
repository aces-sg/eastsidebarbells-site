export interface IBlogPost {
    title: string;
    category: string;
    date: string;
}

export const blogPosts: IBlogPost[] = [
    {
        title: "Top 10 Home Workouts You Can Do Without Equipment",
        category: "Fitness Tips",
        date: "March 3, 2035"
    },
    {
        title: "How to Build a Sustainable Meal Plan for Weight Loss",
        category: "Nutrition",
        date: "March 1, 2035"
    },
    {
        title: "Tracking Progress: Why Small Wins Matter in Fitness",
        category: "Fitness Mindset",
        date: "February 26, 2035"
    }
];
