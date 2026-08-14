export type Lesson = {
  slug: string; title: string; description: string; category: string; level: string;
  duration: string; videoId: string; videoStart?: number; videoEnd?: number; directions: string[];
  vocabulary: { word: string; meaning: string; example: string }[];
  questions: { prompt: string; options: string[]; answer: string }[];
  grammarExercises?: { parts: string[]; choices: { options: string[]; answer: string }[] }[];
  sentenceBuilding?: { words: string; answer: string; acceptedAnswers?: string[] }[];
  audioClip?: { start: number; end: number; transcript: string };
  scriptScenes?: { speaker: string; text: string }[][];
};

export const lessons: Lesson[] = [
  {
    slug: "coffee-to-go", title: "The IT Crowd | The New Manager (1)", category: "Workplace English",
    description: "Jen meets her new boss, talks about her computer skills and discovers the IT department she will manage.",
    level: "Intermediate · B1", duration: "4 min", videoId: "NWX3g4g04FE", videoStart: 0, videoEnd: 240,
    directions: [
      "Watch the four-minute clip once without pausing. Focus on Jen's first day and the characters' reactions.",
      "Watch it again and listen for the expressions listed below.",
      "Complete the comprehension, grammar and sentence-building activities, then check your answers."
    ],
    vocabulary: [
      { word: "get to grips with", meaning: "to begin to understand or deal with something", example: "I'm looking forward to getting to grips with the new role." },
      { word: "know your stuff", meaning: "to be knowledgeable or skilled in a subject", example: "You certainly seem to know your stuff." },
      { word: "sort something out", meaning: "to resolve a problem or difficult situation", example: "I'm going to sort this out." }
    ],
    questions: [
      { prompt: "Why does the CEO put Jen in the IT department?", options: ["She asks to work there", "Her C.V. says she has computer experience", "The department has no staff"], answer: "Her C.V. says she has computer experience" },
      { prompt: "What does Roy first tell the caller to try?", options: ["Turning the computer off and on again", "Buying a new computer", "Calling the manager"], answer: "Turning the computer off and on again" },
      { prompt: "How does Jen introduce herself to Roy and Moss?", options: ["As the new head of the department", "As their new assistant", "As a computer engineer"], answer: "As the new head of the department" }
    ],
    grammarExercises: [
      { parts: ["Jen ", " a lot of experience with computers."], choices: [{ options: ["has", "have"], answer: "has" }] },
      { parts: ["Have you tried ", " it off and on again?"], choices: [{ options: ["turn", "turning"], answer: "turning" }] },
      { parts: ["The people I'll be working with — what ", " they like?"], choices: [{ options: ["is", "are"], answer: "are" }] }
    ],
    sentenceBuilding: [
      {
        words: "CEO / put / Jen / IT / because / experience / computers",
        answer: "The CEO puts Jen in IT because she has experience with computers.",
        acceptedAnswers: ["The CEO puts Jen in the IT department because she has experience with computers."]
      },
      {
        words: "Roy / ask / caller / turn / computer / off / on / again",
        answer: "Roy asks the caller to turn the computer off and on again."
      },
      {
        words: "Jen / be / new / head / department",
        answer: "Jen is the new head of the department."
      },
      {
        words: "Roy / say / he / going / sort / this / out",
        answer: "Roy says he is going to sort this out.",
        acceptedAnswers: ["Roy says he's going to sort this out."]
      }
    ],
    audioClip: {
      start: 76.7,
      end: 79.6,
      transcript: "Have you tried turning it off and on again?"
    },
    scriptScenes: [
      [
        { speaker: "CEO", text: "So!" },
        { speaker: "Jen", text: "So." },
        { speaker: "CEO", text: "First day!" },
        { speaker: "Jen", text: "Yes." },
        { speaker: "CEO", text: "Scary!" },
        { speaker: "Jen", text: "Yes." },
        { speaker: "CEO", text: "So here you are." },
        { speaker: "Jen", text: "Yes. Really looking forward to getting to grips with..." },
        { speaker: "CEO", text: "I'm going to put you in IT, because you said on your C.V. you have a lot of experience with computers." },
        { speaker: "Jen", text: "I did say that on my C.V., yes. I have a lot of experience with the whole computer thing. You know, emails. Sending emails. Receiving emails. Deleting emails. Um... I could go on." },
        { speaker: "CEO", text: "Do." },
        { speaker: "Jen", text: "The web. Using mouse... mices. Using mice. Clicking, double clicking. The computer screen, of course. The keyboard. The bit that goes on the floor down there." },
        { speaker: "CEO", text: "The hard drive?" },
        { speaker: "Jen", text: "Correct." },
        { speaker: "CEO", text: "Uh-huh. Well, you certainly seem to know your stuff. That's settled. I've got a good feeling about you, Jen. And they need a new manager." },
        { speaker: "Jen", text: "Fantastic. So the people I'll be working with, what are they like?" },
        { speaker: "CEO", text: "Standard nerds!" }
      ],
      [
        { speaker: "Roy", text: "Hello, IT. Have you tried turning it off and on again? Okay, well, the button on the side, is it glowing? Yeah, you need to turn it on. The button turns it on. Yeah, you do know how a button works, don't you? No, not on clothes." },
        { speaker: "Moss", text: "Hello, IT. Yeah-huh. Have you tried forcing an unexpected reboot?" },
        { speaker: "Roy", text: "Oh, really? Really? Well, why don't you come down here and make me, then? What? You think I'm afraid of you? I'm not afraid of you. You can come down here any time and I'll be waiting for you." },
        { speaker: "Roy", text: "That told her." }
      ],
      [
        { speaker: "Jen", text: "Hello. Hello." },
        { speaker: "Roy", text: "Yes, I believe it was Tolstoy who said... Oh, it seems we have a visitor. I'm sorry, myself and Maurice were just engaged in a serious discussion about books and such. We didn't hear you come in." },
        { speaker: "Moss", text: "Wait a second. You said it was Tolstoy who said what?" },
        { speaker: "Roy", text: "Oh, never mind that now, Maurice." },
        { speaker: "Moss", text: "When have you read Tolstoy?" },
        { speaker: "Roy", text: "Shut up, Maurice." },
        { speaker: "Moss", text: "Why are you speaking in that weird voice? When did...? I don't remember this conversation at all." },
        { speaker: "Jen", text: "Don't let me disturb you. I just wanted to come..." },
        { speaker: "Roy", text: "Oh, don't be silly, you never disturbed us." },
        { speaker: "Roy", text: "Many people come down here to visit." },
        { speaker: "Moss", text: "What are you talking about? Who comes down? What people? Why are you giving me the secret signal to shut up?" },
        { speaker: "Roy", text: "So, what can we do you for?" },
        { speaker: "Jen", text: "I'm the new head of this department. Is this my office?" },
        { speaker: "Roy", text: "Why...? What did she...? Did she just say what...? I am the head of this department." },
        { speaker: "Moss", text: "I thought I was." },
        { speaker: "Roy", text: "Well, it's one of us. It's certainly not her. I'm going to sort this out." }
      ]
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
