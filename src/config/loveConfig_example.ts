// ============================================================================
// Love Configuration - Personalize this file for your Valentine! 💕
// ============================================================================

/**
 * IMPORTANT: This is an EXAMPLE file to show you the structure.
 * 
 * For your actual configuration:
 * 1. Copy this file and rename it to: loveConfig.ts (without _example)
 * 2. Customize all the values with your personal information
 * 3. Make sure loveConfig.ts is in your .gitignore if keeping it private
 * 
 * OR simply edit the existing loveConfig.ts file directly.
 */

export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  yourName: "Krish",
  partnerName: "Sara",

  // Nepali date 2080/11/13 → AD (for logic)
  relationshipStart: "2024-02-25T00:00:00+05:45",

  valentineDate: "2026-02-14",

  heroHeadline: "To my sweetest Beby 💘",
  heroSubtext:
    "From your sweetest boy Krishu 💖 A sweet effort from me, made with all my heart.",

  loveDurationText: {
    nepaliDate: "2080/11/13 🇳🇵",
    days: "≈ 712 days",
    hours: "≈ 17,088 hours",
    minutes: "≈ 1,025,280 minutes",
    seconds: "≈ 61,516,800 seconds"
  },

  photoCount: 4,

  milestones: [
    {
      title: "The Beginning",
      date: "2080/11/13",
      description: "The day my heart chose you forever."
    },
    {
      title: "My Feelings",
      date: "Always",
      description:
        "I love you soo much beby, my sweetest girl. I always loved you truly."
    },
    {
      title: "My Mistakes",
      date: "Truth",
      description:
        "I made mistakes and I’m ashamed of them — but my love for you was always real."
    },
    {
      title: "This Question",
      date: "Happy Propose Day 🌹",
      description:
        "You are and will always be the best girlfriend ever. Will you be my Valentine? 💘"
    }
  ],

  yourEmail: "krish@email.com",
  emailSubject: "My Answer 💕",
  emailBody: "Yes Krishu, always ❤️",

  inviteTitle: "Happy Propose Day & Valentine 💐",
  inviteMessage:
    "I love you soo much beby. Will you be mine this Valentine and forever?",
  inviteDate: "February 14, 2026",
  inviteTime: "Anytime, as long as it's with you",
  inviteLocation: "Wherever you are ❤️"
};

export default loveConfig;
