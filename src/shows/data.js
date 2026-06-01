/**
 * @typedef Episode
 * @property {number} number The episode number.
 * @property {string} title The episode title.
 * @property {string} description A brief description of the episode.
 */

/**
 * @typedef Show
 * @property {string} name The name of the TV show.
 * @property {string} genre The genre of the TV show.
 * @property {Episode[]} episodes A list of episodes for the TV show.
 */

/** @type {Show[]} */
export const tvShows = [
  {
    name: "Galactic Odyssey",
    genre: "Sci-Fi",
    episodes: [
      {
        number: 1,
        title: "The Awakening",
        description: "A crew discovers an alien signal from a distant galaxy.",
      },
      {
        number: 2,
        title: "Lost in Space",
        description: "The crew faces a malfunction that sends them off course.",
      },
      {
        number: 3,
        title: "The Hidden Planet",
        description:
          "They land on a mysterious planet with strange life forms.",
      },
      {
        number: 4,
        title: "Echoes of the Past",
        description: "A distress signal reveals a long-lost spaceship.",
      },
      {
        number: 5,
        title: "Dark Matter",
        description: "An unknown entity begins to infiltrate the ship.",
      },
      {
        number: 6,
        title: "The Divide",
        description: "Tensions rise among the crew as supplies dwindle.",
      },
      {
        number: 7,
        title: "Starfall",
        description: "A celestial event puts the entire mission at risk.",
      },
      {
        number: 8,
        title: "Homebound",
        description: "The crew makes a daring escape to return to Earth.",
      },
    ],
  },
  {
    name: "Urban Legends",
    genre: "Horror",
    episodes: [
      {
        number: 1,
        title: "The Vanishing Hitchhiker",
        description: "A late-night driver picks up a mysterious stranger.",
      },
      {
        number: 2,
        title: "The Haunted Hotel",
        description: "Guests disappear one by one in an old hotel.",
      },
      {
        number: 3,
        title: "Whispering Woods",
        description: "Campers hear eerie voices in the forest.",
      },
      {
        number: 4,
        title: "The Mirror's Curse",
        description: "A cursed mirror reveals terrifying truths.",
      },
      {
        number: 5,
        title: "The Forgotten Doll",
        description: "A child’s toy brings misfortune to its owners.",
      },
      {
        number: 6,
        title: "Phantom Caller",
        description: "A series of strange phone calls haunts a family.",
      },
      {
        number: 7,
        title: "Midnight Train",
        description: "A train ride takes passengers to a ghostly realm.",
      },
      {
        number: 8,
        title: "The Final Scream",
        description: "A film crew encounters real horror on set.",
      },
    ],
  },
  {
    name: "Culinary Journeys",
    genre: "Documentary",
    episodes: [
      {
        number: 1,
        title: "Flavors of Italy",
        description: "Exploring authentic Italian cuisine from Rome to Sicily.",
      },
      {
        number: 2,
        title: "Spice Trails",
        description: "A journey through the vibrant spices of India.",
      },
      {
        number: 3,
        title: "Street Food Stories",
        description: "Tasting iconic street food across Asia.",
      },
      {
        number: 4,
        title: "The French Table",
        description: "A look into the art of French gastronomy.",
      },
      {
        number: 5,
        title: "Sushi Masters",
        description: "Discovering the craftsmanship behind sushi in Japan.",
      },
      {
        number: 6,
        title: "Baking Wonders",
        description: "From sourdough to pastries, the secrets of baking.",
      },
      {
        number: 7,
        title: "Farm to Fork",
        description: "Sustainable farming and its culinary impact.",
      },
      {
        number: 8,
        title: "Sweet Endings",
        description: "A world tour of the most decadent desserts.",
      },
    ],
  },
  {
    name: "Code Breakers",
    genre: "Drama",
    episodes: [
      {
        number: 1,
        title: "The First Bug",
        description: "A tech startup faces its first major software bug.",
      },
      {
        number: 2,
        title: "Hack Attack",
        description: "A cyberattack threatens to shut down the company.",
      },
      {
        number: 3,
        title: "The Pivot",
        description: "The team makes a risky decision to change direction.",
      },
      {
        number: 4,
        title: "Investor Pressure",
        description: "Tensions rise with demanding venture capitalists.",
      },
      {
        number: 5,
        title: "Midnight Deployment",
        description: "A critical software release hangs in the balance.",
      },
      {
        number: 6,
        title: "The Breakthrough",
        description: "A new algorithm could change everything.",
      },
      {
        number: 7,
        title: "Betrayal",
        description: "A key developer considers joining a rival company.",
      },
      {
        number: 8,
        title: "Final Launch",
        description: "The team prepares for the biggest launch yet.",
      },
    ],
  },
  {
    name: "Pixel Wars",
    genre: "Animation",
    episodes: [
      {
        number: 1,
        title: "Game On",
        description: "A group of gamers discovers a hidden virtual world.",
      },
      {
        number: 2,
        title: "Boss Battle",
        description: "They face their first major in-game challenge.",
      },
      {
        number: 3,
        title: "Glitch City",
        description: "A digital virus threatens to destroy their world.",
      },
      {
        number: 4,
        title: "Power Up",
        description: "They unlock new abilities to fight back.",
      },
      {
        number: 5,
        title: "The Rival Guild",
        description: "A mysterious group competes for control.",
      },
      {
        number: 6,
        title: "Quest for the Artifact",
        description: "A legendary item may be their only hope.",
      },
      {
        number: 7,
        title: "Digital Darkness",
        description: "An in-game catastrophe has real-world effects.",
      },
      {
        number: 8,
        title: "Victory or Game Over",
        description: "The final showdown determines the fate of both worlds.",
      },
    ],
  },
];
