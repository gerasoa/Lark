export type Lesson = {
  slug: string; title: string; description: string; category: string; level: string;
  duration: string; icon: string; videoId: string; directions: string[];
  vocabulary: { word: string; meaning: string; example: string }[];
  questions: { prompt: string; options: string[]; answer: string }[];
};

export const lessons: Lesson[] = [
  {
    slug: "coffee-to-go", title: "A Coffee to Go", category: "Everyday English",
    description: "Um pedido rápido no café e as expressões que fazem a conversa fluir.",
    level: "Intermediate · B1", duration: "8 min", icon: "☕", videoId: "M7lc1UVf-VE",
    directions: [
      "Watch the video once without pausing. Focus on the situation and the speakers' tone.",
      "Watch it again and listen for the key words listed below.",
      "Answer the three questions, then reveal the answer key to check your work."
    ],
    vocabulary: [
      { word: "to go", meaning: "para viagem; para levar", example: "Could I get that coffee to go?" },
      { word: "change", meaning: "troco recebido após pagar", example: "Here's your change." },
      { word: "regular", meaning: "tamanho ou opção padrão", example: "A regular coffee, please." }
    ],
    questions: [
      { prompt: "What does the customer order?", options: ["A cup of tea", "A coffee", "A sandwich"], answer: "A coffee" },
      { prompt: "What does “to go” mean here?", options: ["Drink it there", "Take it away", "Order another"], answer: "Take it away" },
      { prompt: "Which phrase is the most polite?", options: ["Give me coffee", "Coffee now", "Could I get a coffee, please?"], answer: "Could I get a coffee, please?" }
    ]
  },
  {
    slug: "weekend-plans", title: "Weekend Plans", category: "Friends & Plans",
    description: "Dois amigos combinam o sábado e mudam de ideia no meio do caminho.",
    level: "Pre-intermediate · A2", duration: "7 min", icon: "✦", videoId: "ysz5S6PUM-U",
    directions: [
      "Listen once and identify where the friends want to go.",
      "Replay the conversation and notice how they make and change suggestions.",
      "Complete the quiz and compare your choices with the answer key."
    ],
    vocabulary: [
      { word: "up for", meaning: "estar com vontade de fazer algo", example: "Are you up for a movie?" },
      { word: "instead", meaning: "em vez disso; como alternativa", example: "Let's stay home instead." },
      { word: "sounds good", meaning: "parece uma boa ideia", example: "Dinner at eight? Sounds good." }
    ],
    questions: [
      { prompt: "What are the speakers discussing?", options: ["A work project", "Weekend plans", "A new apartment"], answer: "Weekend plans" },
      { prompt: "Which phrase accepts a suggestion?", options: ["Sounds good", "Not yet", "I forgot"], answer: "Sounds good" },
      { prompt: "What does “instead” introduce?", options: ["A reason", "An alternative", "A question"], answer: "An alternative" }
    ]
  },
  {
    slug: "lost-in-the-city", title: "Lost in the City", category: "Travel English",
    description: "Como pedir ajuda, confirmar uma direção e chegar ao lugar certo.",
    level: "Intermediate · B1", duration: "9 min", icon: "↗", videoId: "aqz-KE-bpKQ",
    directions: [
      "Watch the scene and identify the destination before reading the vocabulary.",
      "Listen again for direction words and repeat each useful sentence aloud.",
      "Answer the questions without replaying the video, then check your answers."
    ],
    vocabulary: [
      { word: "across from", meaning: "do outro lado, em frente a", example: "The station is across from the bank." },
      { word: "block", meaning: "quarteirão", example: "Walk two blocks and turn right." },
      { word: "miss", meaning: "não perceber ou passar do ponto", example: "You can't miss the red building." }
    ],
    questions: [
      { prompt: "Why does the traveler ask for help?", options: ["They are lost", "They need money", "They missed a train"], answer: "They are lost" },
      { prompt: "What is a city block?", options: ["A building", "A section between streets", "A traffic light"], answer: "A section between streets" },
      { prompt: "Which sentence is polite?", options: ["Where is it?", "Tell me now", "Could you tell me how to get there?"], answer: "Could you tell me how to get there?" }
    ]
  }
];

export const getLesson = (slug: string) => lessons.find((lesson) => lesson.slug === slug);
