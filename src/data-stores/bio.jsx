export default [
  {
    id: 1,
    intro: "Hi I'm Akshay Gautam",
    subIntro: "Lead Software Engineer at Google Cloud",
    content:
      "I build and scale software that makes complex systems faster and more reliable. Previously at Microsoft, I worked on content delivery and Word performance, contributing to faster boot times. I also mentor aspiring engineers at Scaler.",
    interests: [
      "🎤 Singing",
      "🎮 Gaming",
      "📚 Learning new things",
      "🏃 Fitness & running enthusiast",
    ],
    imageURL: `${import.meta.env.BASE_URL}assets/akshay-gautam.jpg`,
  },
  {
    educationTimeLine: [
      {
        label: "MRIU",
        date: "2013–2017",
        detail: "B.Tech",
        logo: "https://www.google.com/s2/favicons?domain=manavrachna.edu.in&sz=64",
      },
      {
        label: "Ramjas School",
        date: "2012",
        detail: "12th",
        logo: `${import.meta.env.BASE_URL}assets/schools/ramjas-school.gif`,
      },
      {
        label: "Loyal Public School",
        date: "2010",
        detail: "10th",
        logo: `${import.meta.env.BASE_URL}assets/schools/loyal-public-school.png`,
      },
    ],
    professionalTimeLine: [
      {
        label: "Google",
        date: "Sep 2025 – Present",
        detail:
          "Lead Software Engineer · Modernizing and maintaining a mission-critical, heavily queried Google Cloud Support backbone service with stringent low-latency requirements.",
        impact: [
          "Built a new automation and reporting platform for Google Cloud Support, helping teams automate workflows and resolve customer issues more effectively.",
          "Added AI-assisted automation creation: builders describe their intent, and AI generates a complete automation.",
          "Building an autonomous coding agent ('Artificial Intern') that takes assigned tasks, proposes a plan for approval, implements approved work, and learns from pull request feedback.",
          "Led a team of two L4 and two L3 engineers to deliver the platform.",
        ],
        logo: "https://www.google.com/s2/favicons?domain=google.com&sz=64",
      },
      {
        label: "Scaler",
        date: "Apr 2022 – Present",
        detail: "Student Mentor · Freelance",
        logo: "https://www.google.com/s2/favicons?domain=scaler.com&sz=64",
      },
      {
        label: "Microsoft",
        date: "Aug 2021 – Sep 2025",
        detail:
          "Software Engineer 2 · Worked on Teams/Planner Copilot, Whiteboard, Word Online performance, and M365 content delivery.",
        impact: [
          "Improved Microsoft Teams Whiteboard responsiveness by 20% by leading a focused performance effort.",
          "Made Word Online feel faster: reduced boot time by 300 ms and time to visual ready by 1,400 ms.",
          "Modernized Microsoft 365 content delivery with dynamic CDN switching, reducing CDN operating costs by 15–20% and improving delivery reliability across regions.",
          "Developed Teams and Planner Copilot agents and skills for intelligent automation, and mentored interns working on A2A and vector persistence projects.",
        ],
        logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=64",
      },
      {
        label: "Fareye",
        date: "Apr 2019 – Aug 2021",
        detail:
          "Software Development Engineer to SDE 2 · Optimized FarEye Mobi and built reporting and connector microservices.",
        impact: [
          "Cut report turnaround from 15 days to 2–3 days, reduced load on legacy systems by 10%, and lowered AWS infrastructure costs by 30–40%.",
          "Moved 15% of traffic off the monolith with a connector microservice, improving system responsiveness and availability.",
          "Optimized FarEye Mobi to reduce latency and improve throughput and stability.",
          "Led FarEye Loupe, a hackathon project that made it easier for employees to share solutions and knowledge.",
        ],
        logo: "https://www.google.com/s2/favicons?domain=fareye.com&sz=64",
      },
      {
        label: "G4S IT Services",
        date: "Feb 2017 – Mar 2019",
        detail: "Associate Systems Developer · Owned the full UI for the Javelin ERP, built with AngularJS, and developed APIs and frontend features.",
        impact: [
          "Built and integrated Javelin APIs with internal services, making data exchange more reliable and reducing integration complexity.",
          "Developed a customer portal that helped clients track expenses and plan resources.",
        ],
        logo: "https://www.google.com/s2/favicons?domain=g4s.com&sz=64",
      },
    ]
  }
];
