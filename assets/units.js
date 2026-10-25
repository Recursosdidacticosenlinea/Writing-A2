/* CAA Writing A2 — content of the 10 units (units 9–10 are a B1 bridge: `level: "B1"`).
   Each unit has 5 steps (≈30 min): 1 Get ready (model), 2–3 Focus, 4 Plan, 5 Write & check.
   Activity types: mc (options per item or shared `options`), gap ([[answer|alt]]), order, fix (rewrite), plan, write.
   Plan fields with `note: true` are brainstorming notes: they are saved but do not go into the draft.
   Every text here is original. */
window.GW_UNITS = [

/* ───────────────────────── UNIT 1 ───────────────────────── */
{
  n: 1, title: "Paragraphs", focus: "The four features of a good paragraph · simple present · subject–verb agreement",
  product: "A paragraph about a job that is very difficult",
  cando: "I can write a paragraph with the four features of a good paragraph.",
  vocab: [
    { w: "career", d: "the job you do for a long time" },
    { w: "challenge", d: "something difficult that tests your ability" },
    { w: "dangerous", d: "it can hurt you" },
    { w: "effort", d: "the energy you use to do something" },
    { w: "patient", d: "calm when you wait or have problems" },
    { w: "pressure", d: "a feeling that you must do something" },
    { w: "responsible", d: "it is your job to take care of something" },
    { w: "skill", d: "an ability that you learn and practice" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a model paragraph. Look for the four features of a good paragraph.",
      model: { title: "Nurses Have a Very Difficult Job", text: "Nurses have a very difficult job. First, they work long hours. Many nurses work twelve-hour shifts, and they often work at night or on holidays. Second, their job is physically hard. They stand for most of the day, and they lift and move patients. In addition, nurses need a lot of knowledge. They must understand medicines, machines, and many different illnesses. Finally, the job is emotionally difficult because nurses see people in pain every day. For all these reasons, nursing is one of the hardest careers in the world." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "What is the main idea of the paragraph?", o: ["Nurses work in hospitals.", "Nurses have a very difficult job.", "Nurses earn a lot of money."], a: 1 },
            { q: "How long are many nurses' shifts?", o: ["Eight hours", "Ten hours", "Twelve hours"], a: 2 },
            { q: "Why is the job physically hard?", o: ["Nurses stand all day and lift patients.", "Nurses drive a lot.", "Nurses study at night."], a: 0 },
            { q: "Why is the job emotionally difficult?", o: ["Nurses work on holidays.", "Nurses see people in pain every day.", "Nurses use machines."], a: 1 }
          ] },
        { type: "mc", title: "The four features", instr: "A good paragraph has four features. Find them in the model.",
          items: [
            { q: "Which sentence is the topic sentence?", o: ["Nurses have a very difficult job.", "First, they work long hours.", "They must understand medicines."], a: 0 },
            { q: "Which sentence is the concluding sentence?", o: ["Finally, the job is emotionally difficult.", "For all these reasons, nursing is one of the hardest careers in the world.", "In addition, nurses need a lot of knowledge."], a: 1 },
            { q: "Are all the sentences about the topic?", o: ["Yes, they are all about why the job is difficult.", "No, some sentences are about the writer's family."], a: 0 },
            { q: "What do you do with the first line of a paragraph?", o: ["Write it in capital letters.", "Indent it (start a little to the right).", "Skip it."], a: 1 }
          ] }
      ] },
    { title: "Simple present · agreement", min: 6,
      goal: "Use the simple present for general facts, with correct subject–verb agreement.",
      teach: `<p>Use the <b>simple present</b> for general facts and things that are always true: <i>Firefighters <b>work</b> long hours. A pilot <b>needs</b> a license.</i></p>
<p><b>Subject–verb agreement:</b> he / she / it / a singular noun + <b>verb-s</b>. I / you / we / they / plural noun + <b>base verb</b>.</p>
<table class="mini"><tr><th>Careful with…</th><th>Example</th></tr>
<tr><td>everyone, everybody, nobody = singular</td><td>Everyone <b>needs</b> a break.</td></tr>
<tr><td>people, children = plural</td><td>People <b>are</b> friendly here.</td></tr>
<tr><td>long subjects: find the main noun</td><td>The students in my class <b>study</b> hard.</td></tr>
<tr><td>there is / there are + noun</td><td>There <b>are</b> many risks.</td></tr></table>`,
      acts: [
        { type: "gap", title: "Write the verb", instr: "Write the simple present form of the verb in parentheses.",
          items: [
            "A firefighter [[risks]] (risk) his or her life every day.",
            "Doctors [[need]] (need) many years of study.",
            "My aunt [[teaches]] (teach) in a small village.",
            "A good teacher [[has]] (have) a lot of patience.",
            "Pilots [[fly]] (fly) thousands of kilometers every week.",
            "The police officer [[carries]] (carry) a radio.",
            "Everyone in my family [[works]] (work) on weekends.",
            "The workers on this farm [[start]] (start) at five in the morning."
          ] },
        { type: "mc", title: "Agreement with tricky subjects", instr: "Choose the correct verb.",
          items: [
            { q: "Everybody ___ a vacation sometimes.", o: ["need", "needs"], a: 1 },
            { q: "People in my city ___ very friendly.", o: ["is", "are"], a: 1 },
            { q: "The doctors at this hospital ___ in three languages.", o: ["speak", "speaks"], a: 0, why: "The main noun is doctors (plural)." },
            { q: "There ___ many dangers in this job.", o: ["is", "are"], a: 1 },
            { q: "My brother's job ___ very stressful.", o: ["sound", "sounds"], a: 1 },
            { q: "Nobody ___ to work on Christmas Day.", o: ["want", "wants"], a: 1 }
          ] }
      ] },
    { title: "Capital letters · end punctuation", min: 6,
      goal: "Check capital letters and end punctuation like an editor.",
      teach: `<p><b>Capitalize:</b> the first word of a sentence, <b>I</b>, names of people and places, days, months, holidays, languages, nationalities, and the important words in titles (<i>The Day of the Dead</i>).</p>
<p><b>Do not capitalize</b> seasons (<i>summer</i>), school subjects that are not languages (<i>math</i>), or jobs without a name (<i>a doctor</i> but <i>Doctor Ruiz</i>).</p>
<p><b>End punctuation:</b> a period (.) for statements, a question mark (?) for questions, an exclamation point (!) for strong feelings — but use “!” very little in academic writing.</p>`,
      acts: [
        { type: "fix", strict: true, prefill: true, title: "Correct the capital letters", instr: "Rewrite each sentence with the correct capital letters and punctuation.",
          items: [
            { q: "my cousin is a Nurse at the general hospital in guadalajara.", a: ["My cousin is a nurse at the General Hospital in Guadalajara.", "My cousin is a nurse at the general hospital in Guadalajara."] },
            { q: "every Summer, doctor ramírez travels to oaxaca.", a: ["Every summer, Doctor Ramírez travels to Oaxaca.", "Every summer, Dr. Ramírez travels to Oaxaca."] },
            { q: "in september, we celebrate mexican independence day", a: ["In September, we celebrate Mexican Independence Day."] },
            { q: "does your father work on sundays", a: ["Does your father work on Sundays?"] },
            { q: "my favorite book is the old man and the sea.", a: ["My favorite book is The Old Man and the Sea."] }
          ] },
        { type: "mc", title: "Which end punctuation?", instr: "Choose the best end punctuation for academic writing.", options: [". (period)", "? (question mark)", "! (exclamation point)"],
          items: [
            { q: "Miners work hundreds of meters under the ground", a: ". (period)" },
            { q: "Why do people choose such dangerous jobs", a: "? (question mark)" },
            { q: "Wow, that is incredible", a: "! (exclamation point)" },
            { q: "A pilot needs thousands of hours of training", a: ". (period)" },
            { q: "How many hours does a surgeon work in a day", a: "? (question mark)" }
          ] }
      ] },
    { title: "Plan", min: 6,
      goal: "Choose a job that is very difficult. Give three reasons and details.",
      acts: [
        { type: "plan", title: "Plan your paragraph", instr: "Write one or two sentences for each part. Use the simple present.",
          fields: [
            { id: "title", label: "Title", ph: "Firefighters Are Real Heroes", title: true },
            { id: "topic", label: "Topic sentence — complete: A ____ has a very difficult job.", ph: "A firefighter has a very difficult job." },
            { id: "r1", label: "Reason 1", ph: "First, the job is very dangerous." },
            { id: "d1", label: "Details for reason 1", ph: "Firefighters enter burning buildings, and they breathe smoke." },
            { id: "r2", label: "Reason 2", ph: "Second, firefighters work under a lot of pressure." },
            { id: "d2", label: "Details for reason 2", ph: "They need to make important decisions in seconds." },
            { id: "r3", label: "Reason 3", ph: "Finally, their schedule is hard." },
            { id: "d3", label: "Details for reason 3", ph: "Many firefighters sleep at the station and work on holidays." },
            { id: "conc", label: "Concluding sentence", ph: "Being a firefighter is a difficult career, but it is also very important." }
          ] }
      ] },
    { title: "Write & check", min: 8,
      goal: "Write your paragraph, check it, and save it.",
      acts: [
        { type: "write", title: "A very difficult job",
          instr: "Write one paragraph about a job that is very difficult. Use the four features of a good paragraph.",
          moves: ["Title.", "Topic sentence: which job is difficult?", "Three reasons with details (5–12 sentences that are all about the topic).", "Concluding sentence."],
          minWords: 90, maxWords: 200,
          rubric: [
            { type: "title", pts: 1 },
            { type: "first", pts: 1, re: "\\b(difficult|hard|challenging|tough|dangerous|stressful)\\b", label: "Topic sentence with the main idea", tip: "Begin with: A ____ has a very difficult job." },
            { type: "has", re: "\\b(first|second|third|in addition|also|another|finally)\\b", min: 2, pts: 1, label: "Words to introduce reasons", tip: "Introduce your reasons with First, Second, In addition, Finally." },
            { type: "agree", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "sentences", min: 8, pts: 1 },
            { type: "complete", pts: 1 },
            { type: "caps", pts: 1 },
            { type: "punct", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My paragraph has a topic sentence.", "All my sentences are about the topic.", "My paragraph has a concluding sentence.", "My verbs agree with their subjects (he works / they work).", "I used capital letters and end punctuation correctly."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 2 ───────────────────────── */
{
  n: 2, title: "Developing Ideas for Writing", focus: "Brainstorming · exact adjectives · simple and compound sentences",
  product: "A paragraph about sports, technology or vacations",
  cando: "I can brainstorm ideas and use them to write a paragraph with compound sentences.",
  vocab: [
    { w: "advantage", d: "something that helps you; a good point" },
    { w: "communicate", d: "to share information with others" },
    { w: "convenient", d: "easy to use; it saves time" },
    { w: "device", d: "a machine or tool, like a phone or tablet" },
    { w: "entertainment", d: "things that people enjoy, like movies or games" },
    { w: "relaxing", d: "it makes you feel calm" },
    { w: "remind", d: "to help someone remember something" },
    { w: "unfamiliar", d: "new for you; you don't know it" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a model paragraph. The writer brainstormed ideas about technology first.",
      model: { title: "My Smartphone Makes Life Easier", text: "My smartphone makes my life much easier. In the morning, its loud alarm wakes me up, and its calendar reminds me about my classes. On the bus, I listen to podcasts, so the long trip feels short. At the university, I use a dictionary app when I find an unfamiliar word. My phone also helps me with money. I pay for my coffee with it, and I check my bank account in seconds. In the evening, I make video calls to my grandparents in Veracruz. My smartphone is a small but powerful device in my daily life." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "What is the main idea?", o: ["Smartphones are expensive.", "The writer's smartphone makes life easier.", "Podcasts are interesting."], a: 1 },
            { q: "What does the writer do on the bus?", o: ["Listens to podcasts", "Pays for coffee", "Calls friends"], a: 0 },
            { q: "When does the writer use a dictionary app?", o: ["In the evening", "When there is an unfamiliar word", "On the bus"], a: 1 },
            { q: "How is the paragraph organized?", o: ["From morning to evening", "From the worst to the best idea", "In alphabetical order"], a: 0 }
          ] },
        { type: "mc", title: "Cross out the weak idea", instr: "A writer brainstormed ideas for each topic. Which idea does NOT belong in the paragraph?",
          items: [
            { q: "Topic: Why I love beach vacations", o: ["the warm water", "fresh seafood", "my new laptop", "long walks at sunset"], a: 2 },
            { q: "Topic: Soccer is good for children", o: ["they make friends", "they get exercise", "the World Cup final in 1970", "they learn teamwork"], a: 2 },
            { q: "Topic: Problems with social media", o: ["fake news", "my favorite pizza", "less sleep", "comparing yourself to others"], a: 1 }
          ] }
      ] },
    { title: "Exact adjectives", min: 6,
      goal: "Replace general adjectives (good, nice, bad) with more exact adjectives.",
      teach: `<p>Brainstorming gives you <b>ideas</b>; good adjectives give your ideas <b>color</b>.</p>
<p>Words like <i>good, nice, bad, big</i> are very general. Use <b>exact adjectives</b>:</p>
<table class="mini"><tr><th>General</th><th>More exact</th></tr>
<tr><td>good food</td><td><b>delicious</b> food</td></tr><tr><td>a nice beach</td><td>a <b>peaceful</b> beach</td></tr>
<tr><td>a bad day</td><td>an <b>exhausting</b> day</td></tr><tr><td>very big</td><td><b>enormous</b></td></tr>
<tr><td>very cold</td><td><b>freezing</b></td></tr><tr><td>full of people</td><td><b>crowded</b></td></tr></table>
<p>Adjectives go <b>before the noun</b> or <b>after be</b>: <i>a crowded market / The market is crowded.</i></p>`,
      acts: [
        { type: "gap", title: "Choose an exact adjective", instr: "Complete with an adjective from the box.", bank: ["delicious", "crowded", "exhausted", "freezing", "enormous", "fascinating"],
          items: [
            "The mole at my grandmother's house is [[delicious]].",
            "After the marathon, I was [[exhausted]].",
            "The water in the lake was [[freezing]], so we did not swim.",
            "On Saturdays, the market is very [[crowded]].",
            "The Estadio Azteca is [[enormous]]. It has more than 80,000 seats.",
            "The documentary about the ocean was [[fascinating]]."
          ] },
        { type: "mc", title: "The more exact sentence", instr: "Which sentence gives the reader a clearer picture?",
          items: [
            { q: "1", o: ["The hotel was nice.", "The hotel was quiet and spotless."], a: 1 },
            { q: "2", o: ["My new tablet is fast and lightweight.", "My new tablet is good."], a: 0 },
            { q: "3", o: ["We had a bad trip.", "We had a long, uncomfortable trip."], a: 1 },
            { q: "4", o: ["The view from the mountain was breathtaking.", "The view from the mountain was very nice."], a: 0 }
          ] }
      ] },
    { title: "Simple and compound sentences", min: 6,
      goal: "Use compound sentences with a comma + and, but, so, or.",
      teach: `<p>A <b>simple sentence</b> has one subject–verb idea. It can have two nouns or two verbs: <i>My brother and I <b>play</b> and <b>watch</b> soccer.</i> (still simple — no comma)</p>
<p>A <b>compound sentence</b> = two complete sentences + <b>comma</b> + <b>and / but / so / or</b>:</p>
<p><i>I love the beach<b>, but</b> my sister prefers the mountains.</i><br><i>It was raining<b>, so</b> we stayed in the hotel.</i></p>`,
      acts: [
        { type: "mc", title: "Simple or compound?", instr: "Is the sentence simple or compound?", options: ["Simple", "Compound"],
          items: [
            { q: "My friends and I play basketball on Fridays.", a: "Simple", why: "Two subjects, but only one sentence." },
            { q: "I play basketball, and my sister plays volleyball.", a: "Compound" },
            { q: "We swam and ate fish tacos at the beach.", a: "Simple", why: "Two verbs, but only one subject." },
            { q: "The tickets were expensive, so we watched the game at home.", a: "Compound" },
            { q: "You can take the bus, or you can ride a bike.", a: "Compound" },
            { q: "My phone has a great camera and a long battery life.", a: "Simple" }
          ] },
        { type: "fix", title: "Make compound sentences", instr: "Join the two sentences with a comma and the word in parentheses.",
          items: [
            { q: "Cancún is beautiful. It is very expensive. (but)", a: ["Cancún is beautiful, but it is very expensive."] },
            { q: "I forgot my charger. My phone died. (so)", a: ["I forgot my charger, so my phone died."] },
            { q: "My father watches baseball. My mother prefers soccer. (but)", a: ["My father watches baseball, but my mother prefers soccer."] },
            { q: "We can go camping. We can stay in a hotel. (or)", a: ["We can go camping, or we can stay in a hotel."] }
          ] }
      ] },
    { title: "Brainstorm & plan", min: 7,
      goal: "Choose sports, technology or vacations. Brainstorm first, then plan your sentences.",
      acts: [
        { type: "plan", title: "Brainstorm and plan", instr: "First write quick notes (the yellow boxes are only for you). Then write your sentences. Include at least two compound sentences.",
          fields: [
            { id: "topic", label: "Topic: sports, technology or vacations?", ph: "vacations — camping in the mountains", note: true },
            { id: "i1", label: "Idea 1", ph: "fresh air, pine trees", note: true },
            { id: "i2", label: "Idea 2", ph: "no phones, talking with family", note: true },
            { id: "i3", label: "Idea 3", ph: "cooking on a fire", note: true },
            { id: "i4", label: "Idea 4 (you can cross it out later)", ph: "my cousin's car is red", note: true, optional: true },
            { id: "title", label: "Title", ph: "The Magic of Camping", title: true },
            { id: "ts", label: "Topic sentence", ph: "Camping in the mountains is the best kind of vacation for my family." },
            { id: "s1", label: "Idea 1 in sentences", ph: "The air is fresh, and the tall pine trees smell wonderful." },
            { id: "s2", label: "Idea 2 in sentences", ph: "There is no signal for our phones, so we talk for hours around the fire." },
            { id: "s3", label: "Idea 3 in sentences", ph: "We cook delicious quesadillas on the fire every night." },
            { id: "conc", label: "Concluding sentence", ph: "For my family, a simple tent in the mountains is better than an expensive hotel." }
          ] }
      ] },
    { title: "Write & check", min: 6,
      goal: "Write your paragraph, check it, and save it.",
      acts: [
        { type: "write", title: "Sports, technology or vacations",
          instr: "Write a paragraph of 5–10 sentences from your brainstorming. Include at least two compound sentences and exact adjectives.",
          moves: ["Title.", "Topic sentence with the main idea.", "Supporting sentences from your best ideas (not the weak ones).", "At least two compound sentences with commas.", "Concluding sentence."],
          minWords: 80, maxWords: 180,
          rubric: [
            { type: "title", pts: 1 },
            { type: "has", re: ",\\s*(and|but|so|or)\\s", min: 2, pts: 2, label: "Two compound sentences", tip: "Write at least two compound sentences: sentence + comma + and/but/so/or + sentence." },
            { type: "few", re: "\\b(good|nice|bad|very big|very small)\\b", max: 2, pts: 1, label: "Exact adjectives", ok: "You avoid general adjectives.", tip: "Replace general adjectives (good, nice, bad) with exact ones (delicious, peaceful, exhausting…)." },
            { type: "agree", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "sentences", min: 6, pts: 1 },
            { type: "caps", pts: 1 },
            { type: "punct", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My paragraph has a topic sentence that states the main idea.", "All of the sentences are about the topic (I crossed out weak ideas).", "I used at least two compound sentences with commas.", "I used a variety of exact adjectives.", "My paragraph has a title and a concluding sentence."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 3 ───────────────────────── */
{
  n: 3, title: "Topic Sentences", focus: "Topic + controlling idea · complex sentences · commas",
  product: "A paragraph about learning a language, with a strong topic sentence",
  cando: "I can write a topic sentence with a clear controlling idea.",
  vocab: [
    { w: "confident", d: "sure that you can do something" },
    { w: "culture", d: "the customs, art and ideas of a group of people" },
    { w: "fluent", d: "able to speak a language easily" },
    { w: "improve", d: "to get better" },
    { w: "mistake", d: "an error" },
    { w: "native speaker", d: "a person who learned the language as a child" },
    { w: "opportunity", d: "a good chance to do something" },
    { w: "practice", d: "to do something many times to get better" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a model paragraph. Notice how the topic sentence controls the paragraph.",
      model: { title: "Elephant Talk", text: "Elephants communicate in surprising ways. When two elephants meet, they often touch each other with their trunks. This is how they say hello. Elephants also make very low sounds. Although humans cannot hear these sounds, other elephants can hear them from several kilometers away. In addition, elephants use their feet to “listen.” They feel small movements in the ground when other elephants are walking. Because they have these special skills, elephants stay in contact with their family even when they are far apart. Elephants are truly expert communicators." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "How do elephants say hello?", o: ["They make loud sounds.", "They touch each other with their trunks.", "They stamp their feet."], a: 1 },
            { q: "Why can't people hear some elephant sounds?", o: ["The sounds are very low.", "Elephants talk at night.", "The sounds are very far away."], a: 0 },
            { q: "How do elephants “listen” with their feet?", o: ["They feel movements in the ground.", "They have ears on their feet.", "They dig holes."], a: 0 }
          ] },
        { type: "mc", title: "Topic and controlling idea", instr: "A topic sentence has a topic and a controlling idea (what you will say about the topic).",
          items: [
            { q: "In “Elephants communicate in surprising ways,” what is the topic?", o: ["elephants", "surprising ways"], a: 0 },
            { q: "In the same sentence, what is the controlling idea?", o: ["elephants", "communicate in surprising ways"], a: 1 },
            { q: "In “Learning a second language has three big benefits,” what is the controlling idea?", o: ["learning a second language", "has three big benefits"], a: 1 }
          ] }
      ] },
    { title: "Features of a topic sentence", min: 6,
      goal: "Recognize strong and weak topic sentences.",
      teach: `<p>A good topic sentence:</p><ul><li>has a <b>topic</b> and a <b>controlling idea</b>: <i>Learning English <b>opens many doors</b>.</i></li>
<li>is <b>not too general</b>: ✗ <i>Languages are interesting.</i></li>
<li>is <b>not too specific</b> (a single fact): ✗ <i>English has 26 letters.</i></li>
<li>is <b>not an announcement</b>: ✗ <i>I am going to write about English.</i> / ✗ <i>This paragraph is about…</i></li>
<li>is a complete sentence, not a question.</li></ul>`,
      acts: [
        { type: "mc", title: "Good, too general or too specific?", instr: "Decide what kind of topic sentence it is.", options: ["Good topic sentence", "Too general", "Too specific"],
          items: [
            { q: "Food is important.", a: "Too general" },
            { q: "Learning a language at a young age has several advantages.", a: "Good topic sentence" },
            { q: "Spanish has about 500 million native speakers.", a: "Too specific" },
            { q: "Sports are fun.", a: "Too general" },
            { q: "Watching series in English is an excellent way to improve your listening.", a: "Good topic sentence" },
            { q: "The word “hello” has five letters.", a: "Too specific" }
          ] },
        { type: "mc", title: "Choose the best topic sentence", instr: "Which one is the best topic sentence for a paragraph?",
          items: [
            { q: "1", o: ["I am going to write about learning English.", "There are three effective ways to learn new English words.", "Do you want to learn English?"], a: 1 },
            { q: "2", o: ["Travel is good.", "This paragraph is about traveling.", "Traveling alone teaches you to be independent."], a: 2 },
            { q: "3", o: ["Making mistakes is an important part of learning a language.", "I made a mistake yesterday.", "Mistakes."], a: 0 }
          ] }
      ] },
    { title: "Complex sentences · commas", min: 6,
      goal: "Use because, although, when, if, after and before, with correct commas.",
      teach: `<p>A <b>complex sentence</b> has a main clause and a <b>dependent clause</b> that begins with <i>because, although, when, if, after, before, while</i>.</p>
<p>Clause first → <b>comma</b>: <i><b>Although</b> English is difficult<b>,</b> I enjoy it.</i><br>Clause second → no comma: <i>I enjoy English <b>although</b> it is difficult.</i></p>
<p><b>Other commas:</b> in lists of three or more (<i>reading, writing, and speaking</i>), and after introductory words (<i>However, … / For example, … / First, …</i>).</p>`,
      acts: [
        { type: "mc", title: "Comma or no comma?", instr: "Choose the sentence with correct commas.",
          items: [
            { q: "1", o: ["Because I watch movies in English, my listening is improving.", "Because I watch movies in English my listening, is improving."], a: 0 },
            { q: "2", o: ["I feel nervous, when I speak English.", "I feel nervous when I speak English."], a: 1 },
            { q: "3", o: ["You need patience practice and good materials.", "You need patience, practice, and good materials."], a: 1 },
            { q: "4", o: ["However, many students are afraid of mistakes.", "However many students, are afraid of mistakes."], a: 0 },
            { q: "5", o: ["If you practice every day, you will improve quickly.", "If you practice every day you will, improve quickly."], a: 0 }
          ] },
        { type: "fix", title: "Make complex sentences", instr: "Join the sentences with the word in parentheses. Put the clause first and use a comma.",
          items: [
            { q: "English is difficult. I enjoy it. (although)", a: ["Although English is difficult, I enjoy it."] },
            { q: "I want a better job. I am learning English. (because)", a: ["Because I want a better job, I am learning English."] },
            { q: "I don't know a word. I check my dictionary. (when)", a: ["When I don't know a word, I check my dictionary.", "When I do not know a word, I check my dictionary."] },
            { q: "You speak with native speakers. You will learn faster. (if)", a: ["If you speak with native speakers, you will learn faster."] }
          ] }
      ] },
    { title: "Brainstorm & plan", min: 7,
      goal: "Topic: learning a language. Find your controlling idea first.",
      acts: [
        { type: "plan", title: "Brainstorm and plan", instr: "Write quick notes first. Then write a topic sentence with a clear controlling idea and supporting sentences that follow it.",
          fields: [
            { id: "n1", label: "What do you want to say about learning a language? (notes)", ph: "benefits / best ways to learn / why it is difficult", note: true },
            { id: "n2", label: "Three ideas that support it (notes)", ph: "movies with subtitles, apps, talking with people", note: true },
            { id: "title", label: "Title", ph: "Learning English Outside the Classroom", title: true },
            { id: "ts", label: "Topic sentence (topic + controlling idea)", ph: "There are three fun ways to practice English outside the classroom." },
            { id: "s1", label: "Support 1 + detail", ph: "First, you can watch series in English. When you use English subtitles, you learn new words and hear the pronunciation." },
            { id: "s2", label: "Support 2 + detail", ph: "Second, language apps are very convenient. If you practice for ten minutes every day, you will improve a lot." },
            { id: "s3", label: "Support 3 + detail", ph: "Finally, you can talk with native speakers online. Although it is scary at first, it makes you confident." },
            { id: "conc", label: "Concluding sentence", ph: "Practicing English outside the classroom is easy, and it can be a lot of fun." }
          ] }
      ] },
    { title: "Write & check", min: 6,
      goal: "Write your paragraph, check it, and save it.",
      acts: [
        { type: "write", title: "Learning a language",
          instr: "Write a paragraph about learning a language. Begin with a topic sentence that has a clear controlling idea. Use at least two complex sentences.",
          moves: ["Title.", "Topic sentence with a controlling idea (not an announcement).", "Supporting sentences that follow the controlling idea.", "At least two complex sentences (because, although, when, if…).", "Concluding sentence."],
          minWords: 90, maxWords: 200,
          rubric: [
            { type: "title", pts: 1 },
            { type: "firstNot", re: "(going to (write|talk|tell)|this paragraph|in this paragraph|i will (write|talk|tell)|\\?)", pts: 1, label: "Topic sentence is not an announcement", tip: "Don't write “I am going to write about…”. State your controlling idea: Learning English opens many doors." },
            { type: "has", re: "\\b(because|although|when|if|after|before|while)\\b", min: 2, pts: 1, label: "Two complex sentences", tip: "Use because, although, when or if in at least two sentences." },
            { type: "clauseComma", pts: 1 },
            { type: "has", re: "\\b(languages?|english|french|spanish|learn\\w*|speak\\w*|words?)\\b", min: 3, pts: 1, label: "On topic (learning a language)", tip: "Every sentence should be about learning a language." },
            { type: "splice", pts: 1 },
            { type: "sentences", min: 7, pts: 1 },
            { type: "caps", pts: 1 },
            { type: "punct", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My topic sentence has a topic and a controlling idea.", "My topic sentence is not too general, too specific or an announcement.", "All my supporting sentences follow the controlling idea.", "I used at least two complex sentences with correct commas.", "My paragraph has a title and a concluding sentence."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 4 ───────────────────────── */
{
  n: 4, title: "Supporting and Concluding Sentences", focus: "Unity · pronouns · fragments, run-ons and comma splices · conclusions",
  product: "A paragraph about the best place in your city for something",
  cando: "I can support my topic sentence with related details and end with a strong concluding sentence.",
  vocab: [
    { w: "atmosphere", d: "the feeling a place has" },
    { w: "available", d: "you can use it or get it" },
    { w: "convenient", d: "easy to use or get to" },
    { w: "location", d: "the place where something is" },
    { w: "reasonable", d: "not too expensive; fair" },
    { w: "recommend", d: "to say that something is good" },
    { w: "service", d: "the help a business gives its customers" },
    { w: "variety", d: "many different types" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a model. Every supporting sentence answers a question the reader may have.",
      model: { title: "The Perfect Place to Study", text: "The central library is the best place to study in my city. First, it is very quiet. Nobody talks on the phone, and there are signs everywhere that remind people to be silent. Second, the library has everything a student needs. It has fast Wi-Fi, comfortable chairs, and thousands of books. It also has study rooms that groups can reserve for free. Finally, the library is in a convenient location. It is next to the main bus station, so students from all over the city can arrive quickly. With its quiet rooms, useful services, and great location, the central library is the perfect place to study." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "What is the topic sentence?", o: ["The central library is the best place to study in my city.", "First, it is very quiet.", "It has fast Wi-Fi."], a: 0 },
            { q: "Which question does “It is next to the main bus station” answer?", o: ["Is it quiet?", "Is it easy to get there?", "Is it free?"], a: 1 },
            { q: "What does the concluding sentence do?", o: ["It gives a new idea.", "It summarizes the three reasons.", "It asks a question."], a: 1 },
            { q: "In “It has fast Wi-Fi,” what does It mean?", o: ["the bus station", "the library", "the city"], a: 1 }
          ] }
      ] },
    { title: "Unity and pronouns", min: 6,
      goal: "Keep every sentence on topic, and use pronouns instead of repeating key nouns.",
      teach: `<p><b>Unity:</b> every supporting sentence must be about the controlling idea. Delete sentences with <b>unrelated information</b>, even if they are true and interesting.</p>
<p><b>Pronouns:</b> after you mention a key noun, use a pronoun so you don't repeat it too much: <i>The library is quiet. <b>It</b> also has fast Wi-Fi.</i> Make sure the reader knows what the pronoun refers to.</p>`,
      acts: [
        { type: "mc", title: "Find the unrelated sentence", instr: "Which sentence does NOT belong in the paragraph?",
          items: [
            { q: "Topic sentence: Parque Ecológico is a great place for families.", o: ["It has a big playground for children.", "There are cheap snacks near the lake.", "My cousin bought a car last year.", "Families can rent bikes on weekends."], a: 2 },
            { q: "Topic sentence: The Sunday market has the best prices in town.", o: ["Avocados cost half the price of the supermarket.", "You can find clothes for very little money.", "The market opened in 1985.", "Sellers often give discounts if you buy a lot."], a: 2 },
            { q: "Topic sentence: My favorite café has a relaxing atmosphere.", o: ["Soft music plays all day.", "The chairs are big and comfortable.", "Coffee comes from Ethiopia and Brazil.", "The walls are painted in calm colors."], a: 2 }
          ] },
        { type: "gap", title: "Use pronouns", instr: "Replace the repeated noun with a pronoun from the box.", bank: ["It", "They", "them", "its", "she", "her"],
          items: [
            "The new gym is near my house. [[It]] opens at six in the morning.",
            "The trainers are very friendly. [[They]] help everyone.",
            "I like the classes, and I take [[them]] three times a week.",
            "The gym is famous for [[its]] swimming pool.",
            "My friend Lucía goes with me because [[she]] wants to get in shape.",
            "I always wait for Lucía, and then I drive [[her]] home."
          ] }
      ] },
    { title: "Fragments, run-ons, conclusions", min: 7,
      goal: "Write complete, correct sentences and a strong concluding sentence.",
      teach: `<table class="mini"><tr><th>Problem</th><th>Example ✗</th><th>Correction ✓</th></tr>
<tr><td><b>Fragment</b> (incomplete)</td><td>Because it is cheap.</td><td>I go there because it is cheap.</td></tr>
<tr><td><b>Comma splice</b> (two sentences + only a comma)</td><td>The café is small, it is always full.</td><td>The café is small, <b>but</b> it is always full. / The café is small. It is always full.</td></tr>
<tr><td><b>Run-on</b> (two sentences with nothing)</td><td>I love this park it is green.</td><td>I love this park <b>because</b> it is green.</td></tr></table>
<p>A <b>concluding sentence</b> repeats the main idea with different words, summarizes the reasons, or gives a suggestion or prediction. It does <b>not</b> add a new idea.</p>`,
      acts: [
        { type: "mc", title: "Correct, fragment or run-on?", instr: "Decide what each one is.", options: ["Correct", "Fragment", "Run-on / comma splice"],
          items: [
            { q: "The park is beautiful, it has many trees.", a: "Run-on / comma splice" },
            { q: "Because the tickets are cheap.", a: "Fragment" },
            { q: "The museum is free on Sundays, so it is very crowded.", a: "Correct" },
            { q: "I go there every week I love the food.", a: "Run-on / comma splice" },
            { q: "For example, the delicious tamales at the corner.", a: "Fragment" },
            { q: "When the weather is nice, we eat outside.", a: "Correct" }
          ] },
        { type: "mc", title: "Choose the best concluding sentence", instr: "Read the topic sentence. Which concluding sentence is best?",
          items: [
            { q: "Topic sentence: Plaza Central is the best place to go shopping in my city.", o: ["The plaza has a cinema too.", "With its many stores, fair prices, and easy parking, Plaza Central is the perfect place to shop.", "I bought shoes yesterday."], a: 1 },
            { q: "Topic sentence: The Zócalo is the best place to experience local culture.", o: ["If you want to understand our culture, start your visit in the Zócalo.", "The Zócalo is big.", "There is also a new mall on the highway."], a: 0 }
          ] }
      ] },
    { title: "Plan", min: 6,
      goal: "Choose a place in your city that is the best for something (studying, eating, relaxing, shopping…).",
      acts: [
        { type: "plan", title: "Plan your paragraph", instr: "Think about the questions a reader may ask (Why? Where? What can I do there?). Answer them in your supporting sentences.",
          fields: [
            { id: "q", label: "Questions a reader may ask (notes)", ph: "Where is it? Is it expensive? What can you do there?", note: true },
            { id: "title", label: "Title", ph: "The Best Tacos in Town", title: true },
            { id: "topic", label: "Topic sentence", ph: "Tacos Don Beto is the best place to eat in my neighborhood." },
            { id: "r1", label: "Reason 1", ph: "First, the food is delicious." },
            { id: "d1", label: "Details for reason 1", ph: "The tortillas are handmade, and the salsas are fresh every day." },
            { id: "r2", label: "Reason 2", ph: "Second, the prices are reasonable." },
            { id: "d2", label: "Details for reason 2", ph: "Five tacos and a drink cost less than one hundred pesos." },
            { id: "r3", label: "Reason 3", ph: "Finally, the service is fast and friendly." },
            { id: "d3", label: "Details for reason 3", ph: "Don Beto remembers his customers, and he always asks about their families." },
            { id: "conc", label: "Concluding sentence (no new ideas)", ph: "Tacos Don Beto is the best place to eat in my neighborhood, and I recommend it to everyone." }
          ] }
      ] },
    { title: "Write & check", min: 6,
      goal: "Write your paragraph, check it, and save it.",
      acts: [
        { type: "write", title: "The best place in my city",
          instr: "Write a paragraph about the best place in your city for something. Answer the reader's questions in your supporting sentences.",
          moves: ["Title.", "Topic sentence.", "Supporting sentences with details (no unrelated information).", "Pronouns instead of repeating the key noun.", "Concluding sentence that returns to the main idea."],
          minWords: 90, maxWords: 200,
          rubric: [
            { type: "title", pts: 1 },
            { type: "has", re: "\\b(first|second|third|in addition|also|another|finally)\\b", min: 2, pts: 1, label: "Words to introduce reasons", tip: "Introduce your reasons with First, Second, Finally." },
            { type: "splice", pts: 2 },
            { type: "complete", pts: 1 },
            { type: "has", re: "\\b(it|its|they|them|their|he|she|his|her)\\b", min: 4, pts: 1, label: "Pronouns", tip: "Use pronouns (it, they, its…) instead of repeating the name of the place." },
            { type: "echo", pts: 1, label: "Concluding sentence returns to the main idea", tip: "In your last sentence, repeat the main idea of your topic sentence with different words." },
            { type: "caps", pts: 1 },
            { type: "punct", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["Every supporting sentence is about my topic (no unrelated information).", "I used pronouns, and the reader knows what they refer to.", "I have no fragments, run-ons or comma splices.", "My concluding sentence does not add a new idea.", "My paragraph has a title."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 5 ───────────────────────── */
{
  n: 5, title: "Definition Paragraphs", focus: "Defining a word · quotations · adjective clauses",
  product: "A definition paragraph: what love, respect, friendship or fear means",
  cando: "I can explain the meaning of a word with examples and a quotation.",
  vocab: [
    { w: "according to", d: "as a person or book says" },
    { w: "accept", d: "to agree to take something; to receive people as they are" },
    { w: "emotion", d: "a strong feeling, like love or anger" },
    { w: "express", d: "to show a feeling or an idea" },
    { w: "loyal", d: "always supporting a person" },
    { w: "meaning", d: "what a word or idea is" },
    { w: "support", d: "to help someone" },
    { w: "trust", d: "to believe that someone is honest" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a definition paragraph. It explains what a word means to the writer.",
      model: { title: "What Home Means", text: "Home is more than a building; it is a place where people feel safe and accepted. A house is made of walls and windows, but a home is made of people and memories. For example, my family moved three times when I was a child, but each new house became our home quickly because we were together. Home is also a place where you can be yourself. You can wear old clothes, sing loudly, and say what you really think. My grandmother, who raised six children, always says, “Home is where someone is waiting for you.” For me, home will always be the people who love me, not the place where I live." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "According to the writer, what is the difference between a house and a home?", o: ["A house is bigger.", "A house is walls and windows; a home is people and memories.", "There is no difference."], a: 1 },
            { q: "What example does the writer give?", o: ["The family moved three times.", "The grandmother bought a house.", "The writer sings in a band."], a: 0 },
            { q: "Whose words does the writer quote?", o: ["A dictionary's", "A teacher's", "The grandmother's"], a: 2 },
            { q: "How does the paragraph end?", o: ["With the writer's personal definition", "With a question", "With a new topic"], a: 0 }
          ] }
      ] },
    { title: "Definitions and quotations", min: 7,
      goal: "Write a definition topic sentence and quote someone's exact words.",
      teach: `<p>A <b>definition topic sentence</b> often follows this pattern:</p>
<p><b>word</b> + <b>is</b> + <b>general group</b> + <b>details</b>: <i><b>Friendship</b> is <b>a relationship</b> that is based on trust and respect.</i></p>
<p>To support it, use <b>examples</b> (<i>For example, …</i>), stories, facts, and <b>quotations</b>.</p>
<p><b>Quoting exact words:</b> use quotation marks, a comma after <i>says/said</i>, and a capital letter: <i>My father says<b>, “Respect</b> is something you earn<b>.”</b></i> The period goes <b>inside</b> the quotation marks.</p>`,
      acts: [
        { type: "mc", title: "The best definition sentence", instr: "Which sentence is the clearest definition?",
          items: [
            { q: "1", o: ["Love is love.", "Love is a deep feeling that makes you care about another person more than yourself.", "Love is in many songs."], a: 1 },
            { q: "2", o: ["Courage is the ability to do something that frightens you.", "Courage is good.", "My brother has courage."], a: 0 },
            { q: "3", o: ["A best friend is a person who knows everything about you and still likes you.", "I have a best friend.", "Best friends are best."], a: 0 }
          ] },
        { type: "fix", strict: true, prefill: true, title: "Punctuate the quotations", instr: "Add a comma, quotation marks and a capital letter. Keep the same words.",
          items: [
            { q: "My mother always says respect starts at home.", a: ["My mother always says, \"Respect starts at home.\""] },
            { q: "My coach said fear is not a reason to stop.", a: ["My coach said, \"Fear is not a reason to stop.\""] },
            { q: "My best friend told me a true friend never leaves.", a: ["My best friend told me, \"A true friend never leaves.\""] }
          ] }
      ] },
    { title: "Adjective clauses", min: 6,
      goal: "Add details to a definition with who, which, that and where.",
      teach: `<p><b>Adjective clauses</b> give more information about a noun:</p>
<ul><li><b>who</b> → people: <i>a friend <b>who</b> listens</i></li><li><b>which / that</b> → things and ideas: <i>a feeling <b>that</b> grows over time</i></li>
<li><b>where</b> → places: <i>a place <b>where</b> you feel safe</i></li></ul>
<p>Adjective clauses are great for definitions: <i>Fear is an emotion <b>that</b> protects us from danger.</i></p>`,
      acts: [
        { type: "mc", title: "who, which or where?", instr: "Choose the correct word.", options: ["who", "which", "where"],
          items: [
            { q: "A neighbor is a person ___ lives near you.", a: "who" },
            { q: "A library is a place ___ you can borrow books.", a: "where" },
            { q: "Jealousy is an emotion ___ can destroy a friendship.", a: "which" },
            { q: "My grandfather, ___ is 90 years old, still walks every day.", a: "who" },
            { q: "The kitchen is the room ___ my family spends the most time.", a: "where" },
            { q: "Trust is something ___ takes years to build.", a: "which" }
          ] },
        { type: "fix", title: "Combine with an adjective clause", instr: "Make one sentence with who, which, that or where.",
          items: [
            { q: "Respect is a feeling. It grows when people are honest.", a: ["Respect is a feeling that grows when people are honest.", "Respect is a feeling which grows when people are honest."] },
            { q: "A true friend is a person. That person supports you in difficult times.", a: ["A true friend is a person who supports you in difficult times.", "A true friend is a person that supports you in difficult times."] },
            { q: "Home is a place. You can relax there.", a: ["Home is a place where you can relax.", "Home is a place that you can relax in.", "Home is a place which you can relax in."] }
          ] }
      ] },
    { title: "Plan", min: 6,
      goal: "Choose one word to define: love, respect, friendship or fear.",
      acts: [
        { type: "plan", title: "Plan your definition paragraph", instr: "Brainstorm first: what does the word mean to you? What examples, stories or facts explain it?",
          fields: [
            { id: "word", label: "Your word (notes)", ph: "respect", note: true },
            { id: "ideas", label: "What does it mean to you? Examples, stories, facts (notes)", ph: "listening, not laughing at others, my teacher in high school", note: true },
            { id: "title", label: "Title", ph: "The True Meaning of Respect", title: true },
            { id: "ts", label: "Topic sentence (word + is + group + details)", ph: "Respect is a feeling that we show when we accept other people as they are." },
            { id: "s1", label: "Explain it in your own words", ph: "When you respect someone, you listen to them, and you do not laugh at their ideas." },
            { id: "ex", label: "Example or short story", ph: "For example, my high school teacher always asked for our opinions, which made us feel important." },
            { id: "quote", label: "A quotation (someone's exact words)", ph: "My father often says, \"Respect is something you earn, not something you demand.\"" },
            { id: "s2", label: "One more detail", ph: "Respect is also important in a family where people have different ideas." },
            { id: "conc", label: "Concluding sentence (restate your definition or make a prediction)", ph: "If more people showed respect, our schools and cities would be better places." }
          ] }
      ] },
    { title: "Write & check", min: 6,
      goal: "Write your paragraph, check it, and save it.",
      acts: [
        { type: "write", title: "What a word means",
          instr: "Write a definition paragraph about love, respect, friendship or fear. Use examples, a quotation and adjective clauses.",
          moves: ["Title.", "Topic sentence that defines the word.", "Supporting sentences: explanation, examples, a quotation in quotation marks.", "Concluding sentence that restates the definition or makes a prediction."],
          minWords: 90, maxWords: 200,
          rubric: [
            { type: "title", pts: 1 },
            { type: "first", pts: 1, re: "\\b(is|are|means)\\b", label: "Topic sentence defines the word", tip: "Begin with a definition: Respect is a feeling that…" },
            { type: "has", re: "\\b(who|which|that|where|whose)\\b", min: 2, pts: 1, label: "Adjective clauses", tip: "Add details with who, which, that or where (at least two)." },
            { type: "has", re: "[\"“][^\"”]{3,}[\"”]", min: 1, pts: 1, label: "Quotation", tip: "Include someone's exact words in quotation marks: My father says, “…”" },
            { type: "has", re: "\\b(for example|for instance|such as|when i was)\\b", min: 1, pts: 1, label: "Examples", tip: "Give an example: For example, …" },
            { type: "splice", pts: 1 },
            { type: "sentences", min: 6, pts: 1 },
            { type: "caps", pts: 1 },
            { type: "punct", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My topic sentence clearly defines the word.", "I explained the word with examples, stories or facts.", "I used quotation marks around someone's exact words.", "I used adjective clauses (who, which, that, where).", "My concluding sentence restates the definition or makes a prediction."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 6 ───────────────────────── */
{
  n: 6, title: "Process Paragraphs", focus: "Chronological order · sequence words · the imperative",
  product: "A process paragraph: how to make or do something you know well",
  cando: "I can explain the steps of a process in clear chronological order.",
  vocab: [
    { w: "carefully", d: "slowly and with attention" },
    { w: "equipment", d: "the things you need for an activity" },
    { w: "ingredient", d: "one of the foods in a recipe" },
    { w: "instructions", d: "information about how to do something" },
    { w: "prepare", d: "to make something ready" },
    { w: "procedure", d: "a way of doing something, step by step" },
    { w: "remove", d: "to take something away" },
    { w: "step", d: "one action in a process" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a process paragraph. Notice the order of the steps and the verbs.",
      model: { title: "How to Make Agua de Jamaica", text: "Making agua de jamaica is easy if you follow a few simple steps. First, buy one cup of dried hibiscus flowers at the market. Next, rinse the flowers with cold water to clean them. Then boil four cups of water and add the flowers. After the water boils again, turn off the heat and let the flowers rest for about fifteen minutes. When the water turns dark red, strain it into a large pitcher. Finally, add four more cups of cold water and sugar to taste. Serve it with ice, and enjoy a refreshing drink on a hot afternoon." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "What is the first step?", o: ["Boil water.", "Buy dried hibiscus flowers.", "Add sugar."], a: 1 },
            { q: "How long do the flowers rest in the hot water?", o: ["Five minutes", "Fifteen minutes", "One hour"], a: 1 },
            { q: "When do you strain the water?", o: ["When it turns dark red", "Before it boils", "After you add ice"], a: 0 },
            { q: "What kind of verbs give the instructions (buy, rinse, boil)?", o: ["Past verbs", "Imperative verbs", "Future verbs"], a: 1 }
          ] }
      ] },
    { title: "Chronological order", min: 6,
      goal: "Put steps in time order and connect them with sequence words.",
      teach: `<p>A <b>process paragraph</b> explains how to do something. The steps are in <b>chronological order</b> (time order).</p>
<p><b>Sequence words:</b> <i>First, … Second, … Next, … Then … After that, … Finally, …</i><br>
<b>Time clauses:</b> <i><b>After</b> the water boils, … / <b>When</b> it turns red, … / <b>Before</b> you start, …</i></p>
<p>Use a comma after most sequence words (<i>First, … Finally, …</i>). <i>Then</i> usually has no comma.</p>`,
      acts: [
        { type: "order", title: "Put the steps in order", instr: "How to plant a tree. Move the sentences into the correct order.",
          items: [
            "Planting a tree is a simple way to help the environment.",
            "First, choose a sunny place with enough space for the roots.",
            "Next, dig a hole that is twice as wide as the roots.",
            "Then put the tree in the hole and fill it with soil.",
            "After that, water the tree well.",
            "Finally, water it every week until it is strong.",
            "In a few years, your tree will give shade and clean air."
          ] },
        { type: "gap", title: "Sequence words", instr: "Complete with a word or phrase from the box.", bank: ["First", "Next", "After", "When", "Finally"],
          items: [
            "[[First]], open the app and create an account.",
            "[[Next|Then]], choose a profile picture.",
            "[[After]] you choose a picture, write a short description.",
            "[[When]] the app asks for your location, choose “Allow” or “Don't allow.”",
            "[[Finally|Last]], press “Save,” and your profile is ready."
          ] }
      ] },
    { title: "The imperative", min: 6,
      goal: "Give clear instructions with the imperative.",
      teach: `<p>The <b>imperative</b> = base verb, with no subject: <i><b>Add</b> the sugar. <b>Mix</b> well.</i></p>
<p>Negative: <b>Don't</b> + base verb: <i><b>Don't</b> open the oven.</i></p>
<p>You can put a sequence word or time clause first: <i>Next, <b>cut</b> the onions. When the oil is hot, <b>add</b> the rice.</i></p>
<p>Process paragraphs can also use <i>you</i> + simple present: <i>First, you cut the onions.</i> Choose one style and use it consistently.</p>`,
      acts: [
        { type: "fix", title: "Make imperative sentences", instr: "Rewrite each sentence as an imperative.",
          items: [
            { q: "You need to wash your hands.", a: ["Wash your hands."] },
            { q: "You should not touch the hot pan.", a: ["Don't touch the hot pan.", "Do not touch the hot pan."] },
            { q: "First, you cut the tomatoes into small pieces.", a: ["First, cut the tomatoes into small pieces."] },
            { q: "You have to wait ten minutes.", a: ["Wait ten minutes.", "Wait for ten minutes."] }
          ] },
        { type: "mc", title: "Correct imperative?", instr: "Choose the correct instruction.",
          items: [
            { q: "1", o: ["Mixes the flour and the eggs.", "Mix the flour and the eggs."], a: 1 },
            { q: "2", o: ["Don't forget your passport.", "No forget your passport."], a: 0 },
            { q: "3", o: ["After the rice is soft, turn off the heat.", "After the rice is soft, turning off the heat."], a: 0 },
            { q: "4", o: ["To press the green button.", "Press the green button."], a: 1 },
            { q: "5", o: ["Be careful with the knife.", "Are careful with the knife."], a: 0 }
          ] }
      ] },
    { title: "Plan", min: 6,
      goal: "Choose something you know how to do: a recipe, a sport, a craft, a phone trick…",
      acts: [
        { type: "plan", title: "Plan your process paragraph", instr: "Write a title and the steps in order. Use the imperative and sequence words.",
          fields: [
            { id: "eq", label: "What do you need? (notes)", ph: "bolillos, beans, cheese, an oven", note: true },
            { id: "title", label: "Title (How to …)", ph: "How to Make Perfect Molletes", title: true },
            { id: "ts", label: "Topic sentence", ph: "Molletes are a quick and delicious breakfast that anyone can prepare in four steps." },
            { id: "s1", label: "Step 1", ph: "First, cut a bolillo in half and spread butter on each side." },
            { id: "s2", label: "Step 2", ph: "Next, cover the bread with refried beans." },
            { id: "s3", label: "Step 3", ph: "Then add grated cheese and put the bread in the oven for ten minutes." },
            { id: "s4", label: "Step 4", ph: "When the cheese melts, remove the molletes carefully and add fresh salsa." },
            { id: "conc", label: "Concluding sentence", ph: "Follow these steps, and you will have a delicious breakfast in less than twenty minutes." }
          ] }
      ] },
    { title: "Write & check", min: 7,
      goal: "Write your paragraph, check it, and save it.",
      acts: [
        { type: "write", title: "How to …",
          instr: "Write a process paragraph about something you know how to do. Give the steps in chronological order.",
          moves: ["Title: How to …", "Topic sentence with a clear controlling idea.", "Steps in chronological order with sequence words.", "Imperative verbs (cut, add, press…).", "Concluding sentence."],
          minWords: 90, maxWords: 200,
          rubric: [
            { type: "title", pts: 1 },
            { type: "has", re: "\\b(first|second|next|then|after that|finally|last)\\b", min: 3, pts: 2, label: "Sequence words", tip: "Use at least three sequence words: First, Next, Then, Finally." },
            { type: "has", re: "(^|[.!?]\\s+)(?:(?:first|second|third|next|then|after that|finally|now|last)(?:,)?\\s+|(?:when|after|before|while|as soon as|if)[^.!?,]*,\\s+)?(add|put|take|cut|mix|wash|buy|choose|open|turn|boil|pour|use|make|go|write|press|click|stir|bring|let|keep|remember|don't|do not|start|wait|serve|place|fill|clean|check|find|ask|try|practice|hold|move|enjoy|plant|dig|water|cover|heat|fold|read|look|watch|call|send|leave|spread|remove|follow|prepare|be|get|give|tap|download|close|repeat|rinse|strain|bake|fry|kick|run|throw|stretch|warm|paint|draw|tie|connect|install|save|type|select)\\b", min: 3, pts: 2, label: "Imperative verbs", tip: "Give instructions with the imperative: Cut the bread. Next, add the beans." },
            { type: "has", re: "\\b(when|after|before|while|as soon as|until)\\b", min: 1, pts: 1, label: "Time clause", tip: "Use a time clause: When the cheese melts, … / After you …" },
            { type: "splice", pts: 1 },
            { type: "caps", pts: 1 },
            { type: "punct", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My topic sentence has a clear controlling idea.", "My steps are in chronological order.", "I used sequence words and time clauses with correct commas.", "I used imperative verbs consistently.", "My paragraph has a title and a concluding sentence."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 7 ───────────────────────── */
{
  n: 7, title: "Opinion Paragraphs", focus: "Fact and opinion · opinion topic sentences · word forms (suffixes)",
  product: "An opinion paragraph: do young children need their own cell phones? (or: is living abroad beneficial?)",
  cando: "I can write a paragraph that gives my opinion and supports it with facts.",
  vocab: [
    { w: "benefit", d: "an advantage; something good" },
    { w: "beneficial", d: "good for you" },
    { w: "communication", d: "sharing information with others" },
    { w: "dependent", d: "needing someone or something" },
    { w: "independence", d: "being able to do things alone" },
    { w: "responsibility", d: "something that is your job to take care of" },
    { w: "safety", d: "being safe; not in danger" },
    { w: "valuable", d: "very useful or important" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read an opinion paragraph. Notice how the writer supports the opinion with facts.",
      model: { title: "Every Student Should Learn to Cook", text: "I strongly believe that every high school should teach students how to cook. First, cooking is a necessary life skill. Many young people leave home for university, and they do not know how to prepare a simple meal. As a result, they spend too much money on fast food. Second, cooking classes can improve students' health. Doctors agree that a diet with more vegetables and less sugar protects people from many illnesses. When students know how to cook, they make healthier choices. Some people say that schools do not have enough time for this subject. However, one class a week is enough to learn the basics. For these reasons, cooking should be part of every school's program." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "What is the writer's opinion?", o: ["Students should eat fast food.", "High schools should teach students how to cook.", "Universities should have cafeterias."], a: 1 },
            { q: "What is the first reason?", o: ["Cooking is a necessary life skill.", "Cooking is fun.", "Fast food is delicious."], a: 0 },
            { q: "What do some people say against the idea?", o: ["Cooking is dangerous.", "Schools do not have enough time.", "Food is expensive."], a: 1 },
            { q: "How does the writer answer them?", o: ["One class a week is enough.", "Students can cook at home.", "The writer doesn't answer."], a: 0 }
          ] },
        { type: "mc", title: "Fact or opinion?", instr: "A fact can be checked. An opinion is what someone believes.", options: ["Fact", "Opinion"],
          items: [
            { q: "Many university students live away from home.", a: "Fact" },
            { q: "Fast food is the worst thing in the world.", a: "Opinion" },
            { q: "Schools should teach practical skills.", a: "Opinion" },
            { q: "Vegetables contain vitamins and fiber.", a: "Fact" },
            { q: "Cooking is more important than math.", a: "Opinion" },
            { q: "Some schools in Mexico have cooking workshops.", a: "Fact" }
          ] }
      ] },
    { title: "Opinion topic sentences", min: 6,
      goal: "State your opinion clearly and answer the other side.",
      teach: `<p>An opinion topic sentence states a clear position, often with <b>should</b> or an opinion phrase:</p>
<p><i>I (strongly) believe that … / In my opinion, … / … should … / I agree / disagree that …</i></p>
<p>✗ <i>Phones are popular.</i> (a fact, not an opinion) &nbsp; ✗ <i>Some people like phones and some don't.</i> (no position)</p>
<p>Strong opinion paragraphs support the opinion with <b>facts and examples</b>, and they mention the <b>other side</b> and answer it: <i><b>Some people say</b> that … <b>However</b>, …</i></p>`,
      acts: [
        { type: "mc", title: "The best opinion topic sentence", instr: "Which sentence states a clear opinion?",
          items: [
            { q: "1", o: ["Many children have cell phones.", "Children under twelve should not have their own cell phones.", "Cell phones were invented in 1973."], a: 1 },
            { q: "2", o: ["Living abroad is beneficial for young people.", "Some people live abroad.", "Canada is a country where many Mexicans live."], a: 0 },
            { q: "3", o: ["Homework has advantages and disadvantages.", "In my opinion, homework should be shorter in primary school.", "Students do homework at home."], a: 1 }
          ] },
        { type: "fix", title: "Answer the other side", instr: "Join the two ideas with However. Write two sentences: Some people say that … However, …",
          items: [
            { q: "Some people say that phones are dangerous for children. / Phones help parents know where their children are.", a: ["Some people say that phones are dangerous for children. However, phones help parents know where their children are."] },
            { q: "Some people say that living abroad is expensive. / Students can work part-time and save money.", a: ["Some people say that living abroad is expensive. However, students can work part-time and save money."] }
          ] }
      ] },
    { title: "Word forms: suffixes", min: 6,
      goal: "Use the correct word form: noun, verb, adjective or adverb.",
      teach: `<table class="mini"><tr><th>Suffix</th><th>Makes a…</th><th>Example</th></tr>
<tr><td>-tion, -ment, -ness, -ity, -ence</td><td>noun</td><td>communica<b>tion</b>, develop<b>ment</b>, happi<b>ness</b>, responsibil<b>ity</b>, independ<b>ence</b></td></tr>
<tr><td>-ize, -en, -ify</td><td>verb</td><td>organ<b>ize</b>, short<b>en</b>, simpl<b>ify</b></td></tr>
<tr><td>-ful, -ous, -able, -al, -ive, -ent</td><td>adjective</td><td>use<b>ful</b>, danger<b>ous</b>, valu<b>able</b>, benefici<b>al</b>, independ<b>ent</b></td></tr>
<tr><td>-ly</td><td>adverb</td><td>quick<b>ly</b>, safe<b>ly</b></td></tr></table>
<p>After <i>a/the</i> → noun. Before a noun or after <i>be</i> → adjective. To describe a verb → adverb.</p>`,
      acts: [
        { type: "mc", title: "Choose the correct form", instr: "Choose the word that fits the sentence.",
          items: [
            { q: "Living abroad helps young people develop ___.", o: ["independent", "independence", "independently"], a: 1 },
            { q: "Phones can be very ___ in an emergency.", o: ["use", "useful", "usefully"], a: 1 },
            { q: "Children need to learn to use the internet ___.", o: ["safe", "safety", "safely"], a: 2 },
            { q: "Good ___ is important in every family.", o: ["communicate", "communication", "communicative"], a: 1 },
            { q: "Having a pet teaches children ___.", o: ["responsible", "responsibility", "responsibly"], a: 1 },
            { q: "Social media can be ___ for young children.", o: ["danger", "dangerous", "dangerously"], a: 1 }
          ] },
        { type: "gap", title: "Write the correct form", instr: "Write the correct form of the word in parentheses.",
          items: [
            "Studying in another country is a [[valuable]] (value) experience.",
            "My parents worry about my [[safety]] (safe) when I travel.",
            "Many students learn to speak English [[fluently]] (fluent) when they live abroad.",
            "There are many [[benefits]] (benefit) to learning about other cultures.",
            "Teenagers can become too [[dependent]] (depend) on their phones."
          ] }
      ] },
    { title: "Brainstorm & plan", min: 7,
      goal: "Choose: Do young children need their own cell phones? OR Is living abroad beneficial?",
      acts: [
        { type: "plan", title: "Brainstorm and plan", instr: "List positive and negative points first. Then decide your opinion and plan your paragraph.",
          fields: [
            { id: "topic", label: "Your topic (notes)", ph: "Do young children need their own cell phones?", note: true },
            { id: "pos", label: "Positive points (notes)", ph: "safety, parents can call them, educational apps", note: true },
            { id: "neg", label: "Negative points (notes)", ph: "less sleep, social media, less time outside, expensive", note: true },
            { id: "title", label: "Title", ph: "Childhood Without Smartphones", title: true },
            { id: "op", label: "Topic sentence with your opinion", ph: "I strongly believe that children under twelve should not have their own cell phones." },
            { id: "r1", label: "Reason 1 + fact or example", ph: "First, phones can affect children's sleep. Many children use their phones in bed, so they are tired at school." },
            { id: "r2", label: "Reason 2 + fact or example", ph: "Second, young children are not ready for social media. For example, they can see dangerous content or talk to strangers." },
            { id: "other", label: "The other side + your answer", ph: "Some people say that phones are necessary for safety. However, a simple phone without internet is enough for emergencies." },
            { id: "conc", label: "Concluding sentence", ph: "For these reasons, parents should wait until their children are older to give them a smartphone." }
          ] }
      ] },
    { title: "Write & check", min: 6,
      goal: "Write your paragraph, check it, and save it.",
      acts: [
        { type: "write", title: "My opinion",
          instr: "Write an opinion paragraph. Support your opinion with facts and examples, and answer the other side.",
          moves: ["Title.", "Topic sentence with a clear opinion.", "Reasons supported by facts or examples.", "The other side: Some people say that … However, …", "Concluding sentence."],
          minWords: 100, maxWords: 210,
          rubric: [
            { type: "title", pts: 1 },
            { type: "first", pts: 1, re: "(\\bi (really |strongly )?(think|believe|feel|agree|disagree)\\b|\\bin my opinion\\b|\\bshould\\b|\\bmust\\b)", label: "Topic sentence with your opinion", tip: "State your opinion: I strongly believe that … / … should …" },
            { type: "has", re: "\\b(first|second|another reason|in addition|also|finally)\\b", min: 2, pts: 1, label: "Words to introduce reasons", tip: "Introduce reasons with First, Second, In addition, Finally." },
            { type: "has", re: "\\b(for example|for instance|according to|such as|percent|studies|research)\\b|%", min: 1, pts: 1, label: "Facts and examples", tip: "Support your opinion with a fact or an example: For example, …" },
            { type: "has", re: "\\b(some people|others say|however|on the other hand)\\b", min: 1, pts: 1, label: "The other side", tip: "Mention the other side and answer it: Some people say that … However, …" },
            { type: "agree", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "caps", pts: 1 },
            { type: "punct", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My topic sentence states a clear opinion.", "I supported my opinion with facts and examples, not only feelings.", "I mentioned the other side and answered it.", "I checked word forms (safe / safety / safely).", "My paragraph has a title and a concluding sentence."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 8 ───────────────────────── */
{
  n: 8, title: "Narrative Paragraphs", focus: "Parts of a narrative · descriptive language · simple past and past progressive",
  product: "A narrative paragraph about a special experience in your life",
  cando: "I can tell a story about a past experience with background, action and an ending.",
  vocab: [
    { w: "anxious", d: "worried and nervous" },
    { w: "celebrate", d: "to do something special for an important day" },
    { w: "embarrassed", d: "feeling shy or stupid in front of people" },
    { w: "experience", d: "something that happens to you" },
    { w: "memorable", d: "easy to remember because it is special" },
    { w: "proud", d: "happy about something you did" },
    { w: "suddenly", d: "very quickly; without warning" },
    { w: "unexpected", d: "surprising" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a narrative paragraph. Find the setting, the action and the ending.",
      model: { title: "My First Day at Work", text: "I will never forget my first day at my first job. It was a hot Saturday in July, and I was seventeen years old. My uncle owned a small taquería in the center of Puebla, and he needed help on weekends. I arrived at seven in the morning, anxious but excited. While my uncle was preparing the meat, I was cutting onions and cilantro. Suddenly, a big group of tourists walked in. They were speaking English, and my uncle looked at me nervously. I took a deep breath and took their orders in English. My hands were shaking, but everyone understood me. At the end of the day, my uncle smiled and paid me double. That day, I learned that my English classes were really useful." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "Where and when does the story happen?", o: ["In a restaurant in Cancún, in December", "In a taquería in Puebla, on a Saturday in July", "In a school, on Monday"], a: 1 },
            { q: "What was the writer doing when the tourists arrived?", o: ["Cutting onions and cilantro", "Taking orders", "Cleaning tables"], a: 0 },
            { q: "What is the most exciting moment (the climax)?", o: ["The writer arrives at seven.", "The writer takes the orders in English.", "The uncle owns a taquería."], a: 1 },
            { q: "What did the writer learn?", o: ["Tacos are popular.", "English classes were really useful.", "Weekends are busy."], a: 1 }
          ] }
      ] },
    { title: "Parts of a narrative", min: 6,
      goal: "Organize a story: setting, action, climax and ending.",
      teach: `<p>A <b>narrative paragraph</b> tells a story in time order:</p>
<ul><li><b>Topic sentence:</b> what the story is about and why it is special.</li><li><b>Setting:</b> background — when, where, who.</li>
<li><b>Action:</b> what happened, in order.</li><li><b>Climax:</b> the most exciting or important moment.</li><li><b>Ending:</b> what happened at the end, or what you learned.</li></ul>
<p><b>Descriptive language</b> helps the reader see, hear and feel the story: <i>My hands were shaking. The room smelled of fresh bread.</i></p>`,
      acts: [
        { type: "order", title: "Put the story in order", instr: "Move the sentences into the correct order.",
          items: [
            "My first concert was the most exciting night of my life.",
            "It was December 2022, and my best friend and I were in Mexico City.",
            "We waited in a long line for three hours in the cold.",
            "When the lights went down, thousands of people started screaming.",
            "Suddenly, my favorite singer appeared on the stage just in front of us.",
            "We sang every song until our voices disappeared.",
            "I still keep my ticket as a memory of that unforgettable night."
          ] },
        { type: "mc", title: "More descriptive", instr: "Which sentence helps the reader see and feel the story?",
          items: [
            { q: "1", o: ["The beach was nice.", "The sand was warm, and the waves were crashing loudly against the rocks."], a: 1 },
            { q: "2", o: ["My heart was pounding as I walked onto the stage.", "I was nervous."], a: 0 },
            { q: "3", o: ["The kitchen smelled of cinnamon and fresh bread.", "The kitchen was good."], a: 0 }
          ] }
      ] },
    { title: "Simple past and past progressive", min: 6,
      goal: "Use the past progressive for background and interrupted actions.",
      teach: `<p><b>Simple past</b> = completed actions, the main events: <i>A group of tourists <b>walked</b> in.</i></p>
<p><b>Past progressive</b> (<i>was/were + -ing</i>) = an action in progress, background: <i>They <b>were speaking</b> English.</i></p>
<p><b>while</b> + past progressive (two long actions): <i><b>While</b> my uncle <b>was cooking</b>, I <b>was cutting</b> onions.</i><br>
<b>when</b> + simple past (a short action interrupts): <i>I <b>was cutting</b> onions <b>when</b> the tourists <b>arrived</b>.</i></p>`,
      acts: [
        { type: "gap", title: "Simple past or past progressive?", instr: "Write the correct form of the verb in parentheses.",
          items: [
            "I [[was walking]] (walk) to school when it started to rain.",
            "While we were eating dinner, the lights [[went]] (go) out.",
            "My brothers [[were playing]] (play) soccer when my mother called them.",
            "Yesterday I [[met]] (meet) an old friend at the market.",
            "When the phone rang, I [[was taking]] (take) a shower.",
            "While the teacher [[was explaining]] (explain) the exercise, Ana was sleeping.",
            "We [[arrived]] (arrive) at the airport at six in the morning.",
            "It [[was snowing]] (snow) when we arrived in Toronto."
          ] },
        { type: "mc", title: "when or while?", instr: "Choose the correct word.", options: ["when", "while"],
          items: [
            { q: "I was cooking ___ my friends arrived.", a: "when" },
            { q: "___ I was studying, my sister was watching TV.", a: "while" },
            { q: "We were driving to the beach ___ the car broke down.", a: "when" },
            { q: "My dog was sleeping ___ I was doing my homework.", a: "while" },
            { q: "___ the movie ended, everybody clapped.", a: "when" }
          ] }
      ] },
    { title: "Brainstorm & plan", min: 7,
      goal: "Choose a special event in your life: your graduation, the first time you did something, a trip…",
      acts: [
        { type: "plan", title: "Plan your story", instr: "Brainstorm the events first. Then write your sentences in time order.",
          fields: [
            { id: "events", label: "The events of your story (notes)", ph: "bus to Monterrey, lost my backpack, a stranger helped me", note: true },
            { id: "title", label: "Title", ph: "A Stranger on the Bus", title: true },
            { id: "ts", label: "Topic sentence: what is the story and why is it special?", ph: "My first trip alone taught me that there are kind people everywhere." },
            { id: "set", label: "Setting: when, where, who?", ph: "It was August 2023, and I was traveling by bus from Puebla to Monterrey for a job interview." },
            { id: "a1", label: "What happened first?", ph: "I arrived at the bus station early, but I was very anxious." },
            { id: "a2", label: "Background action (was/were + -ing) and what happened", ph: "While I was sleeping on the bus, someone took my backpack by mistake." },
            { id: "climax", label: "The climax: the most exciting moment", ph: "When I woke up, I realized that my documents were in the backpack, and I started to panic." },
            { id: "end", label: "The ending: what happened?", ph: "Suddenly, an old woman walked up to me with my backpack and smiled." },
            { id: "conc", label: "Concluding sentence: what did you learn or feel?", ph: "I got the job, but I will always remember that woman's unexpected kindness." }
          ] }
      ] },
    { title: "Write & check", min: 6,
      goal: "Write your story, check it, and save it.",
      acts: [
        { type: "write", title: "A special experience",
          instr: "Write a narrative paragraph about a special experience in your life. Use the simple past, the past progressive and descriptive language.",
          moves: ["Title.", "Topic sentence: the event and why it is special.", "Setting: when, where, who.", "Action in time order, with a climax.", "Ending: what happened or what you learned."],
          minWords: 100, maxWords: 210,
          rubric: [
            { type: "title", pts: 1 },
            { type: "past", min: 8, pts: 2 },
            { type: "has", re: "\\b(was|were) (\\w+ing)\\b", min: 1, pts: 1, label: "Past progressive (was/were + -ing)", tip: "Add background with the past progressive: While I was walking, …" },
            { type: "has", re: "\\b(when|while|after|before|as soon as)\\b", min: 2, pts: 1, label: "Time clauses (when, while…)", tip: "Use when and while to connect the events." },
            { type: "has", re: "\\b(in (19|20)\\d\\d|(19|20)\\d\\d|last (year|summer|week|month)|\\d+ years? ago|years old|one (day|morning|night|afternoon)|on (monday|tuesday|wednesday|thursday|friday|saturday|sunday)|(january|february|march|april|may|june|july|august|september|october|november|december))\\b", min: 1, pts: 1, label: "Setting (when)", tip: "Tell the reader when it happened: It was July 2023 … / Two years ago …" },
            { type: "clauseComma", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "caps", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My topic sentence says what the story is about.", "I gave background information: when, where, who.", "The events are in time order and there is a climax.", "I used the simple past and the past progressive correctly.", "I used descriptive language so the reader can see and feel the story."] }
      ] }
  ]
},
/* ───────────────────────── UNIT 9 (B1) ───────────────────────── */
{
  n: 9, level: "B1", title: "Paragraph Review", focus: "Editing review · unity · articles (a, an, the, Ø)",
  product: "A paragraph about a place you would like to visit (but have never been to)",
  cando: "I can plan, write and edit a well-organized paragraph with accurate grammar and articles.",
  vocab: [
    { w: "destination", d: "the place where you are going" },
    { w: "experience", d: "something that happens to you; to live something" },
    { w: "incredible", d: "very surprising; hard to believe" },
    { w: "journey", d: "a long trip" },
    { w: "landscape", d: "what you see in a natural area: mountains, rivers, fields" },
    { w: "unique", d: "the only one of its kind" },
    { w: "unforgettable", d: "you will always remember it" },
    { w: "worth", d: "good enough to justify the time or money" }
  ],
  steps: [
    { title: "Get ready", min: 5,
      goal: "Read a model paragraph and check the four features of a good paragraph.",
      model: { title: "Why I Want to See Iceland", text: "Iceland is the place I would most like to visit because its nature is unlike anything I have ever seen. First, the island has an incredible variety of landscapes. In a single day, a traveler can see glaciers, black sand beaches, and active volcanoes. Second, Iceland is one of the best places in the world to see the northern lights. Between September and March, green and purple lights often dance across the night sky. I have only seen them in photos, and I want to experience them in real life. Finally, the country has hundreds of natural hot springs. After a long day of hiking in the cold, a visitor can relax in warm water surrounded by snow. Although the trip would be expensive, I am saving money because I know that Iceland would be an unforgettable experience." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "Has the writer been to Iceland?", o: ["Yes, many times.", "No, never.", "Yes, once."], a: 1 },
            { q: "What can a traveler see in a single day?", o: ["Glaciers, black sand beaches and volcanoes", "Only snow", "Big cities"], a: 0 },
            { q: "When can you usually see the northern lights there?", o: ["Between September and March", "Only in July", "Every day of the year"], a: 0 },
            { q: "What is the writer doing to make the trip possible?", o: ["Learning Icelandic", "Saving money", "Buying a coat"], a: 1 }
          ] },
        { type: "mc", title: "The four features", instr: "Check the model like an editor.",
          items: [
            { q: "What is the controlling idea of the topic sentence?", o: ["Iceland is an island.", "Its nature is unlike anything the writer has ever seen.", "The writer likes photos."], a: 1 },
            { q: "How many reasons support the topic sentence?", o: ["Two", "Three", "Five"], a: 1 },
            { q: "Which sentence would break the unity of this paragraph?", o: ["The hot springs are open all year.", "My cousin bought a new phone last week.", "The volcanoes are very active."], a: 1 },
            { q: "What does the concluding sentence do?", o: ["It adds a new topic.", "It returns to the main idea and adds a final thought.", "It asks a question."], a: 1 }
          ] }
      ] },
    { title: "Editing review", min: 7,
      goal: "Find and correct the most common mistakes from Units 1–8.",
      teach: `<p><b>Edit every paragraph for:</b></p><ul>
<li><b>Unity:</b> every sentence supports the controlling idea.</li>
<li><b>Complete sentences:</b> no fragments (<i>Because it was late.</i>), no comma splices (<i>It was late, we left.</i>).</li>
<li><b>Agreement:</b> <i>The people in my city <b>are</b> …</i> / <i>My family <b>travels</b> …</i></li>
<li><b>Commas:</b> compound sentences (<i>…, but …</i>), clauses first (<i>Because …, …</i>), introductory words (<i>Every summer, …</i>).</li>
<li><b>Capital letters:</b> names of people, places, languages and nationalities.</li></ul>`,
      acts: [
        { type: "fix", strict: true, prefill: true, title: "Edit the sentences", instr: "Each sentence has two or more mistakes. Rewrite it correctly.",
          items: [
            { q: "the people in my city is very friendly, they always help tourists.", a: ["The people in my city are very friendly. They always help tourists.", "The people in my city are very friendly, and they always help tourists.", "The people in my city are very friendly, so they always help tourists.", "The people in my city are very friendly; they always help tourists."] },
            { q: "i have never been to europe but i would like to visit spain.", a: ["I have never been to Europe, but I would like to visit Spain."] },
            { q: "Because the flights are expensive. I can't travel this year.", a: ["Because the flights are expensive, I can't travel this year.", "I can't travel this year because the flights are expensive."] },
            { q: "my sister visited peru last year, she loved machu picchu.", a: ["My sister visited Peru last year, and she loved Machu Picchu.", "My sister visited Peru last year. She loved Machu Picchu.", "My sister visited Peru last year; she loved Machu Picchu."] },
            { q: "every summer my family travel to the beach.", a: ["Every summer, my family travels to the beach.", "Every summer my family travels to the beach."] }
          ] },
        { type: "mc", title: "Keep the unity", instr: "Which sentence does NOT support the topic sentence?",
          items: [
            { q: "Topic sentence: Kyoto is the perfect destination for people who love history.", o: ["It has more than a thousand old temples.", "Many streets still look as they did centuries ago.", "Tokyo has the busiest train station in the world.", "Visitors can see traditional tea ceremonies."], a: 2 },
            { q: "Topic sentence: A trip to Patagonia is an adventure for nature lovers.", o: ["Hikers can walk next to enormous glaciers.", "Penguins live along the coast.", "Argentine steak is famous around the world.", "The mountains are some of the most beautiful on Earth."], a: 2 }
          ] }
      ] },
    { title: "Articles: a, an, the, Ø", min: 7,
      goal: "Use articles correctly with places and general ideas.",
      teach: `<table class="mini"><tr><th>Use</th><th>When</th><th>Example</th></tr>
<tr><td><b>a / an</b></td><td>one thing, first mention</td><td>I stayed in <b>a</b> small hotel.</td></tr>
<tr><td><b>the</b></td><td>second mention, or the reader knows which one</td><td><b>The</b> hotel was cheap.</td></tr>
<tr><td><b>the</b></td><td>unique things; oceans, rivers, mountain ranges; country names with <i>States, Kingdom, Republic</i> or plural</td><td><b>the</b> sun, <b>the</b> Pacific, <b>the</b> Amazon, <b>the</b> Andes, <b>the</b> United States, <b>the</b> Netherlands</td></tr>
<tr><td><b>Ø</b> (no article)</td><td>general plurals and uncountables; most countries, cities, single mountains and lakes</td><td>Ø Tourists love Ø food. Ø Japan, Ø Mount Everest, Ø Lake Chapala</td></tr></table>`,
      acts: [
        { type: "gap", title: "a, an or the?", instr: "Complete the story with a, an or the.",
          items: [
            "Last year, I visited [[a]] small town in Chiapas.",
            "[[The]] town has a beautiful old church.",
            "We stayed in [[an]] old hotel near the market.",
            "[[The]] hotel was cheap but very clean.",
            "One afternoon, we took a boat trip on [[the]] Grijalva River.",
            "[[The]] sun was very strong, so we used sunscreen.",
            "Next year, I want to see [[the]] Pacific Ocean from Oaxaca."
          ] },
        { type: "mc", title: "Article or no article?", instr: "Choose the correct option.", options: ["a", "an", "the", "Ø (no article)"],
          items: [
            { q: "I would love to visit ___ Japan.", a: "Ø (no article)" },
            { q: "___ United States has fifty states.", a: "the" },
            { q: "___ Mount Everest is the highest mountain in the world.", a: "Ø (no article)" },
            { q: "___ Andes are the longest mountain range in the world.", a: "the" },
            { q: "I need some ___ information about flights.", a: "Ø (no article)" },
            { q: "She is ___ honest travel agent.", a: "an", why: "The h in honest is silent, so it begins with a vowel sound." },
            { q: "In general, ___ tourists love Mexican food.", a: "Ø (no article)", why: "General plural nouns don't use the." }
          ] }
      ] },
    { title: "Brainstorm & plan", min: 6,
      goal: "Choose a place you would like to visit but have never been to.",
      acts: [
        { type: "plan", title: "Brainstorm and plan", instr: "Brainstorm first, cross out ideas that do not fit, and then write your sentences.",
          fields: [
            { id: "place", label: "The place (notes)", ph: "Japan — Kyoto", note: true },
            { id: "ideas", label: "What could you write about it? (notes — cross out weak ideas)", ph: "temples, food, cherry blossoms, trains, my friend's cousin lives there", note: true },
            { id: "title", label: "Title", ph: "A Journey to Kyoto", title: true },
            { id: "ts", label: "Topic sentence with a controlling idea", ph: "Kyoto is the destination I dream about because it combines ancient traditions with modern life." },
            { id: "r1", label: "Reason 1", ph: "First, the city has more than a thousand temples and shrines." },
            { id: "d1", label: "Details for reason 1", ph: "I have seen pictures of the golden pavilion, and I would like to walk through its gardens." },
            { id: "r2", label: "Reason 2", ph: "Second, Japanese food is unique." },
            { id: "d2", label: "Details for reason 2", ph: "I would love to try a real bowl of ramen in a small local restaurant." },
            { id: "r3", label: "Reason 3", ph: "Finally, the trains in Japan are fast and on time." },
            { id: "d3", label: "Details for reason 3", ph: "From Kyoto, a visitor can reach Tokyo in less than three hours." },
            { id: "conc", label: "Concluding sentence", ph: "Although the trip is expensive, I am sure that Kyoto would be worth every peso." }
          ] }
      ] },
    { title: "Write & check", min: 7,
      goal: "Write your paragraph, edit it carefully, and save it.",
      acts: [
        { type: "write", title: "A place I would like to visit",
          instr: "Write a paragraph of 8–12 sentences about a place you would like to visit but have never been to. Check that every supporting sentence relates to your controlling idea.",
          moves: ["Title.", "Topic sentence with a controlling idea.", "Reasons with details — only ideas that support the controlling idea.", "A variety of sentences: simple, compound and complex.", "Concluding sentence."],
          minWords: 120, maxWords: 230,
          rubric: [
            { type: "title", pts: 1 },
            { type: "firstNot", re: "(going to (write|talk|tell)|this paragraph|in this paragraph|i will (write|talk|tell)|\\?)", pts: 1, label: "Topic sentence is not an announcement", tip: "State your controlling idea: Kyoto is the destination I dream about because…" },
            { type: "has", re: ",\\s*(and|but|so|or)\\s", min: 1, pts: 1, label: "Compound sentence", tip: "Include a compound sentence: …, and / but / so …" },
            { type: "has", re: "\\b(because|although|when|if|after|before|while|who|which|that|where)\\b", min: 3, pts: 1, label: "Complex sentences", tip: "Use because, although, when, if, who or which to write complex sentences." },
            { type: "agree", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "echo", pts: 1, label: "Concluding sentence returns to the main idea", tip: "In your last sentence, return to the place and your main idea." },
            { type: "caps", pts: 1 },
            { type: "punct", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My topic sentence has a clear controlling idea.", "All my supporting sentences relate to the controlling idea.", "I used a variety of sentence types with correct commas.", "I checked articles (a, an, the, Ø) and capital letters.", "I have no fragments, comma splices or agreement mistakes."] }
      ] }
  ]
},

/* ───────────────────────── UNIT 10 (B1) ───────────────────────── */
{
  n: 10, level: "B1", title: "From Paragraphs to Essays", focus: "Essay outline · introduction with hook and thesis · body paragraphs · conclusion",
  product: "A five-paragraph essay: an opinion essay about art classes or a process essay about making new friends",
  cando: "I can organize my ideas into a short essay with an introduction, body paragraphs and a conclusion.",
  vocab: [
    { w: "argue", d: "to give reasons for an opinion" },
    { w: "essential", d: "completely necessary" },
    { w: "evidence", d: "facts that show something is true" },
    { w: "furthermore", d: "also; in addition (formal)" },
    { w: "require", d: "to need; to make something necessary" },
    { w: "significant", d: "important; large enough to notice" },
    { w: "solution", d: "an answer to a problem" },
    { w: "strategy", d: "a plan to achieve something" }
  ],
  steps: [
    { title: "Get ready", min: 6,
      goal: "Read a model essay. An essay is a group of paragraphs about one main idea.",
      model: { title: "Why Every City Needs More Bike Lanes", label: "Model essay", text: "Every morning, millions of people in Mexico spend more than an hour in traffic. Cars fill the streets, the air is dirty, and drivers arrive at work tired and stressed. One simple solution is the bicycle. Cities should build more bike lanes because they improve people's health, reduce pollution, and save money.\n\nFirst, bike lanes help people become healthier. When cycling is safe, more people use their bikes to go to work or school. Just thirty minutes of cycling a day strengthens the heart and helps people control their weight. In addition, exercise reduces stress, so cyclists often feel happier than drivers.\n\nSecond, more bicycles mean less pollution. Every person who rides a bike instead of driving a car keeps harmful gases out of the air. Cities such as Bogotá and Copenhagen have built hundreds of kilometers of bike lanes, and their residents now enjoy quieter and cleaner streets.\n\nFinally, bike lanes are a smart way to save money. A bike lane costs much less to build and maintain than a new road for cars. Families also save money because a bicycle does not need gasoline, insurance, or expensive parking.\n\nIn conclusion, bike lanes make cities healthier, cleaner, and cheaper places to live. Some people think that there is not enough space for them, but the space we give to bicycles gives us much more in return. If our leaders invest in bike lanes today, our cities will be better places for the next generation." },
      acts: [
        { type: "mc", title: "Understand the model", instr: "Choose the correct answer.",
          items: [
            { q: "How many paragraphs does the essay have?", o: ["Three", "Five", "Seven"], a: 1 },
            { q: "What are the three reasons in the thesis?", o: ["Health, pollution, money", "Traffic, parking, gasoline", "Bogotá, Copenhagen, Mexico"], a: 0 },
            { q: "Which paragraph talks about pollution?", o: ["The first body paragraph", "The second body paragraph", "The conclusion"], a: 1 },
            { q: "How does the conclusion end?", o: ["With a new reason", "With a prediction about the future", "With a question"], a: 1 }
          ] },
        { type: "mc", title: "Find the parts of the essay", instr: "What is each sentence?", options: ["Hook", "Thesis statement", "Topic sentence of a body paragraph", "Restated thesis"],
          items: [
            { q: "Every morning, millions of people in Mexico spend more than an hour in traffic.", a: "Hook", why: "It gets the reader's attention with a surprising fact." },
            { q: "Cities should build more bike lanes because they improve people's health, reduce pollution, and save money.", a: "Thesis statement" },
            { q: "Second, more bicycles mean less pollution.", a: "Topic sentence of a body paragraph" },
            { q: "In conclusion, bike lanes make cities healthier, cleaner, and cheaper places to live.", a: "Restated thesis" },
            { q: "Finally, bike lanes are a smart way to save money.", a: "Topic sentence of a body paragraph" }
          ] }
      ] },
    { title: "The introduction", min: 7,
      goal: "Start your essay with a hook and end the introduction with a clear thesis.",
      teach: `<p><b>Essay outline:</b> I. Introduction → II–IV. Body paragraphs → V. Conclusion.</p>
<p>The <b>introduction</b> has three parts:</p><ol><li><b>Hook</b> — gets the reader's attention: a <b>question</b>, a <b>surprising fact</b>, a <b>quotation</b> or a <b>short story</b>.</li>
<li><b>Background</b> — one or two sentences that connect the hook to your topic.</li>
<li><b>Thesis statement</b> — the last sentence: the main idea of the whole essay. It often lists the points of the body paragraphs.</li></ol>
<p><i>Thesis:</i> Cities should build more bike lanes because they <b>improve health</b>, <b>reduce pollution</b>, and <b>save money</b>. → three body paragraphs.</p>`,
      acts: [
        { type: "mc", title: "What kind of hook is it?", instr: "Identify the type of hook.", options: ["Question", "Surprising fact", "Quotation", "Short story"],
          items: [
            { q: "Have you ever arrived at a party where you did not know anyone?", a: "Question" },
            { q: "The average teenager spends more than seven hours a day looking at a screen.", a: "Surprising fact" },
            { q: "My grandmother always says, “A friend is a treasure you choose yourself.”", a: "Quotation" },
            { q: "On my first day at a new school, I ate lunch alone in the library.", a: "Short story" }
          ] },
        { type: "mc", title: "Choose the best thesis statement", instr: "Which one is the clearest thesis for a five-paragraph essay?",
          items: [
            { q: "1", o: ["Art is interesting.", "High schools should require art classes because art develops creativity, reduces stress, and prepares students for many careers.", "Do you like art?"], a: 1 },
            { q: "2", o: ["There are three effective ways to make new friends: join a club, volunteer, and say yes to invitations.", "I have many friends.", "This essay is about friends."], a: 0 },
            { q: "3", o: ["Exams are in June.", "Students take exams.", "Good preparation for a big exam requires a study plan, enough sleep, and practice tests."], a: 2 }
          ] }
      ] },
    { title: "Body paragraphs and conclusion", min: 7,
      goal: "Connect each body paragraph to the thesis and write a strong conclusion.",
      teach: `<p>Each <b>body paragraph</b> begins with a <b>topic sentence</b> that develops <b>one point</b> of the thesis, followed by supporting sentences (examples, facts, explanations).</p>
<p><b>Transitions</b> connect the paragraphs: <i>First, … Second, … Another reason is … Finally, …</i> and the ideas inside them: <i>In addition, … Furthermore, … For example, …</i></p>
<p>The <b>conclusion</b>: <i>In conclusion, …</i> + restate the thesis with new words + summarize the points + a <b>final thought</b> (a suggestion, an opinion or a prediction). <b>No new information.</b></p>`,
      acts: [
        { type: "order", title: "Put the outline in order", instr: "An essay about preparing for a big exam. Put the sentences in the order they appear in the essay.",
          items: [
            "Hook: The night before my university entrance exam, I could not sleep at all.",
            "Thesis: Good preparation for a big exam requires a study plan, enough sleep, and practice tests.",
            "Body 1: First, a study plan helps you review every topic without stress.",
            "Body 2: Second, sleeping well is as important as studying.",
            "Body 3: Finally, practice tests show you what you still need to learn.",
            "Conclusion: In conclusion, students who plan, rest, and practice will feel confident on exam day."
          ] },
        { type: "mc", title: "Choose the best conclusion", instr: "Which conclusion follows the rules?",
          items: [
            { q: "Essay: Three ways to make new friends (clubs, volunteering, invitations).", o: ["In conclusion, making friends takes some effort, but joining a club, volunteering, and saying yes to invitations make it much easier. Try one of these strategies this week, and you may meet your next best friend.", "In conclusion, another good way to make friends is to use dating apps, and some people also meet friends at the gym.", "In conclusion, friends."], a: 0, why: "The second option adds new information; the third is not a complete sentence." },
            { q: "Essay: High schools should require art classes.", o: ["Art classes are on Tuesdays.", "In conclusion, art is not a luxury but an essential part of education. Schools that keep art classes will graduate more creative and confident students.", "In conclusion, sports are also important, and schools need new gyms."], a: 1 }
          ] }
      ] },
    { title: "Outline", min: 8,
      goal: "Choose your essay and complete the outline. Each part becomes a paragraph.",
      acts: [
        { type: "plan", title: "Outline your essay", instr: "Choose ONE essay: Opinion — Should high schools require an art class, or focus only on academic subjects? / Process — What are some ways to make new friends? The examples are for the opinion essay.",
          fields: [
            { id: "type", label: "My essay: opinion (art classes) or process (making new friends)? (notes)", ph: "opinion — art classes should be required", note: true },
            { id: "title", label: "Title", ph: "Art Belongs in Every High School", title: true },
            { id: "hook", label: "I. Introduction — Hook", ph: "What would a school day look like without music, painting, or theater?" },
            { id: "bg", label: "I. Introduction — Background (1–2 sentences)", ph: "Many high schools are reducing art classes so that students can spend more time on math and science." },
            { id: "thesis", label: "I. Introduction — Thesis statement (with your three points)", ph: "I believe that high schools should require an art class because art develops creativity, reduces stress, and prepares students for many careers." },
            { id: "b1", label: "II. Body 1 — Topic sentence", ph: "First, art classes help students become more creative.", newPara: true },
            { id: "b1s", label: "II. Body 1 — Support (2–3 sentences)", ph: "When students paint or play music, they learn to look for new solutions. This skill is useful in every subject, even in math and science." },
            { id: "b2", label: "III. Body 2 — Topic sentence", ph: "Second, art is a healthy way to reduce stress.", newPara: true },
            { id: "b2s", label: "III. Body 2 — Support (2–3 sentences)", ph: "High school students have a lot of pressure from exams and homework. For example, an hour of drawing or singing gives them a break and helps them focus again." },
            { id: "b3", label: "IV. Body 3 — Topic sentence", ph: "Finally, art can prepare students for real careers.", newPara: true },
            { id: "b3s", label: "IV. Body 3 — Support (2–3 sentences)", ph: "Designers, architects, and video game creators all need artistic skills. Furthermore, many companies want employees who can think in creative ways." },
            { id: "c1", label: "V. Conclusion — Restate your thesis", ph: "In conclusion, art classes are not a luxury; they are an essential part of a complete education.", newPara: true },
            { id: "c2", label: "V. Conclusion — Final thought (suggestion, opinion or prediction)", ph: "If schools keep art in their programs, they will graduate students who are more creative, calmer, and better prepared for the future." }
          ] }
      ] },
    { title: "Write & check", min: 12,
      goal: "Write your essay, check it, and save it.",
      acts: [
        { type: "write", title: "My five-paragraph essay",
          instr: "Build your first draft from your outline, then develop it: add examples and details to each body paragraph. Leave an empty line between paragraphs.",
          moves: ["Title.", "Introduction: hook, background, thesis statement.", "Three body paragraphs: each one starts with a topic sentence about one point of the thesis.", "Transitions between and inside paragraphs.", "Conclusion: restate the thesis and end with a final thought — no new information."],
          minWords: 250, maxWords: 450,
          rubric: [
            { type: "title", pts: 1 },
            { type: "paras", min: 5, pts: 2 },
            { type: "thesis", pts: 1, re: "\\b(should|because|ways?|reasons?|strateg\\w+|steps?|important|essential|believe|think|three|several|best)\\b", tip: "Your thesis should state your main idea clearly, for example: … should … because … / There are three ways to …" },
            { type: "paraLen", min: 3, pts: 1 },
            { type: "has", re: "\\b(first|second|third|another|finally|in addition|furthermore|moreover|for example|for instance)\\b", min: 4, pts: 1, label: "Transitions", tip: "Use transitions: First, Second, Finally, In addition, Furthermore, For example." },
            { type: "lastPara", re: "\\b(in conclusion|to sum up|in summary|to conclude|overall|for these reasons)\\b", pts: 1, label: "Conclusion paragraph", tip: "Start your last paragraph with In conclusion, … and restate your thesis." },
            { type: "agree", pts: 1 },
            { type: "splice", pts: 1 },
            { type: "vocab", min: 2, pts: 1 }
          ],
          checklist: ["My introduction has a hook, background and a thesis statement.", "Each body paragraph has a topic sentence that supports the thesis.", "I used transitions between and inside paragraphs.", "My conclusion restates the thesis and gives a final thought, with no new information.", "I checked grammar, punctuation and capital letters."] }
      ] }
  ]
}
];
