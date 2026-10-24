export default [
  {
    id: 1,
    intro: "Hi I'm Akshay Gautam",
    subIntro: "Google Cloud",
    content:
      "I build and scale software that makes complex systems faster and more reliable. Previously at Microsoft, I worked on content delivery and Word performance, including a 300 ms reduction in boot time. I also mentor aspiring engineers at Scaler.",
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
          "Lead Software Engineer · Designing and scaling Google Cloud support infrastructure.",
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
          "Software Engineer 2 · Led 1CDN implementation and Word performance work, reducing boot time by 300 ms.",
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
        detail: "Associate Systems Developer · Built APIs and frontend features for the Javelin product.",
        logo: "https://www.google.com/s2/favicons?domain=g4s.com&sz=64",
      },
    ]
  }
];
