export type Athlete = {
  name: string;
  club: string;
  photo: string;
  clubLogo?: string;
  url: string;
};

export const ATHLETES: Athlete[] = [
  {
    name: "Ben Dezalovski",
    club: "Club Ohio",
    photo: "/player/ben-dezalovski.jpeg",
    clubLogo: "/clubs/club-ohio.png",
    url: "https://ben-dezalovski-stats001.vercel.app/",
  },
  {
    name: "Hudson Cicala",
    club: "FC Cincinnati",
    photo: "/player/hudson-cicala-16.png",
    clubLogo: "/clubs/fc-cincinnati.png",
    url: "https://hudson-cicala-stats002.vercel.app/",
  },
  {
    name: "Lincoln Cicala",
    club: "FC Cincinnati",
    photo: "/player/lincoln-cicala.png",
    clubLogo: "/clubs/fc-cincinnati.png",
    url: "https://lincoln-cicala-stats001.vercel.app/",
  },
  {
    name: "Joel Barson",
    club: "FC Cincinnati",
    photo: "/player/joel-barson.jpeg",
    clubLogo: "/clubs/fc-cincinnati.png",
    url: "https://joel-barson-stats001.vercel.app/",
  },
  {
    name: "Danilo Reis",
    club: "Players Development Academy",
    photo: "/player/danilo-reis.jpeg",
    url: "https://danilo-reis-stats001.vercel.app/",
  },
  {
    name: "Maddox Choate",
    club: "Houston Dynamo",
    photo: "/player/maddox-choate.png",
    clubLogo: "/clubs/houston-dynamo.svg",
    url: "https://maddox-choate-stats001.vercel.app/",
  },
  {
    name: "Kai Vadivelu",
    club: "Cincinnati United SC",
    photo: "/player/kai-vadivelu.jpg",
    clubLogo: "/clubs/cincinnati-united.png",
    url: "https://kai-vadivelu-stats001.vercel.app/",
  },
  {
    name: "Blake Wilson",
    club: "St. Louis City SC",
    photo: "/player/blake-wilson.png",
    clubLogo: "/clubs/st-louis-city.png",
    url: "https://blake-wilson-stats001.vercel.app/",
  },
];

export function clubInitials(club: string): string {
  const words = club.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w));
  return words
    .slice(0, 3)
    .map((w) => w[0].toUpperCase())
    .join("");
}
