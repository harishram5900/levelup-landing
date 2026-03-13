export type Platform = "tiktok" | "youtube" | "instagram";

export const todayTask = {
  title: "Post New TikTok Video",
  idea: "Share your top 3 productivity hacks",
  concept: "Quick tips and tools you use daily to stay focused",
  platform: "tiktok" as Platform,
};

export const currentStreak = {
  days: 7,
  label: "Current streak",
};

export const nextPost = {
  platform: "youtube" as Platform,
  title: "YouTube Video",
  when: "Thursday • 7:30 PM",
  idea: "How to Skyrocket Your Content Growth",
  progressLabel: "Script 60% done",
};

export const growthChartData = [
  { label: "Mon", value: 2.2 },
  { label: "Tue", value: 3.1 },
  { label: "Wed", value: 2.8 },
  { label: "Thu", value: 4.2 },
  { label: "Fri", value: 5.1 },
  { label: "Sat", value: 4.6 },
  { label: "Sun", value: 3.9 },
];

export const upcomingSchedule = [
  { platform: "tiktok" as Platform, day: "Wednesday", time: "3:00 PM", title: "8 Mistakes to Avoid When Growing Online" },
  { platform: "youtube" as Platform, day: "Thursday", time: "8:00 AM", title: "How to Skyrocket Your Content Creation" },
  { platform: "instagram" as Platform, day: "Friday", time: "6:00 PM", title: "My Daily Content Creation Routine" },
];

export const quickStats = [
  { label: "Followers", value: "11.2K" },
  { label: "Views (30d)", value: "84.3K" },
  { label: "Videos", value: "67" },
];

// Content Idea Generator
export const platforms = ["TikTok", "YouTube", "Instagram"] as const;
export const topics = ["Educational", "Productivity Tips", "Behind the Scenes", "Tutorial", "Storytime"] as const;

export const generatedIdeas = [
  {
    id: "1",
    title: "Top 3 Productivity Hacks for Creators",
    description: "Struggling to stay productive as a creator? Here are my top 3 hacks that actually work.",
    tag: "Productivity",
  },
  {
    id: "2",
    title: "The Perfect Daily Routine for Creators",
    description: "Want to boost your productivity as a creator? Follow this routine to get more done.",
    tag: "Productivity",
  },
  {
    id: "3",
    title: "How I Plan My Content a Week Ahead",
    description: "Batch planning saves me 10+ hours. Here's exactly how I do it.",
    tag: "Planning",
  },
];

export const hookSuggestions = [
  "The one habit that changed my growth...",
  "Stop doing this if you want more views",
  "I tried posting at different times for 30 days",
];

// Post Planner
export const scheduledPosts = [
  { id: "1", platform: "tiktok" as Platform, day: "Monday", time: "3:00 PM", title: "8 Mistakes to Avoid When Growing Online", type: "YouTube Short" },
  { id: "2", platform: "youtube" as Platform, day: "Thursday", time: "4:00 PM", title: "How to Skyrocket Your Content Growth", type: "YouTube Short" },
  { id: "3", platform: "instagram" as Platform, day: "Saturday", time: "2:00 PM", title: "My Daily Content Creation Routine", type: "Reel" },
];

// Insights
export const growthOverview = [
  { label: "Followers", value: "11.2K", sub: "Ethan Mux" },
  { label: "Views", value: "48.3K", sub: "Last 30 days" },
  { label: "Growth", value: "1.6M", sub: "All time" },
];

export const bestTimeToPostData = [
  { hour: "9AM", value: 120 },
  { hour: "12PM", value: 280 },
  { hour: "3PM", value: 340 },
  { hour: "6PM", value: 420 },
  { hour: "9PM", value: 380 },
];

export const trendingContent = [
  { title: "CRINGE ALERT: watch me struggle as i try this challenge.", views: "9.5K", growth: "+127.0K" },
];

// Consistency Tracker
export const dailyChecklist = [
  { id: "1", label: "Plan new video", done: true },
  { id: "2", label: "Research topic", done: true },
  { id: "3", label: "Film content", done: false },
  { id: "4", label: "Post video", done: false },
];

export const streakTips = "Keep your streak going by posting at least one piece of content every day. Consistency beats perfection.";

export const weeklyStreakDays = [
  { day: "M", active: true },
  { day: "T", active: true },
  { day: "W", active: true },
  { day: "Th", active: true },
  { day: "F", active: true },
  { day: "S", active: true },
  { day: "Su", active: false },
];

// Profile
export const creatorProfile = {
  name: "Briana Anderson",
  tagline: "Growth in Media",
  followers: "11.2K",
  views: "1.2M",
  videos: "67",
  avatarPlaceholder: true,
};

export const goals = [
  "Reach 50K followers by June 1",
  "Publish 7 TikTok videos per week",
];

export const milestones = [
  "Hit 30 Videos",
  "Reached 10K Followers",
  "60 Day Streak",
];
