let netflixShows = [
  {
    title: "Stranger Things",
    ratings: 5
  },
  {
    title: "Cobra Kai",
    ratings: 2
  },
  {
    title: "Queen\'s Gambit",
    ratings: 5
  },
  {
    title: "Locke & Key",
    ratings: 4
  },
  {
    title: "Big Mouth",
    ratings: 3
  },
  {
    title: "Glee",
    ratings: 2
  }
];

for (let i = 0; i < netflixShows.length; i++) {
  if (netflixShows[i].ratings >= 3) {
    console.log(netflixShows[i].title);
  }
}