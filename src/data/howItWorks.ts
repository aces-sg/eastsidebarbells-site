export interface IStep {
  number: string;
  title: string;
  description: string;
}

export const howItWorksData = {
  badge: "Join our workout",
  title: "Kettlebells Sunshine & Strength @ Bishan Park",
  description:
    "Join us on our weekly kettlebell circuits at Bishan Park to build your fitness with a community of like-minded individuals",
  ctaText: "Register on Meetup",
  ctaLink: "https://www.meetup.com/kettlebell-and-sunshine/events",
  steps: [
    {
      number: "01",
      title: "RSVP on Meetup",
      description:
        "Let us know you're coming. We use Meetup to manage our sessions and track attendance.",
    },
    {
      number: "02",
      title: "Join us at Bishan Park",
      description:
        "Our weekly meetup is at Bishan Park. Join us at 7:30am every saturday for a sunshine-filled workout.",
    },
    {
      number: "03",
      title: "Celebrate Results",
      description:
        "Track your reps, weight, and effort level with our free app—and watch your progress over time.",
    },
  ],
};
