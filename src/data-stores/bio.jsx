export default [
  {
    id: 1,
    intro: "Hi I'm Akshay Gautam",
    subIntro: "Lead Software Engineer at Google Cloud",
    content:
      "I build and scale software that makes complex systems faster and more reliable. Previously at Microsoft, I worked on content delivery and Word performance, reducing Word boot time by 1,400 ms in one process and 300 ms in another. I also mentor aspiring engineers at Scaler.",
    googleImpact:
      "As Lead Software Engineer, I led two L4 and two L3 engineers to build a new automation workflow and reporting platform, enabling Google Cloud Support to create automations and resolve customer issues more effectively.",
    microsoftCdnImpact:
      "Modernized the CDN architecture across Microsoft 365 apps, making it easier to switch between CDN providers based on availability.",
    impact: [
      { value: "1,400 ms", detail: "boot-time reduction in one process" },
      { value: "300 ms", detail: "boot-time reduction in a separate process" },
    ],
    interests: ["Singing", "Gaming", "Learning new things"],
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
          "Lead Software Engineer · Leading four L3 engineers to modernize and maintain a mission-critical, heavily queried Google Cloud Support backbone service with stringent low-latency requirements.",
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
          "Software Engineer 2 · Modernized CDN architecture across Microsoft 365 apps and improved Word boot performance.",
        logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=64",
      },
      {
        label: "Fareye",
        date: "Apr 2019 – Aug 2021",
        detail:
          "Software Development Engineer to SDE 2 · Built reporting and connector microservices and contributed to FarEye Loupe.",
        logo: "https://www.google.com/s2/favicons?domain=fareye.com&sz=64",
      },
      {
        label: "G4S IT Services",
        date: "Feb 2017 – Mar 2019",
        detail: "Associate Systems Developer · Owned the full UI for the Javelin ERP, built with AngularJS, and developed APIs and frontend features.",
        logo: "https://www.google.com/s2/favicons?domain=g4s.com&sz=64",
      },
    ]
  }
];
