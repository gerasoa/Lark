export type Lesson = {
  slug: string; title: string; description: string; category: string; level: string;
  duration: string; videoId: string; videoStart?: number; videoEnd?: number; directions: string[];
  vocabulary: { word: string; meaning: string; example: string }[];
  questions: { prompt: string; options: string[]; answer: string }[];
  grammarExercises?: { parts: string[]; choices: { options: string[]; answer: string }[] }[];
  sentenceBuilding?: { words: string; answer: string; acceptedAnswers?: string[] }[];
};

export const lessons: Lesson[] = [
  {
    slug: "coffee-to-go", title: "The IT Crowd - Yesterday's Jam | Full Episode | Series 1 Episode 1", category: "Everyday English",
    description: "A quick order in a café and the expressions that keep the conversation flowing.",
    level: "Intermediate · B1", duration: "8 min", videoId: "NNRQaDkQ7F8", videoStart: 82, videoEnd: 120,
    directions: [
      "Watch the video once without pausing. Focus on the situation and the speakers' tone.",
      "Watch it again and listen for the key words listed below.",
      "Answer the three questions, then reveal the answer key to check your work."
    ],
    vocabulary: [
      { word: "to take away", meaning: "to buy food or drink to have somewhere else", example: "Could I have that coffee to take away?" },
      { word: "change", meaning: "money returned after you pay more than the price", example: "Here's your change." },
      { word: "regular", meaning: "the standard size or usual option", example: "A regular coffee, please." }
    ],
    questions: [
      { prompt: "What does the customer order?", options: ["A cup of tea", "A coffee", "A sandwich"], answer: "A coffee" },
      { prompt: "What does “to take away” mean here?", options: ["Drink it there", "Take it with you", "Order another"], answer: "Take it with you" },
      { prompt: "Which phrase is the most polite?", options: ["Give me coffee", "Coffee now", "Could I have a coffee, please?"], answer: "Could I have a coffee, please?" }
    ],
    grammarExercises: [
      { parts: ["It ", " unbelievable!"], choices: [{ options: ["was", "were"], answer: "was" }] },
      { parts: ["Ok, all right. We ", " to hear everything."], choices: [{ options: ["want", "wants"], answer: "want" }] },
      { parts: ["Rachel, ", " this end well or ", " we need to get tissues?"], choices: [{ options: ["does", "do"], answer: "does" }, { options: ["does", "do"], answer: "do" }] }
    ],
    sentenceBuilding: [
      {
        words: "Rachel / tell / Phoebe / Monica / Ross / kiss / her",
        answer: "Rachel tells Phoebe and Monica that Ross kissed her.",
        acceptedAnswers: ["Rachel tells Phoebe and Monica Ross kissed her."]
      },
      {
        words: "Monica / Phoebe / freak / out",
        answer: "Monica and Phoebe freak out."
      },
      {
        words: "Phoebe / tell / Monica / get / wine / and / unplug / phone",
        answer: "Phoebe tells Monica to get the wine and unplug the phone.",
        acceptedAnswers: [
          "Phoebe tells Monica to get some wine and unplug the phone.",
          "Phoebe tells Monica to get the wine and to unplug the phone.",
          "Phoebe tells Monica to get some wine and to unplug the phone."
        ]
      },
      {
        words: "Phoebe / want / know / story / end / well",
        answer: "Phoebe wants to know if the story ends well.",
        acceptedAnswers: ["Phoebe wants to know whether the story ends well."]
      }
    ]
  },
  {
    slug: "weekend-plans", title: "The IT Crowd - Calamity Jen | Full Episode | Series 1 Episode 2", category: "Friends & Plans",
    description: "Two friends make plans for Saturday and change their minds along the way.",
    level: "Pre-intermediate · A2", duration: "7 min", videoId: "Z0dvAy1puIE", videoStart: 288, videoEnd: 336,
    directions: [
      "Listen once and identify where the friends want to go.",
      "Replay the conversation and notice how they make and change suggestions.",
      "Complete the quiz and compare your choices with the answer key."
    ],
    vocabulary: [
      { word: "up for", meaning: "willing or interested in doing something", example: "Are you up for a film?" },
      { word: "instead", meaning: "as an alternative or replacement", example: "Let's stay at home instead." },
      { word: "sounds good", meaning: "a way to say that you like a suggestion", example: "Dinner at eight? Sounds good." }
    ],
    questions: [
      { prompt: "What are the speakers discussing?", options: ["A work project", "Weekend plans", "A new flat"], answer: "Weekend plans" },
      { prompt: "Which phrase accepts a suggestion?", options: ["Sounds good", "Not yet", "I forgot"], answer: "Sounds good" },
      { prompt: "What does “instead” introduce?", options: ["A reason", "An alternative", "A question"], answer: "An alternative" }
    ]
  },
  {
    slug: "lost-in-the-city", title: "The IT Crowd - Fifty Fifty | Full Episode | Series 1 Episode 3", category: "Travel English",
    description: "How to ask for help, check directions and reach the right place.",
    level: "Intermediate · B1", duration: "9 min", videoId: "WrCgYo5i6yI",
    directions: [
      "Watch the scene and identify the destination before reading the vocabulary.",
      "Listen again for direction words and repeat each useful sentence aloud.",
      "Answer the questions without replaying the video, then check your answers."
    ],
    vocabulary: [
      { word: "across from", meaning: "on the opposite side from something", example: "The station is across from the bank." },
      { word: "block", meaning: "the section of a street between two junctions", example: "Walk two blocks and turn right." },
      { word: "miss", meaning: "to fail to notice something or go past it", example: "You can't miss the red building." }
    ],
    questions: [
      { prompt: "Why does the traveller ask for help?", options: ["They are lost", "They need money", "They missed a train"], answer: "They are lost" },
      { prompt: "What is a city block?", options: ["A building", "A section between streets", "A set of traffic lights"], answer: "A section between streets" },
      { prompt: "Which sentence is polite?", options: ["Where is it?", "Tell me now", "Could you tell me how to get there?"], answer: "Could you tell me how to get there?" }
    ]
  }
];

export const getLesson = (slug: string) => lessons.find((lesson) => lesson.slug === slug);
